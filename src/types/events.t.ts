import TelegramBot from "node-telegram-bot-api";
import TActions from "./actions.t";

namespace TEvents {
	export type IResolvedEvent =
		(params: IResolvedEventParams,	callback?: (...args: Array<any>) => void) => Promise<void>

	export interface IResolvedEventParams {
		event: keyof TActions.TDEFAULT_ACTIONS;
		mapNode: TActions.IActionApplicationMapNode;
		user: TelegramBot.User;
		client: TelegramBot;
		callbackQuery: TelegramBot.CallbackQuery;
		sqlQueryParams?: (string | number)[]; // As SQLEventSchemeName
	}

	export interface IResolvedEventHandler extends IEventMap {}

	export type IEventMap = {
		[EventName in keyof TActions.TDEFAULT_ACTIONS]: (args: IResolvedEventParams) => Promise<void>
	}

	export interface IEvents {}
}

export default TEvents;