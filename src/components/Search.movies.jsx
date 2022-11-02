export default function SearchMovies() {
	return (
		<section className="search-movies flex justify-center bg-black py-8 border-y-[1px] border-[#343434]">
			<div className="w-7/12">
				<p className="text-[#5A5A5A] text-2xl font-bold">Search Term:</p>
				<div className="input my-2 flex justify-between ">
					<input
						className="bg-[#282828] w-10/12 py-1 px-2 text-[#DDDDDD] placeholder:text-[#616161] placeholder:font-semibold border-none outline-none caret-[#5CB85C]"
						type="text"
						placeholder="Search for a movie..."
					></input>
					<button className="bg-[#5CB85C] text-white font-bold px-6 py-1.5 rounded-sm">
						Search
					</button>
				</div>
			</div>
		</section>
	);
}
