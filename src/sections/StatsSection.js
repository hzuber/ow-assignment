import { NumberCard } from "../components/NumberCard/NumberCard";
import { countUpAnimation } from "../utils/countUpAnimation";

export function Stats() {
	const statsSection = document.createElement("section");
	statsSection.id = "stats";
	statsSection.className = "items-center";

	const statsContainer = document.createElement("div");
	statsContainer.className =
		"lg:justify-between justify-center items-start container flex-wrap";
	statsSection.appendChild(statsContainer);

	const cardData = [
		{
			id: "downloads",
			number: 15,
			suffix: "B",
			text: "Yearly<br/>downloads",
		},
		{
			id: "gamers",
			number: 100,
			suffix: "M",
			text: "Monthly<br/>active gamers",
		},
		{
			id: "creators",
			number: 178,
			suffix: "K",
			text: "In-game<br/>creators",
		},
		{
			id: "games",
			number: 1500,
			suffix: "+",
			text: "Games<br/>supported",
		},
	];

	cardData.forEach((data) => {
		const card = NumberCard(data);
		statsContainer.appendChild(card);
		const stat = card.querySelector(".stat");
		countUpAnimation([stat]);
	});

	return statsSection;
}
