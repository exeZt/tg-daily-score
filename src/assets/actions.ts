import TelegramBot, {User} from "node-telegram-bot-api";
import {ZpcCrossProductKeyboard} from "./keyboards";

export const DEFAULT_ACTIONS = {
	ZPC : 0x000001,
	RKO : 0x000002,
	CDOC: 0x000003,
	EQ_INSTALL: 0x000004,
	EQ_SERVICE: 0x000005,
	EQ_UNINSTALL: 0x000006,
	EQI_INSTALL: 0x000007,
	EQI_SERVICE: 0x000008,
	EQ_3_INSTALL: 0x000009,
	SELFIE_DC: 0x00000A,
	SELFIE_CC: 0x00000B,
	SELFIE_DC_N2B: 0x00000C,
	// crosses
	COMBO : 0x0000A1,
	INVEST : 0x0000A2,
	CASHBACK: 0x0000A3,
	ZHKU: 0x0000A4,
	// crosses rko
	FNS: 0x0000B1,
	TRADEACQ: 0x0000B2,
	IACQ: 0x0000B3,
	RISK: 0x0000B4,
	BC: 0x0000B5,
	CDC: 0x0000B6,
}

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
}

export type IDefaultActionEvent<T = IDefaultActionEventsNames, Y = any, U = any> =
	(ev: T, user: User, args?: (Array<Y> | ArrayLike<Y>) | Y, callback?: (...args: any | U) => void) => Promise<void>;

export interface IEvents {
	
}

export type IDefaultActionEventsNames =
	keyof TDEFAULT_ACTIONS

export type IDefaultActionEvents = {
	resolve: IDefaultActionEvent<IDefaultActionEventsNames>
}

export interface IActionApplicationMapNode {
	readonly code: string | number;
	data?: any;
	response?: IResolvedEvent;
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

export const DEFAULT_ACTION_MAP: IActionApplicationMap = {
	ZPC : {
		code: 0x000001,
		data: 280,
		next: {
			COMBO : {
				code: 0x0000A1,
				data: 380,
			},
			INVEST : {
				code: 0x0000A2,
				data: 380
			},
			CASHBACK: {
				code: 0x0000A3,
				data: 30,
			},
			ZHKU: {
				code: 0x0000A4,
				data: 30
			},
		}
	},
	RKO : {
		code: 0x000002,
		data: 770
	},
	CDOC: {
		code: 0x000003,
		data: 510
	},
	EQ_INSTALL: {
		code: 0x000004,
		data: 510
	},
	EQ_SERVICE: {
		code: 0x000005,
		data: 510
	},
	EQ_UNINSTALL: {
		code: 0x000006,
		data: 280
	},
	EQI_INSTALL: {
		code: 0x000007,
		data: 770
	},
	EQI_SERVICE: {
		code: 0x000008,
		data: 770
	},
	EQ_3_INSTALL: {
		code: 0x000009,
		data: 770
	},
	SELFIE_DC: {
		code: 0x000010,
		data: 280
	},
	SELFIE_CC: {
		code: 0x000011,
		data: 380
	},
	SELFIE_DC_N2B: {
		code: 0x000012,
		data: 350
	},
}



export type IResolvedEvent =
	(params: IResolvedEventParams,	callback?: (...args: Array<any>) => void) => Promise<void>


export interface IResolvedEventParams {
	event: keyof TDEFAULT_ACTIONS;
	mapNode: IActionApplicationMapNode;
	user: TelegramBot.User;
	client: TelegramBot;
	callbackQuery: TelegramBot.CallbackQuery;
	sqlQuery?: string; // As SQLEventSchemeName
}

export interface IResolvedEventHandler extends IEventMap {}

export type IEventMap = {
	[EventName in keyof TDEFAULT_ACTIONS]: (...args: Array<any>) => Promise<void>
}

//`on${[EventName in keyof TDEFAULT_ACTIONS]}`
//[EventName in keyof TDEFAULT_ACTIONS as `on${Capitalize<Lowercase<string & EventName>>}`] : IDefaultActionEvent<EventName>
