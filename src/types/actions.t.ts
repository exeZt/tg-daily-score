import TelegramBot, {User} from "node-telegram-bot-api";
import TEvents from "./events.t";

namespace TActions {
	export type TDEFAULT_ACTIONS = {
		ZPC: number,
		RKO: number,
		CDOC: number,
		EQ_INSTALL: number,
		EQ_SERVICE: number,
		EQ_UNINSTALL: number,
		EQI_INSTALL: number,
		EQI_SERVICE: number,
		EQ_3_INSTALL: number,
		SELFIE_DC: number,
		SELFIE_CC: number,
		SELFIE_DC_N2B: number,
		COMBO:number,
		INVEST: number,
		CASHBACK: number,
		ZHKU: number,
		FNS: number,
		TRADEACQ: number,
		IACQ: number,
		RISK: number,
		BC: number,
		CDC: number,
		$GO_BACK: number
	}

	export type IDefaultActionEvent<T = IDefaultActionEventsNames, Y = any, U = any> =
		(ev: T, user: User, args?: (Array<Y> | ArrayLike<Y>) | Y, callback?: (...args: any | U) => void) => Promise<void>;

	export type IDefaultActionEventsNames =
		keyof TDEFAULT_ACTIONS

	export type IDefaultActionEvents = {
		resolve: IDefaultActionEvent<IDefaultActionEventsNames>
	}

	export interface IActionApplicationMapNode {
		readonly code: string | number;
		data?: any;
		response?: TEvents.IResolvedEvent;
		next?: IActionApplicationMap & IActionApplicationMapKeyboard
	}

	export type IActionApplicationMapKeyboard = {
		keyboard?: TelegramBot.InlineKeyboardMarkup | TelegramBot.ReplyKeyboardMarkup;
	}

	export type IActionApplicationMapKeyboardBuilder =
		(entryPoint: IActionApplicationMapKeyboard)
			=> IActionApplicationMapKeyboard['keyboard'];

	export interface IActionApplicationMap {
		[key: string]: IActionApplicationMapNode | null
	}
}
export default TActions;