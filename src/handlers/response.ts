import TelegramBot, {InlineKeyboardMarkup} from "node-telegram-bot-api";
import {MainApplicationKeyboard} from "../assets/keyboards";
import Keyboards from "../lib/modules/keyboards";
import Events from "./events";
import {DEFAULT_ACTION_MAP, DEFAULT_INVERTED_ACTION_MAP} from "../assets/actions";
import TActions from "../types/actions.t";
import TEvents from "../types/events.t";
import IActionApplicationMapNode = TActions.IActionApplicationMapNode;

export default function ResponseHandler(callbackResponse: TelegramBot.CallbackQuery, user: TelegramBot.User, client: TelegramBot) {
	// TODO: normalize types
	const responseFounder = (current?: TActions.IActionApplicationMapNode, prev?: TActions.IActionApplicationMapNode) => {
		let data: TActions.IActionApplicationMapNode | (TActions.IActionApplicationMap & TActions.IInvertedApplicationActionMap<TActions.TDEFAULT_ACTIONS>) = current ?? Object.assign(DEFAULT_ACTION_MAP, DEFAULT_INVERTED_ACTION_MAP);
		Object.entries(data).forEach(([key, mapNode]: [string, IActionApplicationMapNode]) => {
			if (mapNode.code.toString() === callbackResponse.data!) {
				if (mapNode?.next) {
					Keyboards.keyboardBuilder(mapNode.next!, {
						buttons: {
							add_exit: true
						}
					}, (keyboard: InlineKeyboardMarkup) => {
						client.sendMessage(user.id, `Crosses:`, {
							reply_markup: keyboard
						})
							.catch((err) => console.log(err));
					})
						.catch((err) => console.log(err));
					onResolvedEvent({
						callbackQuery: callbackResponse,
						client: client, //@ts-ignore
						event: key,
						mapNode: mapNode,
						oldNode: prev,
						user: user
					})
						.catch((err) => console.log(err));
				} else {
					onResolvedEvent({
						callbackQuery: callbackResponse,
						client: client,//@ts-ignore
						event: key,
						mapNode: mapNode,
						oldNode: prev,
						user: user
					})
						.catch((err: any) => console.log(err));
				}
			}
			if (mapNode?.next) {
				// @ts-ignore
				responseFounder(mapNode?.next!, mapNode);
			}
		})
	}
	responseFounder()
}

export const goToMainMenu = async (args: TEvents.IResolvedEventParams): Promise<void> => {
	await args.client.sendMessage(args.user.id, `Какую встречу вы завершили?`, {
		reply_markup: MainApplicationKeyboard
	});
}

export const onResolvedEvent: TEvents.IResolvedEvent = async (params: TEvents.IResolvedEventParams): Promise<void> => {
	let event = params.event;
	// @ts-ignore
	await new Events().ResolvedEventHandler[event].call(this, params);
}