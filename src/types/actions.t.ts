import TelegramBot, {User} from "node-telegram-bot-api";

// TODO: change types to <T> form
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

	export type IDefaultActionEventsNames = keyof TDEFAULT_ACTIONS;

	export type IDefaultActionEvents = {
		resolve: IDefaultActionEvent<IDefaultActionEventsNames>
	}

	export interface IActionApplicationMapNode {
		readonly code: string | number;
		name?: string;
		data?: any;			// @ts-ignore
		response?: IResolvedEvent;
		next?: IActionApplicationMap & IActionApplicationMapKeyboard
	}

	export type IActionApplicationMapKeyboard = {
		keyboard?: TelegramBot.InlineKeyboardMarkup | TelegramBot.ReplyKeyboardMarkup;
	}

	export interface IActionApplicationMap {
		[key: string]: IActionApplicationMapNode | null
	}

	export type IInvertedApplicationActionMap<T = TDEFAULT_ACTIONS> = {	// @ts-ignore
		[Key in keyof T as `INVERTED_${Key}`]: IActionApplicationMapNode | null;
	}
}
export default TActions;