import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

export default function Layout() {
	return (
		<div className="px-10 py-4 flex flex-col min-h-screen">
			<Header />
			<Outlet />
		</div>
	);
}
