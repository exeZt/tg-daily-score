namespace TRedis {
	export interface IRedisApplicationHandler {
		useStorage: (key: string, val?: string, callback?: (value: string | null) => void) => Promise<void>;
		updateValue: (key: string, val: string) => Promise<void>;
	}
}
export default TRedis;