import {ShemeBase} from "../data/query_schemes";
import SqliteApplicationHandler from "../data/sqlite";
import TEvents from "../types/events.t";
import DefaultDataHandler from "../data/default";

export default class Events implements TEvents.IEvents {
	ResolvedEventHandler: TEvents.IResolvedEventHandler = {
		async BC(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async CASHBACK(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async CDC(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async CDOC(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async COMBO(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async EQI_INSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async EQI_SERVICE(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async EQ_3_INSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async EQ_INSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async EQ_SERVICE(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async EQ_UNINSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async FNS(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async IACQ(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async INVEST(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async RISK(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async RKO(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async SELFIE_CC(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async SELFIE_DC(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async SELFIE_DC_N2B(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async TRADEACQ(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async ZHKU(args: TEvents.IResolvedEventParams): Promise<void> {
			return Promise.resolve(undefined);
		},

		async ZPC(args: TEvents.IResolvedEventParams): Promise<void> {
			let data = new SqliteApplicationHandler(true)
			let transaction_1 = data.query(ShemeBase.CHECK_EXISTS_ROW.SQL, [
				new DefaultDataHandler().getDate(),
				args.user.username!
			], true);

			if (!transaction_1) {
				data.query(ShemeBase.ADD_RECORD.SQL, [
						new DefaultDataHandler().getDate(),
						args.event,
						args.event,
						1,
						args.user.username!
					], false);

			}
		}
	}
}