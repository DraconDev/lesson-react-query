import Axios from "axios";
import React, { FC, useState } from "react";
import { usePaginatedQuery, useQuery } from "react-query";

interface PlanetsProps {}

interface FetchPlanetsProps {
	planets: string;
	page?: number;
}

const Planets: FC<PlanetsProps> = () => {
	const [page, setPage] = useState(1);
	async function fetchPlanets(query?: string, page?: number): Promise<any> {
		// console.log("props");
		const res = await Axios.get(
			`https://swapi.dev/api/${query}/${page ? "?page=" + page : ""}`
			// `https://swapi.dev/api/planets/?page=${3}`
		).then(
			(res) => res
			// console.log("response", res.data.results)
		);
		// console.log("planets", res);
		return res;
	}

	// const { data, status } = useQuery("ships", fetchPlanets);
	////* Optional parameters
	// const { data, status } = useQuery(["planets", 4], fetchPlanets);
	const { resolvedData, latestData, status } = usePaginatedQuery(
		["planets", page],
		fetchPlanets
	);

	console.log("planets data,status", resolvedData, latestData, status);
	console.log("page", page);
	return (
		<div>
			{status === "loading" && <div>loading</div>}
			{status === "error" && <div>error</div>}
			{status === "success" && (
				<>
					<button onClick={() => setPage((old) => Math.max(old - 1, 1))}>
						Previous Page
					</button>
					<button
						onClick={() =>
							setPage((old) => {
								console.log("old", old);
								return !latestData || !latestData.data.next ? old : old + 1;
							})
						}
					>
						Next Page
					</button>
					<div>Page {page}</div>
					<div>
						{resolvedData.data.results.map((planet: any) => (
							<div>{planet.name}</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Planets;
