import * as React from "react";
import { useSearchParams } from "react-router-dom";
import Api from "../api/api.ts";
import {useEffect} from "react";

export default function TopPanel(): React.ReactElement {
	const [searchParams, setSearchParams] = useSearchParams();
	const [tables, setTables] = React.useState<{ name: string }[]>([]);

	useEffect(() => {
		Api.getTableList((v) => setTables(v))
	}, [])

	const Tables = () => tables.map((table, i) => (
		<option value={table.name} key={table.name + i}
						onClick={() => setSearchParams({table: table.name})}
						selected={searchParams.get('table') === table.name}>
			{ table.name }
		</option>
	))

	return (
		<section className="top-panel">
			<select className="top-panel__select__date">
				<Tables />
			</select>
			{/*<select className="top-panel__select__user">*/}
			{/*	<option> piurg </option>*/}
			{/*	<option> violex </option>*/}
			{/*</select>*/}
		</section>
	)
}