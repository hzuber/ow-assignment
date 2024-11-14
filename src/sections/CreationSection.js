import { LottieCard } from "../components/LottieCard/LottieCard";
import { addLoadinAnimation } from "../utils/loadInAnimation";
import { SectionHeader } from "../components/SectionHeader";
import { IconCard } from "../components/IconCard/IconCard";

export function Creation() {
	const creationSection = document.createElement("section");
	creationSection.id = "about";
	creationSection.className = "items-center container";
	creationSection.appendChild(
		SectionHeader("Full Suite for App Creation Success")
	);

	const creationContainer = document.createElement("div");
	creationContainer.className = "gap-6 flex flex-wrap justify-center";
	creationSection.appendChild(creationContainer);

	// Data for each card in the About section
	const cardData = [
		{
			id: "dev-sdk",
			icon: "/icons/tools.svg",
			heading: "Developer SDK",
			subheading:
				"Integrate various features such as overlays and real-time alerts",
		},
		{
			id: "event-api",
			icon: "/icons/games.svg",
			heading: "Game Event API",
			subheading: "Create apps that respond to in-game actions & events",
		},
		{
			id: "monetization",
			icon: "/icons/profit.svg",
			heading: "Monetization Tools",
			subheading: "Turn your app into revenue through ads & subscriptions",
		},
	];

	cardData.forEach((data) => {
		const card = IconCard(data);
		creationContainer.appendChild(card);
	});

	return creationSection;
}
