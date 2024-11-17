import "./IconCard.scss";

export function IconCard({ id, icon, iconAnimation, heading, subheading }) {
	const card = document.createElement("div");
	card.className = "icon-card animation-wrapper  bg-neutral-8 ";
	card.id = id;
	card.innerHTML = `
		<div class="inner-content">
            <div class="icon-wrapper ${iconAnimation}  w-10">
                <img src="${icon}" class=" w-10 h-10"/>
            </div>
			<h5 class="headline-m">${heading}</h5>
			<h6 class="body-l text-neutral-112">${subheading}</p>
		</div>
	`;

	return card;
}
