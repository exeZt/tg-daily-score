import {DatabaseSync, SQLOutputValue } from "node:sqlite";
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

	query = (sqlQuery: string, args?: Array<string>): Record<string, SQLOutputValue>[] | undefined => {
		try {
			if ((args && args.length > 0)) {
				let parsed: string = this.prepareSqlRequest(sqlQuery, args!);
				return this.database.prepare(parsed).all();
			} else {
				console.log(this.database.prepare(sqlQuery).all().length)
				return this.database.prepare(sqlQuery).all();
			}
		} catch(err) {
			console.log(err);
			return undefined;
		}
	}

	prepareSqlRequest = (sqlString: string, params: Array<string>): string => {
		let q: string = '';
		let init: string[] = sqlString.split('?');
		for (let i: number = 0; i < init.length; i++) {
			q += init[i];
			q += params[i] ?? '';
		}
		return q;
	}
}