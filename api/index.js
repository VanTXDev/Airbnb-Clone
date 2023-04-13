const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:5173"
	})
);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/register", (req, res) => {
	const { email, phoneNumber, name, password, repassword } = req.body;
	console.log(name + email + password + phoneNumber + repassword);
	res.send("Register success");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
