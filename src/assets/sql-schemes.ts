import type TSchemes from "../types/schemes.t";

const ShemeBase: TSchemes.IShemeBase = {
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
	},
	GET_CURRENT_DATE: {
		SQL: "SELECT * FROM `?`;",
		ARGS_COUNT: 1
	},
	GET_TABLE_NAMES: {
		SQL: 'SELECT NAME FROM sqlite_master WHERE type=\'table\';',
		ARGS_COUNT: 0
	}
}
export default ShemeBase;