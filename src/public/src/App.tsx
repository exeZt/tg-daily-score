import * as React from "react";
import AppHeader from "./components/header.tsx";
import AppWorkspace from "./components/workspace.tsx";

function App(): React.JSX.Element {
  return (
    <div className='application'>
			<AppHeader />
			<AppWorkspace />
    </div>
  )
}

export default App
