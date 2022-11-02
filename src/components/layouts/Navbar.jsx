import { Outlet, Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	console.log(splitLocation[1]);

	return (
		<>
			<nav className="navbar sticky top-0 flex justify-between items-center text-white px-20 py-2 bg-[#1D1D1D] h-[10vh]">
				<div className="nav-brand">
					<a
						className="nav-logo uppercase tracking-[3px] font-semibold flex"
						href=""
					>
						<p>movie</p>
						<p className="text-[#5CB85C] font-bold">app</p>
					</a>
				</div>
				<div className="space-x-5 nav w-6/12 flex justify-end">
					<ul className="flex space-x-4">
						<li
							className={`${
								splitLocation[1] === "" ? "text-[#5CB85C]" : ""
							} font-semibold hover:text-[#5CB85C]`}
						>
							<Link to="/">Home</Link>
						</li>
						<li
							className={`${
								splitLocation[1] === "browseMovie" ? "text-[#5CB85C]" : ""
							} font-semibold hover:text-[#5CB85C]`}
						>
							<Link to="browseMovie">Browse Movie</Link>
						</li>
					</ul>
				</div>
				{/* <div className="search-container flex justify-end items-center space-x-5">
					<form className="search-bar px-2 border-gray-600 border-2 rounded-full">
						<input
							className="input-search bg-transparent border-none"
							type="text"
							placeholder="Search.."
							name="search"
						/>
						<button className="" type="submit">
							<i className="fas fa-search"></i>
						</button>
					</form>
				</div> */}
			</nav>
			<Outlet />
		</>
	);
}
