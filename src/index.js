import "./styles.scss";
import { About } from "./sections/AboutSection.js";

document.addEventListener("DOMContentLoaded", () => {
	const app = document.getElementById("app");
	const aboutSection = About();
	app.appendChild(aboutSection);
});
