import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default App;
