import * as React from "react";
import {useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import TopPanel from "./top-panel.tsx";
import Api from "../api/api.ts";
import {TDEFAULT_ACTIONS} from "../types/ui.ts";
import {useSearchParams} from "react-router-dom";

export default function AppWorkspace(): React.JSX.Element {
	// const [data, setData] = React.useState<any[]>([]);
	const [searchParams, _setSearchParams] = useSearchParams();
	const [_rows, setRows] = React.useState<TDEFAULT_ACTIONS[] | []>([]);
	const [_cols, setCols] = React.useState<TDEFAULT_ACTIONS[] | []>([]);

	useEffect(() => {
		let cols: { field: string; headerName: string; width?: number; editable: boolean }[];
		let table: string | null = searchParams.get('table');
		if (table !== null) {
			Api.getSummary(table, (v: TDEFAULT_ACTIONS[]) => {
				if (v !== null){
					let rows: TDEFAULT_ACTIONS[] = v.map((val, index) => {
						return val = Object.defineProperty(val, 'id', { value: index });
					});
					let template = rows[0];
					cols = Object.keys(template).map((v) => {
						return {
							field: v,
							headerName: v,
							// width: 50,
							editable: true
						}
					})
					setRows(rows);//@ts-ignore
					setCols(cols);
					console.log(rows);
				} else {
					setRows([])
					setCols([])
				}
			})
		}
	}, [searchParams]);

	return (
		<main>
			<TopPanel />
			{/*<AppTabs data={['1','2','3']} />*/}
			<section className='workspace-section'>
				<DataGrid
					style={{ height: '100%' }} //@ts-ignore
					columns={_cols}
					rows={_rows}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 20,
							}
						}
					}}
					pageSizeOptions={[20]}
					checkboxSelection={true}
					disableRowSelectionOnClick/>
			</section>
		</main>
	);
}