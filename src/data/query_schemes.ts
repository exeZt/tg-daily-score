import {TDEFAULT_ACTIONS} from "../assets/actions";

export default class QuerySchemes {
	async resolve (schemeNameToSearch: keyof TDEFAULT_ACTIONS): Promise<void> {

	}
}

const ShemeBase: IShemeBase = {
	BC: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	CASHBACK: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	CDC: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	CDOC: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	COMBO: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	EQI_INSTALL: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	EQI_SERVICE: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	EQ_3_INSTALL: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	EQ_INSTALL: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	EQ_SERVICE: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	EQ_UNINSTALL: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	FNS: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	IACQ: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	INVEST: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	RISK: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	RKO: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	SELFIE_CC: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	SELFIE_DC: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	SELFIE_DC_N2B: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	TRADEACQ: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	ZHKU: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	},
	ZPC: {
		table: `daily`,
		query: `select * from daily`,
		params: []
	}
}

type IShemeBase<T extends string | number | symbol = never> = {
	[EventName in keyof TDEFAULT_ACTIONS | T]:
		(EventName extends "EQ_INSTALL" | "EQ_UNINSTALL" ? Required<IShemeShemeType> : IShemeShemeType)
}

interface IShemeShemeType {
	readonly table: string;
	readonly query: string;
	params?: string[]; // for ? in query
}