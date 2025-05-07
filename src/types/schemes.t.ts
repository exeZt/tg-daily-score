namespace TSchemes {
	export type IShemeBase = {
		[key: string]: IShemeRow
	}
	export type IShemeRow = {
		SQL: string,
		ARGS_COUNT: number,
	}
}
export default TSchemes;