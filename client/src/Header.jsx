import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="flex justify-between">
			<a href="/" className="flex items-center gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-8 h-8 -rotate-90 text-primary"
				>
					<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
				</svg>

				<span className="font-bold text-xl text-primary">Airbnb</span>
			</a>
			<div className="flex gap-2 border border-gray-400 py-2 px-4 rounded-full shadow-md shadow-gray-200 cursor-pointer hover:shadow-gray-300">
				<div>Anywhere</div>
				<span className="border-l border-gray-400"></span>
				<div>Any Weeks</div>
				<span className="border-l border-gray-400"></span>
				<div>Add guests</div>
				<button className="w-6 h-6 bg-primary text-white p-1 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</button>
			</div>
			<Link
				to={"/login"}
				className="flex gap-2 border border-gray-400 py-2 px-4 rounded-full items-center hover:shadow-md cursor-pointer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
				<div className="bg-secondary text-white rounded-full p-0.5 overflow-hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6 relative top-1"
					>
						<path
							fillRule="evenodd"
							d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</Link>
		</header>
	);
}
