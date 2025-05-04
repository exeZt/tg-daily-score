import Tab from "@mui/material/Tab";
import Tabs from '@mui/material/Tabs';
import * as React from "react";

export default function AppTabs(props: {
	data: Array<string>
}): React.JSX.Element {
	const [value, setValue] = React.useState(0);
	const DataTabs = () => props.data.map((item) => <Tab label={item} key={item} />)

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		// event.type can be equal to focus with selectionFollowsFocus.
		setValue(newValue);
	};

	return (
		<Tabs
			value={value}
			onChange={handleChange}
			role='navigation'
			aria-label='Tabs with datasheets'>
			<DataTabs />
		</Tabs>
	);
}