import SqliteApplicationHandler from "./sqlite";
import {DEFAULT_ACTIONS} from "../assets/actions";
import TEvents from "../types/events.t";
import ShemeBase from "../assets/sql-schemes";
import TelegramBot from "node-telegram-bot-api";
import TelegramVisualEffects from "../lib/telegram.vs";
import {SQLOutputValue} from "node:sqlite";

class ApplicationDataHandler {
	getCurrentData = async (date: string, callback: (data: Array<any> | Record<string, SQLOutputValue>[]) => void): Promise<void> => {
		let currentDatabaseName = `daily-${date}`;
		let responseData: Record<string, SQLOutputValue>[] | undefined = DefaultDataHandler.handler.query(ShemeBase.GET_CURRENT_DATE.SQL, [
			currentDatabaseName
		]);
		callback(responseData === undefined ? [] : responseData);
	}

	getAllTables = () => {//@ts-ignore
		let final: Record<string, SQLOutputValue>[] = [];
		let array: Record<string, SQLOutputValue>[] =	DefaultDataHandler.handler.query(ShemeBase.GET_TABLE_NAMES.SQL, [])!;
		array.map((v) => {
			// @ts-ignore
			v = { name: v?.name?.replace('daily-', '') };
			final.push(v as Record<string, SQLOutputValue>);
		})
		return final;
	}
}

export default class DefaultDataHandler extends ApplicationDataHandler {
	public static readonly handler: SqliteApplicationHandler = new SqliteApplicationHandler(true);

	constructor() {
		super();
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

	removeDataBaseRecord = (params: TEvents.IResolvedEventParams) => {
		let currentDatabaseName = `daily-${this.getDate()}`;
		console.log(currentDatabaseName)
		let event: string = (params.event as string).replace('INVERTED_', '')
		this.checkDatabaseIsExists();
		DefaultDataHandler.handler.query(ShemeBase.REMOVE_RECORD.SQL, [
			currentDatabaseName,
			event,
			event,
			'1',
			params.user.username!,
		]);

		new TelegramVisualEffects().onRecordRemoved(params, event);
	}

	addDataBaseRecord = (params: TEvents.IResolvedEventParams) => {
		let currentDatabaseName = `daily-${this.getDate()}`;
		this.checkDatabaseIsExists();
		if (this.checkUserRowIsExists(params.user)) {
			this.createUserRecord(params.user);
		}
		DefaultDataHandler.handler.query(ShemeBase.ADD_RECORD.SQL, [
			currentDatabaseName,
			params.event as string,
			params.event as string,
			'1',
			params.user.username!,
		]);
		new TelegramVisualEffects().onRecordAdded(params);
	};

	// TODO: add movement for UTC time
	getDate = (): `${string}-${string}-${string}` => {
		return `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
	}
}