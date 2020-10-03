import Axios from "axios";
import React, { FC } from "react";
import { useQuery } from "react-query";

interface PlanetsProps {}

const Ships: FC<PlanetsProps> = () => {
	async function fetchShips(): Promise<any> {
		const res = await Axios.get("https://swapi.dev/api/starships/").then(
			(res) => res
		);
		console.log("ships", res);
		return res;
	}

	const { data, status } = useQuery("planets", fetchShips);
	console.log("ships, data,status", data, status);
	return (
		<div>
			{status === "loading" && <div>loading</div>}
			{status === "error" && <div>error</div>}
			{status === "success" && (
				<div>
					{data.data.results.map((ship: any) => (
						<div>{ship.name}</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Ships;
