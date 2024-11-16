export function NumberCard({ id, number, suffix, text }) {
	const card = document.createElement("div");
	card.className = "number-card mx-auto";
	card.innerHTML = `
		<div class="stat flex flex-col justify-center items-center" data-target="${number}" data-suffix="${suffix}">
			<span class="stat-number headline-xxl text-ow-red " id="${id}-number-card">0</span>
			<h6 class="stat-text uppercase body-m text-center">${text}</p>
		</div>
	`;

	return card;
}
