namespace TKeyboards {
	export interface IKeyboardBuilderOptionsButtons {
		add_exit?: boolean;
		set_inactive?: Array<string>;
	}

	export interface IKeyboardBuilderOptions {
		buttons?: IKeyboardBuilderOptionsButtons
	}
}
export default TKeyboards;