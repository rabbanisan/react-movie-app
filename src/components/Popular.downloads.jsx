import Card from "./Card";
import Axios from "axios";
import { useState, useEffect } from "react";

export default function PopularDownloads() {
	const [popular, setPopular] = useState([]);

	const baseURL =
		"https://api.themoviedb.org/3/movie/top_rated?api_key=0737ff4618e7fa07d047074dba98ef7b&language=en-US&page=1";

	useEffect(() => {
		Axios({
			method: "GET",
			url: `${baseURL}`,
		}).then((res) => {
			setPopular(res.data.results.slice(0, 4));
		});
	}, []);

	return (
		<section className="popular-downloads flex flex-col justify-center px-20">
			<div className="flex justify-center items-center space-x-2">
				<i className="fas fa-star text-[#75C74E]"></i>
				<h5 className="text-white  text-lg font-bold">Popular Downloads</h5>
			</div>
			<div className="card-container flex flex-row flex-wrap justify-center border-t-[1px] border-[#434747] mt-5 pt-4 ">
				{popular.map((data) => {
					return (
						<Card
							key={data.id}
							poster={data.poster_path}
							title={data.original_title}
							year={data.release_date}
							className="card-popular w-[20%] bg-transparent rounded-lg shadow-md mx-5"
						/>
					);
				})}
			</div>
		</section>
	);
}
