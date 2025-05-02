import type {IDefaultActionEvents, IDefaultActionEventsNames, IEvents, IResolvedEventHandler} from "../assets/actions";
import TelegramBot from "node-telegram-bot-api";
import QuerySchemes from "../data/query_schemes";
import {ResolvedEventHandler} from "./response";

export default class Events implements IEvents {
	ResolvedEventHandler: IResolvedEventHandler = {
		BC(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		CASHBACK(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		CDC(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		CDOC(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		COMBO(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		EQI_INSTALL(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		EQI_SERVICE(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		EQ_3_INSTALL(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		EQ_INSTALL(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		EQ_SERVICE(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		EQ_UNINSTALL(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		FNS(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		IACQ(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		INVEST(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		RISK(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		RKO(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		SELFIE_CC(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		SELFIE_DC(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		SELFIE_DC_N2B(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		TRADEACQ(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		ZHKU(args: any): Promise<void> {
			return Promise.resolve(undefined);
		},

		ZPC(args: any): Promise<void> {
			return Promise.resolve(undefined);
		}
	}
}