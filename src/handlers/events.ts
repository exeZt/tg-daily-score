import {ShemeBase} from "../data/query_schemes";
import SqliteApplicationHandler from "../data/sqlite";
import TEvents from "../types/events.t";
import DefaultDataHandler from "../data/default";
import {goToMainMenu} from "./response";

export default class Events implements TEvents.IEvents {
	ResolvedEventHandler: TEvents.IResolvedEventHandler = {
		async BC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async CASHBACK(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async CDC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async CDOC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async COMBO(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async EQI_INSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async EQI_SERVICE(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async EQ_3_INSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async EQ_INSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async EQ_SERVICE(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async EQ_UNINSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async FNS(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async IACQ(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async INVEST(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async RISK(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async RKO(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async SELFIE_CC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async SELFIE_DC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async SELFIE_DC_N2B(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async TRADEACQ(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async ZHKU(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async ZPC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().addDataBaseRecord(args);
		},

		async $GO_BACK(args: TEvents.IResolvedEventParams): Promise<void> {
			await goToMainMenu(args);
		}
	}
}