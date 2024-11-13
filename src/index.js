import "./styles.scss";
import "./components/MyButton.js";

document.addEventListener("DOMContentLoaded", () => {
	const app = document.getElementById("app");
	app.innerHTML = '<my-button text="Hello" class="btn"></my-button>';
});
