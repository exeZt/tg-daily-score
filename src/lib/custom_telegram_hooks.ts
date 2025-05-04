import TelegramBot from "node-telegram-bot-api";
import {DEFAULT_ACTION_MAP} from "../assets/actions";
import keyboardBuilder from "../assets/keyboards";
import TActions from "../types/actions.t";
import {onResolvedEvent} from "../handlers/response";

type RemoveUnrequired<T> = {
	[Key in keyof T]-?: T[Key]
}

export default class CustomTelegramHooks {
	constructor() {
	}
	
	updateMessageText = (opts: RemoveUnrequired<TelegramBot.EditMessageCaptionOptions>, client: TelegramBot) => {
		
	}
}