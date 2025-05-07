import Keyboards from "../lib/modules/keyboards";
import RedisApplicationHandler from "../data/redis";
import type {InlineKeyboardButton, InlineKeyboardMarkup} from "node-telegram-bot-api";
import TEvents from "../types/events.t";

export default class TelegramVisualEffects {
	onRecordAdded = (params: TEvents.IResolvedEventParams) => {
		let msgId = params.callbackQuery.message?.message_id.toString()!;
		new RedisApplicationHandler().updateValue(msgId, params.event);
		new RedisApplicationHandler().useStorage(msgId, '', (v) => {
			if (typeof params.oldNode !== "undefined") {
				let inactiveArray: string[] = (v?.split('|') ?? []);
				inactiveArray.push(params.event)
				console.log(params.oldNode)
				Keyboards.keyboardBuilder(params.oldNode!.next!, {
					buttons: {
						add_exit: true,
						set_inactive: inactiveArray
					}
				}, (kb: InlineKeyboardMarkup) => {
					params.client.editMessageText(`Cross`, {
						message_id:	params.callbackQuery.message?.message_id,
						chat_id: params.user.id,
						reply_markup: kb as InlineKeyboardMarkup
					});
				})
					.catch((err) => console.log(err));
			}
		});
	}

	onRecordRemoved = (params: TEvents.IResolvedEventParams, event: string) => {
		let msgId = params.callbackQuery.message?.message_id.toString()!;
		let inlineCb: InlineKeyboardButton[][] = params.callbackQuery.message?.reply_markup?.inline_keyboard!;
		let kb1 = Keyboards.keyboardResolver(inlineCb)
		new RedisApplicationHandler().updateValue(msgId, event, true);
		new RedisApplicationHandler().useStorage(params.callbackQuery.message?.message_id.toString()!, '', (v) => {
			if (typeof kb1 !== 'undefined') {
				let activeArray: string[] = (v?.split('|') ?? []);
				console.log(kb1)
				Keyboards.keyboardBuilder(kb1, {
					buttons: {
						add_exit: true,
						set_inactive: activeArray
					}
				}, kb => {
					new RedisApplicationHandler().updateValue(msgId, activeArray.join('|').replace(event, ''));
					params.client.editMessageText('Cross', {
						message_id: params.callbackQuery.message?.message_id,
						chat_id: params.user.id,
						reply_markup: kb as InlineKeyboardMarkup
					})
				})
			}
		});
	}
}