import { Link } from "react-router-dom";

export default function LoginPage() {
	return (
		<div className="mt-4 grow flex items-center justify-around">
			<div className="mb-64">
				<h1 className="text-4xl text-center mb-4">Login</h1>
				<form action="" className="max-w-md mx-auto">
					<input
						type="email"
						name="email"
						placeholder="your@email.com"
					/>
					<input
						type="password"
						name="password"
						id=""
						placeholder="password"
					/>
					<button className="primary">Login</button>
					<div className="text-center my-2 space-x-0.5 text-gray-500">
						<span>Don't have account yet?</span>
						<Link to={"/register"} className="underline text-black">
							Register now
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
