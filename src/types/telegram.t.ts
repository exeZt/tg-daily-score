import TelegramBot from "node-telegram-bot-api";

export namespace TTelegramHandler {
	export interface ITelegramHandler {
		run: () => void;
	}

	export type ITelegramCustomEvents<T> = {
		readonly [EventName in keyof T]: ITelegramCustomEventsOpts;
	}

	export interface ITelegramCustomEventsOpts {
		handler?: () => void;
		responseParams?: TelegramBot.SendMessageOptions
	}

	export interface ITelegramHandlerOptions<Y = TelegramBot.TelegramEvents> {
		client?: TelegramBot;
		log?:
			"info" |
			"warn" |
			"error";
		events: ITelegramCustomEvents<Y>;
	}
}