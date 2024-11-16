import "./styles.scss";
import "./assets/styles/tailwind.css";
import "./scripts.js";
import { About } from "./sections/AboutSection.js";
import { Hero } from "./sections/HeroSection.js";
import { Header } from "./components/Header.js";
import { Stats } from "./sections/StatsSection.js";
import { Video } from "./sections/VideoSection.js";
import { Creation } from "./sections/CreationSection.js";
import { TestimonialsDesktop } from "./sections/TestimonialsSection.js";
import { Footer } from "./components/Footer.js";

document.addEventListener("DOMContentLoaded", () => {
	const app = document.getElementById("app");

	app.appendChild(Header());
	app.appendChild(Hero());
	app.appendChild(About());
	app.appendChild(Stats());
	app.appendChild(Video());
	app.appendChild(Creation());
	app.appendChild(TestimonialsDesktop());
	app.appendChild(Footer());
});
