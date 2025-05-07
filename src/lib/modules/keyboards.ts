import TelegramBot, {InlineKeyboardButton} from "node-telegram-bot-api";
import {DEFAULT_ACTIONS} from "../../assets/actions";
import TActions from "../../types/actions.t";
import IActionApplicationMap = TActions.IActionApplicationMap;
import IActionApplicationMapNode = TActions.IActionApplicationMapNode;
import type TKeyboards from "../../types/keyboards";

export default class Keyboards {
	public static async keyboardBuilder(entryPoint: IActionApplicationMap, options?: TKeyboards.IKeyboardBuilderOptions, callback?: (kb: (TelegramBot.InlineKeyboardMarkup)) => void): Promise<void> {
		let btn: InlineKeyboardButton[][];
		if (!options) {
			btn = Object.entries(entryPoint!)
				.map((v: [string, (IActionApplicationMapNode | null)]): InlineKeyboardButton[] => [{
					text: (v[1]?.name) ?? v[0],
					callback_data: (v[1]?.code!).toString(),
				}]);
		} else {
			//TODO: переработать переключение данных на просто нажатие + имя евента, в обход
			//ебучих логических операций
			btn = Object.entries(entryPoint!)
				.map((v: [string, (IActionApplicationMapNode | null)]): InlineKeyboardButton[] => {
					let code: number = parseInt((v[1]?.code)?.toString()!, 10);
					console.log(options.buttons?.set_inactive?.includes(v[0], 0))
					console.log(options.buttons?.set_inactive?.includes(v[0], 0)
						? (~code).toString()
						: (code).toString(),)
					return [{
						text: options.buttons?.set_inactive?.includes(v[0], 0) ? `${v[1]?.name} [-]`: `${v[1]?.name} [+]`,
						callback_data: options.buttons?.set_inactive?.includes(v[0], 0) ? (~code).toString() : (code).toString(),
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

	public static keyboardResolver(kb: TelegramBot.InlineKeyboardButton[][]): IActionApplicationMap {
		let object = {}
		for (const el of kb) {
			let name = el[0].text.replace(/(\s\[(\-|\+)\])/,'');
			if (name !== 'Back')// @ts-ignore
				object[name] = { code: el[0].callback_data, name: name }
		}
		return object as IActionApplicationMap;
	}
}