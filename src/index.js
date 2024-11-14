import "./styles.scss";
import "./assets/styles/tailwind.css";
import "./scripts.js";
import { About } from "./sections/AboutSection.js";
import { Hero } from "./sections/HeroSection.js";
import { Header } from "./components/Header.js";
import { Stats } from "./sections/StatsSection.js";
import { Video } from "./sections/VideoSection.js";
import { Creation } from "./sections/CreationSection.js";

document.addEventListener("DOMContentLoaded", () => {
	const app = document.getElementById("app");

	const header = Header();
	const heroSection = Hero();
	const aboutSection = About();
	const statsSection = Stats();
	const videoSection = Video();
	const creationSection = Creation();

	app.appendChild(header);
	app.appendChild(heroSection);
	app.appendChild(aboutSection);
	app.appendChild(statsSection);
	app.appendChild(videoSection);
	app.appendChild(creationSection);
});
