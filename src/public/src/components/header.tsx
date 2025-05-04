import * as React from "react";

const AppHeader = (): React.JSX.Element => (
	<header>
		<h1> CRM </h1>
		<select>
			<option> RU </option>
			<option> EN </option>
			<option> BY </option>
		</select>
	</header>
)

export default AppHeader;