import React from "react";
import "./App.css";
import Ships from "./components/Ships";
import Planets from "./components/Planets";
import Buttons from "./components/Buttons";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
	const development =
		!process.env.NODE_ENV || process.env.NODE_ENV === "development";

	return (
		<div className="App">
			<Buttons></Buttons>
			Ships
			<Ships></Ships>
			<br />
			Planets
			<Planets></Planets>
			{development && <ReactQueryDevtools initialIsOpen={false} />}
		</div>
	);
}

export default App;
