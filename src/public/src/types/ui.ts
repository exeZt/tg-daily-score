export type TDEFAULT_ACTIONS = {
	ZPC: number,
	RKO: number,
	CDOC: number,
	EQ_INSTALL: number,
	EQ_SERVICE: number,
	EQ_UNINSTALL: number,
	EQI_INSTALL: number,
	EQI_SERVICE: number,
	EQ_3_INSTALL: number,
	SELFIE_DC: number,
	SELFIE_CC: number,
	SELFIE_DC_N2B: number,
	COMBO:number,
	INVEST: number,
	CASHBACK: number,
	ZHKU: number,
	FNS: number,
	TRADEACQ: number,
	IACQ: number,
	RISK: number,
	BC: number,
	CDC: number,
	$GO_BACK: number
} & {
	telegram: string,
	id?: number
}