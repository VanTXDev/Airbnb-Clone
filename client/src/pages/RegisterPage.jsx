import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
	const [email, setEmail] = useState("");
	const [phoneNumber, setphoneNumber] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [repassword, setRepassword] = useState("");

	const registerUser = (e) => {
		e.preventDefault();
		axios
			.post("/register", {
				email: email,
				phoneNumber: phoneNumber,
				name: name,
				password: password,
				repassword: repassword
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="mt-4 grow flex items-center justify-around">
			<div className="mb-64">
				<h1 className="text-4xl text-center mb-4">Register</h1>
				<form
					action=""
					className="max-w-md mx-auto"
					onSubmit={registerUser}
				>
					<input
						type="text"
						name="name"
						placeholder="John Doe"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
					<input
						type="text"
						name="phoneNumber"
						placeholder="your phone number"
						value={phoneNumber}
						onChange={(event) => setphoneNumber(event.target.value)}
					/>
					<input
						type="email"
						name="email"
						placeholder="your@email.com"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<input
						type="password"
						name="repassword"
						placeholder="repassword"
						value={repassword}
						onChange={(event) => setRepassword(event.target.value)}
					/>
					<button className="primary">Register</button>
					<div className="text-center my-2 space-x-0.5 text-gray-500">
						<span>All ready a member?</span>
						<Link to={"/login"} className="underline text-black">
							Login
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
