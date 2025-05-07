export default class Api {
	public static getSummary = (table: string, callback: (data: any) => void) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", `http://localhost:5665/api/get-summary?tablename=${table}`, true);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();
		xhr.onload = () => {
			if (xhr.status === 200) {
				callback(JSON.parse(xhr.responseText));
			}
			else {
				callback(null);
			}
		}
	}

	public static getTableList = (callback: (data: any) => void) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:5665/api/get-all-tables", true);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();
		xhr.onload = () => {
			if (xhr.status === 200 || xhr.status === 304) {
				callback(JSON.parse(xhr.responseText));
			}
			else {
				callback([]);
			}
		}
	}
}