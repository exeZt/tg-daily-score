import * as React from "react";
import AppHeader from "./components/header.tsx";
import AppWorkspace from "./components/workspace.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App(): React.JSX.Element {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <div className='application'>
				<AppHeader />
				<AppWorkspace />
			</div>
		}
	]);

	return (
		<RouterProvider router={router} />
	)
}

export default App
