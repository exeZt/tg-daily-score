import { createClient, RedisClientType } from "redis";
import TRedis from "../types/redis.t";

export default class RedisApplicationHandler implements TRedis.IRedisApplicationHandler {
	protected client: RedisClientType;

	constructor() {
		this.client = createClient();
		this.client.on('error', (err) => {
			console.error(err);
		});
	}

	useStorage = async (key: string, val?: string, callback?: (value: string | null) => void): Promise<void> => {
		await this.client.connect();
		if (!val || val === '')
			callback?.(await this.client.get(key)!)
		else
			await this.client.set(key, val);

		await this.client.close();
	}

	updateValue = async (key: string, val: string, remove?: boolean): Promise<void> => {
		await this.client.connect();
		if (!remove){
			let prev: string | null = await this.client.get(key);
			if (prev === null) {
				await this.client.set(key, val);
			} else {
				await this.client.set(key, `${prev}|${val}`);
			}
		} else {
			let prev: string | null = await this.client.get(key);
			if (prev === null) {

			} else {
				await this.client.set(key, prev.replace(val, ''));
			}
		}
		await this.client.close();
	}
}