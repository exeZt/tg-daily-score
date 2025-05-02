import TelegramBot, {InlineKeyboardButton, InlineKeyboardMarkup} from "node-telegram-bot-api";
import {
	DEFAULT_ACTIONS,
	IActionApplicationMap,
	IActionApplicationMapKeyboard,
	IActionApplicationMapKeyboardBuilder, IActionApplicationMapNode
} from "./actions";

//TODO: REVIEW type in map -> v [str, ????] can't be undefined!
export default async function keyboardBuilder(entryPoint: IActionApplicationMap, callback?: (kb: (IActionApplicationMapKeyboard["keyboard"] | TelegramBot.InlineKeyboardMarkup)) => void): Promise<void> {
	const btn: InlineKeyboardButton[][] = Object.entries(entryPoint!)
		.map((v: [string, (IActionApplicationMapNode | null)]): InlineKeyboardButton[] => [{
			text: v[0],
			callback_data: (v[1]?.code!).toString(),
	}]);

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