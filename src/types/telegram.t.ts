import TelegramBot from "node-telegram-bot-api";

export namespace TTelegramHandler {
	export interface ITelegramHandlerOptions {
		client?: TelegramBot;
		log?:
			"info" |
			"warn" |
			"error";
	}
}