import { LottieCard } from "../components/LottieCard/LottieCard";
import { SectionHeader } from "./components/sectionHeader";

export function About() {
	const aboutSection = document.createElement("section");
	aboutSection.id = "about";
	aboutSection.className = "container";

	aboutSection.appendChild(SectionHeader("About Overwolf"));

	// Data for each card in the About section
	const cardData = [
		{
			id: "legendary-apps",
			imageSrc: "/images/swords.png",
			lottieSrc: "/animations/swords.json",
			heading: "Legendary Apps",
			subheading:
				"Create powerful desktop apps and overlays for AAA games, using basic HTML and Javascript",
		},
		{
			id: "legendary-mods",
			imageSrc: "/images/anvil.png",
			lottieSrc: "/animations/anvil.json",
			heading: "Legendary Mods",
			subheading:
				"Create, manage and monetize mods for AAA games, exposing them to millions of gamers",
		},
		{
			id: "legendary-servers",
			imageSrc: "/images/server.png",
			lottieSrc: "/animations/server.json",
			heading: "Legendary Servers",
			subheading:
				"Create in-game stores, sell goods to your gamers and grow your player base through our tools & server list",
		},
		{
			id: "legendary-ads",
			imageSrc: "/images/megaphone.png",
			lottieSrc: "/animations/megaphone.json",
			heading: "Legendary Ads",
			subheading:
				"Supercharge your website with ads, and get faster payments, customer service, and ad load time",
		},
		{
			id: "legendary-funds",
			imageSrc: "/images/crystals.png",
			lottieSrc: "/animations/crystals.json",
			heading: "Legendary Funds",
			subheading:
				"Overwolf’s creator fund is a $50M fund dedicated to supporting game studios, developers and creators",
		},
	];

	// Create and append each card
	cardData.forEach((data) => {
		const card = LottieCard(data); // Create a new Card component
		aboutSection.appendChild(card);
	});

	return aboutSection;
}
