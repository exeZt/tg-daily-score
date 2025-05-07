import TelegramBot from "node-telegram-bot-api";

namespace TEvents {
	export type IResolvedEvent =
		(params: {
			callbackQuery: TelegramBot.CallbackQuery;
			client: TelegramBot;			// @ts-ignore
			event: (keyof TDEFAULT_ACTIONS & keyof IInvertedApplicationActionMap);
			mapNode: any;			// @ts-ignore
			oldNode?: IActionApplicationMapNode;
			user: TelegramBot.User
		}, callback?: (...args: any[]) => void) => Promise<void>

	export interface IResolvedEventParams {			// @ts-ignore
		event: (keyof TDEFAULT_ACTIONS & keyof IInvertedApplicationActionMap);			// @ts-ignore
		mapNode: IActionApplicationMapNode;
		user: TelegramBot.User;
		client: TelegramBot;			// @ts-ignore
		oldNode?: IActionApplicationMapNode;
		callbackQuery: TelegramBot.CallbackQuery;
		sqlQueryParams?: (string | number)[]; // As SQLEventSchemeName
	}

	export interface IResolvedEventHandler extends IEventInvertedMap, IEventMap {}

	export type IEventMap = {			// @ts-ignore
		[EventName in keyof TDEFAULT_ACTIONS]: (args: IResolvedEventParams) => Promise<void>;
	}

	export type IEventInvertedMap = {			// @ts-ignore
		[EventName in keyof IInvertedApplicationActionMap]: (args: IResolvedEventParams) => Promise<void>;
	}

	export interface IEvents {}
}
export default TEvents;