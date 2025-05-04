import SqliteApplicationHandler from "./sqlite";
import {DEFAULT_ACTIONS} from "../assets/actions";
import TEvents from "../types/events.t";
import {ShemeBase} from "./query_schemes";
import TelegramBot, {InlineKeyboardMarkup} from "node-telegram-bot-api";
import keyboardBuilder from "../assets/keyboards";
import CustomTelegramHooks from "../lib/custom_telegram_hooks";
import RedisApplicationHandler from "./redis";

export default class DefaultDataHandler {
	protected static handler: SqliteApplicationHandler = new SqliteApplicationHandler(true);

	constructor() {
		this.createDataBase();
	}

	createDataBase = () => {
		let currentDatabaseName = `daily-${this.getDate()}`;
		DefaultDataHandler.handler.query(`
		CREATE TABLE IF NOT EXISTS "${currentDatabaseName}" (
			"telegram" TEXT UNIQUE,
			${Object.keys(DEFAULT_ACTIONS).map((v) => `"${v}" INTEGER DEFAULT 0`)}
		);`);
	}

	checkDatabaseIsExists = (): void => {
		let currentDatabaseName = `daily-${this.getDate()}`;
		if (DefaultDataHandler.handler.query(`SELECT NAME FROM sqlite_master WHERE TYPE='table' AND NAME='${currentDatabaseName}';`, [])!.length === 0) {
			this.createDataBase();
		}
	}

	checkUserRowIsExists = (user: TelegramBot.User): boolean => {
		let currentDatabaseName = `daily-${this.getDate()}`;
		return (DefaultDataHandler.handler.query(
			`SELECT \`telegram\` FROM \`${currentDatabaseName}\` WHERE \`telegram\`='${user.username}';`
			, [])!.length === 0);
	}

	createUserRecord = (user: TelegramBot.User) => {
		let currentDatabaseName = `daily-${this.getDate()}`;
		DefaultDataHandler.handler.query(`INSERT INTO \`${currentDatabaseName}\` (\`telegram\`) VALUES ('${user.username!}')`, []);
	}

	addDataBaseRecord = (params: TEvents.IResolvedEventParams) => {
		let currentDatabaseName = `daily-${this.getDate()}`;
		this.checkDatabaseIsExists();
		if (this.checkUserRowIsExists(params.user)) {
			this.createUserRecord(params.user);
		}
		console.log(params.oldNode)
		DefaultDataHandler.handler.query(ShemeBase.ADD_RECORD.SQL, [
			currentDatabaseName,
			params.event,
			params.event,
			'1',
			params.user.username!,
		]);

		new RedisApplicationHandler().updateValue(params.callbackQuery.message?.message_id.toString()!, params.event);
		new RedisApplicationHandler().useStorage(params.callbackQuery.message?.message_id.toString()!, '', (v) => {
			//TODO: Create external function for this block of code
			if (typeof params.oldNode !== "undefined") {
				let inactiveArray: string[] = (v?.split('|') ?? []);
				inactiveArray.push(params.event)
				keyboardBuilder(params.oldNode!.next!, {
					buttons: {
						add_exit: true,
						set_inactive: inactiveArray
					}
				}, (kb) => {
					params.client.editMessageText(`Cross`, {
						message_id:	params.callbackQuery.message?.message_id,
						chat_id: params.user.id,
						reply_markup: kb as InlineKeyboardMarkup
					});
				})
					.catch((err) => console.log(err));
			}
		});
	};

	// TODO: add movement for UTC time
	getDate = (): `${string}-${string}-${string}` => {
		return `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
	}
}