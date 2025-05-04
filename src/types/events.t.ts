import TelegramBot from "node-telegram-bot-api";
import TActions from "./actions.t";

namespace TEvents {
	// TODO: EDIT event declaration
	export type IResolvedEvent =
		(params: {
			callbackQuery: TelegramBot.CallbackQuery;
			client: TelegramBot;
			event: "$GO_BACK" | "ZPC" | "RKO" | "CDOC" | "EQ_INSTALL" |
				"EQ_SERVICE" | "EQ_UNINSTALL" | "EQI_INSTALL" |
				"EQI_SERVICE" | "EQ_3_INSTALL" | "SELFIE_DC" | "SELFIE_CC" | "SELFIE_DC_N2B" | "COMBO" | "INVEST" | "CASHBACK" | "ZHKU" | "FNS" | "TRADEACQ" | "IACQ" | "RISK" | "BC" | "CDC";
			mapNode: any;
			oldNode?: TActions.IActionApplicationMapNode;
			user: TelegramBot.User
		}, callback?: (...args: any[]) => void) => Promise<void>

	export interface IResolvedEventParams {
		event: keyof TActions.TDEFAULT_ACTIONS;
		mapNode: TActions.IActionApplicationMapNode;
		user: TelegramBot.User;
		client: TelegramBot;
		oldNode?: TActions.IActionApplicationMapNode;
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