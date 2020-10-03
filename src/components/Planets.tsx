import Axios from "axios";
import React, { FC } from "react";
import { useQuery } from "react-query";

interface PlanetsProps {}

const Planets: FC<PlanetsProps> = () => {
	async function fetchPlanets(): Promise<any> {
		const res = await Axios.get("https://swapi.dev/api/planets/").then(
			(res) => res
			// console.log("response", res.data.results)
		);
		console.log("planets", res);
		return res;
	}

	const { data, status } = useQuery("ships", fetchPlanets);
	console.log("planets data,status", data, status);
	return (
		<div>
			{status === "loading" && <div>loading</div>}
			{status === "error" && <div>error</div>}
			{status === "success" && (
				<div>
					{data.data.results.map((planet: any) => (
						<div>{planet.name}</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Planets;
