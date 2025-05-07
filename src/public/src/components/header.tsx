import * as React from "react";
import LanguageSelect from "./header/language-select.tsx";

const AppHeader = (): React.JSX.Element => (
	<header>
		<h1> CRM </h1>
		<LanguageSelect />
	</header>
)

export default AppHeader;