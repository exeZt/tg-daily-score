export default class QuerySchemes {

}

export const ShemeBase: IShemeBase = {
	ADD_RECORD: {
		SQL: "UPDATE `?` SET `?` = CONCAT(`?`, `?`) WHERE `telegram` = '?';",
		ARGS_COUNT: 5
	},
	CHECK_EXISTS_ROW: {
		SQL: "SELECT * FROM `?` WHERE telegram = '?' ISNULL",
		ARGS_COUNT: 2
	}
}

type IShemeBase = {
	[key: string]: {
		SQL: string,
		ARGS_COUNT: number,
	}
}

interface IShemeShemeType {
	readonly table: string;
	readonly query: string;
	params?: string[]; // for ? in query
}