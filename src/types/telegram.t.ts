import TelegramBot from "node-telegram-bot-api";

namespace TTelegram {
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
		message_opts?: TelegramBot.SendMessageOptions;
		log?:
			"info" |
			"warn" |
			"error";
		events: ITelegramCustomEvents<Y>;
	}
}
export default TTelegram;