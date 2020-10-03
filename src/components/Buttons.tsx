import React, { FC, useState } from "react";
import Planets from "./Planets";
import Ships from "./Ships";

interface ButtonsProps {}

const Buttons: FC<ButtonsProps> = () => {
	const [toggle, setToggle] = useState(true);
	return (
		<div>
			<button onClick={() => setToggle(!toggle)}>toggle</button>
			{toggle ? <Planets></Planets> : <Ships></Ships>}
			<br />
		</div>
	);
};

export default Buttons;
