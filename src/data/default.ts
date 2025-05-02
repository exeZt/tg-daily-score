import SqliteApplicationHandler from "./sqlite";
import {DEFAULT_ACTIONS} from "../assets/actions";

export default class DefaultDataHandler {
	protected handler: SqliteApplicationHandler = new SqliteApplicationHandler(true);

	constructor() {

	}

	createDataBase = () => {
		let currentDatabaseName = `daily-${this.getDate()}`;
		if (typeof this.handler.query(`SELECT * FROM \`${currentDatabaseName}\`;`, [], true) === "undefined" ){
			this.handler.query(`
			CREATE TABLE "${currentDatabaseName}" (
				"telegram" TEXT UNIQUE,
				${Object.keys(DEFAULT_ACTIONS).map((v) => `"${v}" TEXT`)}
			);
		`)
		}
	}

	// TODO: add movement for UTC time
	getDate = (): `${string}-${string}-${string}` =>
		`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
}
new DefaultDataHandler().createDataBase();