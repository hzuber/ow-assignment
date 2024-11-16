import { SwiperLayout } from "../components/Swiper/SwiperLayout";
import { SectionHeader } from "../components/SectionHeader";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function TestimonialsDesktop() {
	const testimonialsSection = document.createElement("section");
	testimonialsSection.id = "testimonials";
	testimonialsSection.className = "items-center bg-neutral-8";
	testimonialsSection.appendChild(SectionHeader("Success Stories"));

	const cardData = [
		{
			id: "runemaster",
			imgfolder: "success-stories-slider",
			title: "RuneMaster",
			description:
				"RuneMaster predicts your opponent's rune choices based on historical patterns and recommends the best counter-runes and champion strategies to outplay them right from the start.",
		},
		{
			id: "championsync",
			imgfolder: "success-stories-slider",
			title: "ChampionSync",
			description:
				"ChampionSync analyzes your past matches and suggests champions that perfectly sync with your playstyle. It also suggests teammates that complement your team composition, boosting your synergy in ranked games.",
		},
		{
			id: "pathfinder",
			imgfolder: "success-stories-slider",
			title: "PathFinder",
			description:
				"Pathfinder tracks enemy junglers in real-time by analyzing map patterns, predicting ganks before they happen, and offering optimal warding positions to keep your team safe.",
		},
		{
			id: "skillcurve",
			imgfolder: "success-stories-slider",
			title: "SkillCurve",
			description:
				"SkillCurve helps you master difficult champions by adapting in-game tutorials to your performance. It tracks your progress and adjusts its tips in real-time, making sure you're always improving your mechanics on the fly.",
		},
		{
			id: "ult-timer",
			imgfolder: "success-stories-slider",
			title: "Ult-Timer",
			description:
				"Ult-Timer tracks ultimate abilities for all champions on both teams, giving you an edge by alerting you when an enemy’s ultimate is ready or on cooldown, helping you plan fights more effectively.",
		},
		{
			id: "gankvision",
			imgfolder: "success-stories-slider",
			title: "GankVision",
			description:
				"GankVision uses AI to predict potential gank scenarios based on lane pressure and jungle activity. It warns you with pop-up alerts whenever a gank might be heading your way, so you can always stay one step ahead.",
		},
		{
			id: "clutchcoach",
			imgfolder: "success-stories-slider",
			title: "ClutchCoach",
			description:
				"ClutchCoach is a performance-enhancing app that analyzes high-pressure moments like team fights or baron steals. It gives you real-time advice on how to handle critical situations and boost your chances of pulling off game-changing plays.",
		},
	];

	const swiper = SwiperLayout("testimonials-swiper", cardData);
	testimonialsSection.appendChild(swiper);

	requestAnimationFrame(() => {
		const swiperInstance = new Swiper(`#testimonials-swiper`, {
			modules: [Navigation],
			slidesPerView: 1,
			spaceBetween: 24,
			speed: 800,

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				768: {
					slidesPerView: 2.6,
					spaceBetween: 20,
					centeredSlides: true,
					speed: 800,
				},
				1024: {
					slidesPerView: 3.2,
					spaceBetween: 20,
					centeredSlides: true,
				},
			},
			loop: true,
		});
	});

	return testimonialsSection;
}
