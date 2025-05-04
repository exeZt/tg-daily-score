import TelegramBot from "node-telegram-bot-api";
import type {CallbackQuery} from "node-telegram-bot-api";
import {TTelegramHandler} from "../types/telegram.t";
import {MainApplicationKeyboard} from "../assets/keyboards";
import dotenv from "dotenv";
import ResponseHandler from "./response";

dotenv.config();

export default class TelegramHandler implements TTelegramHandler.ITelegramHandler {
	protected client!: TelegramBot;
	protected responseParams!: TelegramBot.SendMessageOptions;

	constructor(opts?: TTelegramHandler.ITelegramHandlerOptions) {
		this.client =
			opts?.client ?? new TelegramBot(process.env.TELEGRAM_TOKEN!, {
				polling: true
			});
		this.responseParams
			= (opts?.events?.text?.responseParams! ?? opts?.message_opts ?? {
				parse_mode: "HTML"
		});
	}

	run(): void {
		this.client.on('text', (msg) => {
			if (msg.text === '/start') {
				this.client.sendMessage(msg.from?.id!, `Какую встречу вы завершили?`,
				this.responseParams ?? {
					reply_markup: MainApplicationKeyboard,
					reply_to_message_id: msg.message_id,
					parse_mode: "HTML",
					protect_content: true,
					disable_notification: true,
				}).catch((err) =>
					console.log(err));
			}
		});

		this.client.on('callback_query', (cb: CallbackQuery) => {
			if (cb.data?.toString()) {
				ResponseHandler(cb, cb.from, this.client);
			}
		});
	}
}