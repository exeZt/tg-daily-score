import TActions from "../types/actions.t";

export const DEFAULT_ACTIONS: TActions.TDEFAULT_ACTIONS = {
	ZPC : 0x000001,
	RKO : 0x000002,
	CDOC: 0x000003,
	EQ_INSTALL: 0x000004,
	EQ_SERVICE: 0x000005,
	EQ_UNINSTALL: 0x000006,
	EQI_INSTALL: 0x000007,
	EQI_SERVICE: 0x000008,
	EQ_3_INSTALL: 0x000009,
	SELFIE_DC: 0x00000A,
	SELFIE_CC: 0x00000B,
	SELFIE_DC_N2B: 0x00000C,
	COMBO : 0x0000A1,
	INVEST : 0x0000A2,
	CASHBACK: 0x0000A3,
	ZHKU: 0x0000A4,
	FNS: 0x0000B1,
	TRADEACQ: 0x0000B2,
	IACQ: 0x0000B3,
	RISK: 0x0000B4,
	BC: 0x0000B5,
	CDC: 0x0000B6,
	$GO_BACK: 0xFFAABB
}

export const DEFAULT_ACTION_MAP: TActions.IActionApplicationMap = {
	ZPC : {
		code: 0x000001,
		data: 280,
		name: 'Зпк',
		next: {
			COMBO : {
				name: 'Комбо',
				code: 0x0000A1,
				data: 380,
			},
			INVEST : {
				name: 'БС',
				code: 0x0000A2,
				data: 380
			},
			CASHBACK: {
				name: 'Кеш',
				code: 0x0000A3,
				data: 30,
			},
			ZHKU: {
				name: 'ЖКХ',
				code: 0x0000A4,
				data: 30
			},
		}
	},
	RKO : {
		code: 0x000002,
		data: 770,
		name: 'РКО',
		next: {
			FNS: {
				name: 'Фнс',
				code: 0x0000B1
			},
			TRADEACQ:  {
				name: 'Кросс ТЭ',
				code: 0x0000B2
			},
			IACQ:  {
				name: 'Кросс ИЭ',
				code: 0x0000B3
			},
			RISK:  {
				name: 'Риски',
				code: 0x0000B4
			},
			BC:  {
				name: 'БК',
				code: 0x0000B5
			},
			CDC:  {
				name: 'Кросс ДК',
				code: 0x0000B6
			},
		}
	},
	CDOC: {
		name: 'КММБ',
		code: 0x000003,
		data: 510
	},
	EQ_INSTALL: {
		name: 'Установка ТЭ',
		code: 0x000004,
		data: 510
	},
	EQ_SERVICE: {
		name: 'Сервис ТЭ',
		code: 0x000005,
		data: 510
	},
	EQ_UNINSTALL: {
		name: 'Демонтаж ТЭ',
		code: 0x000006,
		data: 280
	},
	EQI_INSTALL: {
		name: 'Установка ИКР',
		code: 0x000007,
		data: 770
	},
	EQI_SERVICE: {
		name: 'Сервис ИКР',
		code: 0x000008,
		data: 770
	},
	EQ_3_INSTALL: {
		name: 'Установка Касса 3в1',
		code: 0x000009,
		data: 770
	},
	SELFIE_DC: {
		name: 'Селфи ДК',
		code: 0x000010,
		data: 280
	},
	SELFIE_CC: {
		name: 'Селфи КК',
		code: 0x000011,
		data: 510
	},
	SELFIE_DC_N2B: {
		name: 'Селфи ДК n2b',
		code: 0x000012,
		data: 350
	},
}

export const DEFAULT_INVERTED_ACTION_MAP: TActions.IInvertedApplicationActionMap = {
	INVERTED_$GO_BACK: {
		code: ~0xFFAAFF
	},
	INVERTED_BC: {
		code: ~0x0000B5
	},
	INVERTED_CASHBACK: {
		code: ~0x0000A3
	},
	INVERTED_CDC: {
		code: ~0x0000B6
	},
	INVERTED_CDOC: {
		code: ~0x000003
	},
	INVERTED_COMBO: {
		code: ~0x0000A1
	},
	INVERTED_EQI_INSTALL: {
		code: ~0x000007
	},
	INVERTED_EQI_SERVICE: {
		code: ~0x000008
	},
	INVERTED_EQ_3_INSTALL: {
		code: ~0x000009
	},
	INVERTED_EQ_INSTALL: {
		code: ~0x000004
	},
	INVERTED_EQ_SERVICE: {
		code: ~0x000005
	},
	INVERTED_EQ_UNINSTALL: {
		code: ~0x000006
	},
	INVERTED_FNS: {
		code: ~0x0000B1
	},
	INVERTED_IACQ: {
		code: ~0x0000B3
	},
	INVERTED_INVEST: {
		code: ~0x0000A2
	},
	INVERTED_RISK: {
		code: ~0x0000B4
	},
	INVERTED_RKO: {
		code: ~0x000002
	},
	INVERTED_SELFIE_CC: {
		code: ~0x00000B
	},
	INVERTED_SELFIE_DC: {
		code: ~0x00000A
	},
	INVERTED_SELFIE_DC_N2B: {
		code: ~0x00000C
	},
	INVERTED_TRADEACQ: {
		code: ~0x0000B2
	},
	INVERTED_ZHKU: {
		code: ~0x0000A4
	},
	INVERTED_ZPC: {
		code: ~0x000001
	}
}