import type { InlineKeyboardMarkup} from "node-telegram-bot-api";
import {DEFAULT_ACTIONS,} from "./actions";

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
};