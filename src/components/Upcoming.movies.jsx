import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";

export default function UpcomingMovies() {
	const [currentPage, setCurrentPage] = useState(1);
	const [upcoming, setUpcoming] = useState([]);
	const baseURL =
		"https://api.themoviedb.org/3/movie/upcoming?api_key=0737ff4618e7fa07d047074dba98ef7b&language=en-US&";

	useEffect(() => {
		Axios({
			method: "GET",
			url: `${baseURL}page=${currentPage}`,
		}).then((res) => {
			setUpcoming(res.data.results);
			console.log(res.data.results);
		});
	}, [currentPage]);

	const setCurrentPageState = (crnPage) => {
		setCurrentPage(crnPage);
	};

	return (
		<section className="upcoming py-10 bg-[#171717]">
			<Pagination
				setCurrentPageState={setCurrentPageState}
				currentPage={currentPage}
			/>
			<div className="card-container flex flex-row flex-wrap justify-center mt-5 pt-4">
				{upcoming.map((data) => {
					return (
						<Card
							key={data.id}
							poster={data.poster_path}
							title={data.original_title}
							year={data.release_date}
							className={`card-upcoming w-[15%] bg-transparent rounded-lg shadow-md mx-5`}
						/>
					);
				})}
			</div>
			<Pagination
				setCurrentPageState={setCurrentPageState}
				currentPage={currentPage}
			/>
		</section>
	);
}
