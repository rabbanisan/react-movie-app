//Page.Nav Comonent
// export default function PageNav(props) {
// 	const { crnPage, setCrnPage, num, setNum, number } = props;
// 	return (
// 		<li>
// 			<button
// 				onClick={() => {
// 					setCrnPage(crnPage);
// 					setNum(num);
// 				}}
// 				className={
// 					crnPage === number
// 						? "text-white bg-[#5CB85C] border-[#343434] hover:text-black z-10 py-2 px-3 leading-tight border font-semibold"
// 						: "text-gray-500 bg-black border-[#343434] hover:text-[#5CB85C] z-10 py-2 px-3 leading-tight border font-semibold"
// 				}
// 			>
// 				{crnPage}
// 			</button>
// 		</li>
// 	);
// }

//Upcoming.movies Component
// import { useState, useEffect } from "react";
// import Axios from "axios";
// import Card from "./Card";
// import Pagination from "./Pagination";

// export default function UpcomingMovies() {
// 	const [currentPage, setCurrentPage] = useState(1);
// 	const [upcoming, setUpcoming] = useState([]);
// 	const [number, setNumber] = useState();
// 	const baseURL =
// 		"https://api.themoviedb.org/3/movie/upcoming?api_key=0737ff4618e7fa07d047074dba98ef7b&language=en-US&";

// 	useEffect(() => {
// 		Axios({
// 			method: "GET",
// 			url: `${baseURL}page=${currentPage}`,
// 		}).then((res) => {
// 			setUpcoming(res.data.results);
// 			console.log(res.data.results);
// 		});
// 	}, [currentPage]);

// 	const setCurrentPageState = (crnPage) => {
// 		setCurrentPage(crnPage);
// 	};

// 	const setNumberState = (num) => {
// 		num += 1;
// 		setNumber(num);
// 	};

// 	return (
// 		<section className="upcoming py-10 bg-[#171717]">
// 			<Pagination
// 				setCurrentPageState={setCurrentPageState}
// 				setNumber={setNumberState}
// 			/>
// 			<div className="card-container flex flex-row flex-wrap justify-center mt-5 pt-4">
// 				{upcoming.map((data) => {
// 					return (
// 						<Card
// 							key={data.id}
// 							poster={data.poster_path}
// 							S
// 							title={data.original_title}
// 							year={data.release_date}
// 							className={`card-upcoming w-[15%] bg-transparent rounded-lg shadow-md mx-5`}
// 						/>
// 					);
// 				})}
// 			</div>
// 			<Pagination setCurrentPageState={setCurrentPageState} />
// 		</section>
// 	);
// }
