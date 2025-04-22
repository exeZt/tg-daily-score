import {InlineKeyboardMarkup} from "node-telegram-bot-api";

export const MainApplicationKeyboard: InlineKeyboardMarkup = {
	inline_keyboard: [
		[
			{text: 'ЗПК', callback_data: '1'},
			{text: 'РКО', callback_data: '2'}
		],
		[
			{text: 'КММБ', callback_data: '3'}
		],
		[
			{text: 'Установка ТЭ', callback_data: '4'},
			{text: 'Сервис ТЭ', callback_data: '5'}
		],
		[
			{text: 'Демонтаж ТЭ', callback_data: '6'},
		],
		[
			{text: 'Сервис ИКР', callback_data: '7'},
			{text: 'Установка ИКР', callback_data: '8'}
		],
		[
			{text: 'Установка 3 в 1', callback_data: '9'},
		],
		[
			{text: 'Селфи ДК', callback_data: '0'},
			{text: 'Селфи КК', callback_data: '01'},
		],
		[
			{text: 'Селфи ДК n2b', callback_data: '02'},
		]
	]
}