export default function PageNav(props) {
	const { crnPage, setCrnPage, currentPage } = props;
	return (
		<li>
			<button
				onClick={() => {
					setCrnPage(crnPage);
				}}
				className={
					crnPage === currentPage
						? "text-white bg-[#5CB85C] border-[#343434] hover:text-black z-10 py-2 px-3 leading-tight border font-semibold"
						: "text-gray-500 bg-black border-[#343434] hover:text-[#5CB85C] z-10 py-2 px-3 leading-tight border font-semibold"
				}
			>
				{crnPage}
			</button>
		</li>
	);
}
