import { NumberCard } from "../components/NumberCard/NumberCard";
import { countUpAnimation } from "../utils/countUpAnimation";

export function Stats() {
	const statsSection = document.createElement("section");
	statsSection.id = "stats";
	statsSection.className = "items-center";

	const statsContainer = document.createElement("div");
	statsContainer.className = "container";
	statsSection.appendChild(statsContainer);

	const statsGrid = document.createElement("div");
	statsGrid.className =
		"grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-4 justify-items-center lg:justify-items-start w-full";
	statsContainer.appendChild(statsGrid);

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
		statsGrid.appendChild(card);
		const stat = card.querySelector(".stat");
		countUpAnimation([stat]);
	});

	return statsSection;
}
