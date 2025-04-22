import TelegramBot from "node-telegram-bot-api";
import {TTelegramHandler} from "../types/telegram.t";
import ITelegramHandlerOptions = TTelegramHandler.ITelegramHandlerOptions;
import {MainApplicationKeyboard} from "../assets/keyboards";
import dotenv from "dotenv";

dotenv.config();

export default class TelegramHandler {
	protected client!: TelegramBot;

	constructor(opts?: ITelegramHandlerOptions) {
		this.client =
			opts?.client ?? new TelegramBot(process.env.TELEGRAM_TOKEN!, {
				polling: true
			});
	}

	run(): void {
		this.client.on('text', (msg) => {
			console.log(msg)
			if (msg.text === '/start') {
				this.client.sendMessage(msg.from?.id!, `Какую встречу вы завершили?`, {
					reply_markup: MainApplicationKeyboard,
					reply_to_message_id: msg.message_id,
					parse_mode: "HTML",
					protect_content: true,
					disable_notification: true,
				}).catch((err) =>
					console.log(err));
			}
		});
	}
}