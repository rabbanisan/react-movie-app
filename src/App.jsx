import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/Main.layout";
import Home from "./components/pages/Home";
import BrowseMovie from "./components/pages/Browse.movie";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="browseMovie" element={<BrowseMovie />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
