import {DatabaseSync, StatementSync} from "node:sqlite";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

export default class SqliteApplicationHandler {
	protected database: DatabaseSync;

	constructor(useDefault: boolean) {
		if (useDefault){
			this.database = new DatabaseSync(path.resolve(process.cwd(), 'data/application'), {
				open: true,
			});
		} else {
			this.database = new DatabaseSync(path.resolve(process.cwd(), '/data/application'), {
				open: true,
			})
		}
	}

	query = (sqlQuery: string, args?: Array<string | number>, returnValue?: boolean): StatementSync | void | undefined => {
		try{
			if (returnValue) {
				return this.database.prepare(sqlQuery);
			} else {
				this.database.exec(sqlQuery);
			}
		} catch(err) {
			return undefined;
		}
	}
}