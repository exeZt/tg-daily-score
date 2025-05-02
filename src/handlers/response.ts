import TelegramBot from "node-telegram-bot-api";
import keyboardBuilder from "../assets/keyboards";
import Events from "./events";
import {DEFAULT_ACTION_MAP} from "../assets/actions";
import TActions from "../types/actions.t";
import TEvents from "../types/events.t";

export default function ResponseHandler(callbackResponse: TelegramBot.CallbackQuery, user: TelegramBot.User, client: TelegramBot) {
	// TODO: normalize types
	const responseFounder = (current?: object) => {
		Object.entries(current ?? DEFAULT_ACTION_MAP).forEach(([key, mapNode]) => {
			if (mapNode.code.toString() === callbackResponse.data!) {
				if (mapNode?.next) {
					keyboardBuilder(mapNode.next!, (keyboard) => {
						console.log(keyboard);
						client.sendMessage(user.id, `Crosses:`, {
							reply_markup: keyboard
						})
							.catch((err) => console.log(err));
					})
						.catch((err) => console.log(err));
				} else {
					onResolvedEvent({
						callbackQuery: callbackResponse,
						client: client,
						event: key as keyof TActions.TDEFAULT_ACTIONS,
						mapNode: mapNode,
						user: user
					})
						.catch((err: any) => console.log(err));
				}
			}
			if (mapNode?.next) {
				responseFounder(mapNode?.next!);
			}
		})
	}
	responseFounder()
}

export const onResolvedEvent: TEvents.IResolvedEvent = async (params: TEvents.IResolvedEventParams, callback?: (...args: any) => void): Promise<void> => {
	let event = params.event;
	// @ts-ignore
	await new Events().ResolvedEventHandler[event].call(this, params);
}