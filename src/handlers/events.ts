
import {ShemeBase} from "../data/query_schemes";
import SqliteApplicationHandler from "../data/sqlite";
import TEvents from "../types/events.t";
import DefaultDataHandler from "../data/default";
import {goToMainMenu} from "./response";

export default class Events implements TEvents.IEvents {
	ResolvedEventHandler: TEvents.IResolvedEventHandler = {
		async INVERTED_$GO_BACK(args: TEvents.IResolvedEventParams): Promise<void> {
			// new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_BC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_CASHBACK(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_CDC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_CDOC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_COMBO(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_EQI_INSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_EQI_SERVICE(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_EQ_3_INSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_EQ_INSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_EQ_SERVICE(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_EQ_UNINSTALL(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_FNS(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_IACQ(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_INVEST(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_RISK(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_RKO(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_SELFIE_CC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_SELFIE_DC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_SELFIE_DC_N2B(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_TRADEACQ(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_ZHKU(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
		async INVERTED_ZPC(args: TEvents.IResolvedEventParams): Promise<void> {
			new DefaultDataHandler().removeDataBaseRecord(args);
		},
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