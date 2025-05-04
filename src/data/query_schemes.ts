export default class QuerySchemes {
	public static ShemeBase: IShemeBase = {
		ADD_RECORD: {
			SQL: "UPDATE `?` SET `?` = `?` + ? WHERE `telegram` = '?';",
			ARGS_COUNT: 5
		},
		CHECK_EXISTS_ROW: {
			SQL: "SELECT `?` FROM `?` WHERE `?`='?';",
			ARGS_COUNT: 2
		},
		CHECK_EXISTS_DATABASE: {
			SQL: "SELECT NAME FROM sqlite_master WHERE TYPE='table' AND NAME='?';",
			ARGS_COUNT: 0
		}
	}
}

export const ShemeBase: IShemeBase = {
	ADD_RECORD: {
		SQL: "UPDATE `?` SET `?` = `?` + ? WHERE `telegram` = '?';",
		ARGS_COUNT: 5
	},
	REMOVE_RECORD: {
		SQL: "UPDATE `?` SET `?` = `?` - ? WHERE `telegram`='?';",
		ARGS_COUNT: 5
	},
	CHECK_EXISTS_ROW: {
		SQL: "SELECT * FROM `?` WHERE telegram = '?' ISNULL",
		ARGS_COUNT: 2
	},
	CHECK_EXISTS_DATABASE: {
		SQL: "",
		ARGS_COUNT: 0
	}
}

type IShemeBase = {
	[key: string]: IShemeRow
}
type IShemeRow = {
	SQL: string,
	ARGS_COUNT: number,
}
