import TelegramBot, {InlineKeyboardButton, InlineKeyboardMarkup} from "node-telegram-bot-api";
import {
	DEFAULT_ACTIONS,
} from "./actions";
import TActions from "../types/actions.t";
import IActionApplicationMap = TActions.IActionApplicationMap;
import IActionApplicationMapNode = TActions.IActionApplicationMapNode;
import IActionApplicationMapKeyboard = TActions.IActionApplicationMapKeyboard;

interface IKeyboardBuilderOptionsButtons {
	add_exit?: boolean;
	set_inactive?: Array<string>;
}

interface IKeyboardBuilderOptions {
	buttons?: IKeyboardBuilderOptionsButtons
}

//TODO: REVIEW type in map -> v [str, ????] can't be undefined!
export default async function keyboardBuilder(entryPoint: IActionApplicationMap, options?: IKeyboardBuilderOptions, callback?: (kb: (IActionApplicationMapKeyboard["keyboard"] | TelegramBot.InlineKeyboardMarkup)) => void): Promise<void> {
	let btn: InlineKeyboardButton[][];
	if (!options) {
		btn = Object.entries(entryPoint!)
			.map((v: [string, (IActionApplicationMapNode | null)]): InlineKeyboardButton[] => [{
				text: v[0],
				callback_data: (v[1]?.code!).toString(),
			}]);
	} else {
		btn = Object.entries(entryPoint!)
			.map((v: [string, (IActionApplicationMapNode | null)]): InlineKeyboardButton[] => {
				return [{
					text: options.buttons?.set_inactive?.includes(v[0], 0) ? `${v[0]} [-]`: `${v[0]} [+]`,
					callback_data: options.buttons?.set_inactive?.includes(v[0], 0) ? (~v[1]?.code!).toString() : (v[1]?.code)?.toString(),
				}];
			});
		if (options.buttons?.add_exit) {
			btn.push([{
				text: `Back`,
				callback_data: (DEFAULT_ACTIONS.$GO_BACK).toString()
			}])
		}
	}
	callback?.({
		inline_keyboard: await btn
	})
}


export const MainApplicationKeyboard: InlineKeyboardMarkup = {
	inline_keyboard: [
		[
			{text: 'ЗПК', callback_data: DEFAULT_ACTIONS.ZPC.toString()},
			{text: 'РКО', callback_data: DEFAULT_ACTIONS.RKO.toString()}
		],
		[
			{text: 'КММБ', callback_data: DEFAULT_ACTIONS.CDOC.toString()}
		],
		[
			{text: 'Установка ТЭ', callback_data: DEFAULT_ACTIONS.EQ_INSTALL.toString()},
			{text: 'Сервис ТЭ', callback_data: DEFAULT_ACTIONS.EQ_SERVICE.toString()}
		],
		[
			{text: 'Демонтаж ТЭ', callback_data: DEFAULT_ACTIONS.EQ_UNINSTALL.toString()},
		],
		[
			{text: 'Сервис ИКР', callback_data: DEFAULT_ACTIONS.EQI_SERVICE.toString()},
			{text: 'Установка ИКР', callback_data: DEFAULT_ACTIONS.EQI_INSTALL.toString()}
		],
		[
			{text: 'Установка 3 в 1', callback_data: DEFAULT_ACTIONS.EQ_3_INSTALL.toString()},
		],
		[
			{text: 'Селфи ДК', callback_data: DEFAULT_ACTIONS.SELFIE_DC.toString()},
			{text: 'Селфи КК', callback_data: DEFAULT_ACTIONS.SELFIE_CC.toString()},
		],
		[
			{text: 'Селфи ДК n2b', callback_data: DEFAULT_ACTIONS.SELFIE_DC_N2B.toString()},
		]
	]
}

export const ZpcCrossProductKeyboard: InlineKeyboardMarkup = {
	inline_keyboard: [
		[
			{ text: "Combo", callback_data: '' },
			{ text: "Invest", callback_data: DEFAULT_ACTIONS.ZPC.toString() },
		],
		[
			{ text: "Cashback", callback_data: '' },
			{ text: "Zhku", callback_data: DEFAULT_ACTIONS.ZPC.toString() },
		],
		[
			{ text: "Tokenisation", callback_data: '' },
			{ text: "End", callback_data: DEFAULT_ACTIONS.ZPC.toString() },
		]
	]
}

export const RkoCrossProductKeyboard: InlineKeyboardMarkup = {
	inline_keyboard: [
		[
			{ text: "FNS", callback_data: '' },
			{ text: "TRADEACQ", callback_data: DEFAULT_ACTIONS.ZPC.toString() },
		],
		[
			{ text: "IACQ", callback_data: '' },
			{ text: "RISK", callback_data: DEFAULT_ACTIONS.ZPC.toString() },
		],
		[
			{ text: "BC", callback_data: '' },
			{ text: "CDC", callback_data: DEFAULT_ACTIONS.ZPC.toString() },
		],
	]
}
	//.backup
// export default async function keyboardBuilder(entryPoint: IActionApplicationMap, callback?: (kb: (IActionApplicationMapKeyboard["keyboard"] | TelegramBot.InlineKeyboardMarkup)) => void): Promise<void> {
// 	const btn: InlineKeyboardButton[][] = Object.entries(entryPoint!)
// 		.map((v: [string, (IActionApplicationMapNode | null)]): InlineKeyboardButton[] => [{
// 			text: v[0],
// 			callback_data: (v[1]?.code!).toString(),
// 		}]);
//
// 	callback?.({
// 		inline_keyboard: await btn
// 	})
// }