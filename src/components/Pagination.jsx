import PageNav from "./Page.nav";

export default function Pagination(props) {
	const { setCurrentPageState, setNumber, number } = props;
	const page = [1, 2, 3, 4, 5];

	return (
		<nav aria-label="Page navigation example" className="flex justify-center">
			<ul className="inline-flex items-center -space-x-px">
				<li>
					<a
						href="#"
						className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-black rounded-l-lg border border-[#343434] hover:text-[#5CB85C]"
					>
						<span className="sr-only">Previous</span>
						<svg
							aria-hidden="true"
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
				</li>
				{page.map((data, i) => {
					return (
						<PageNav
							key={i}
							crnPage={data}
							setCrnPage={setCurrentPageState}
							num={i}
							number={number}
							setNum={setNumber}
						/>
					);
				})}
				<li>
					<a
						href="#"
						className="block py-2 px-3 leading-tight rounded-r-lg border text-gray-500 bg-black border-[#343434] hover:text-[#5CB85C]"
					>
						<span className="sr-only">Next</span>
						<svg
							aria-hidden="true"
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
				</li>
			</ul>
		</nav>
	);
}
