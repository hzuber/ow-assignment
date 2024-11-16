export function IconCard({ id, icon, iconAnimation, heading, subheading }) {
	const card = document.createElement("div");
	card.className =
		"icon-card animation-wrapper lg:w-[32%] lg:max-w-[32%] lg:min-w-32 bg-neutral-8 lg:p-[3.5%] max-w-40 w-full min-w-[100%] px-6 py-12";
	card.id = id;
	card.innerHTML = `
		<div class="stat flex flex-col justify-center gap-6">
            <div class="icon-wrapper ${iconAnimation}  w-10">
                <img src="${icon}" class=" w-10 h-10"/>
            </div>
			<h5 class="headline-m">${heading}</h5>
			<h6 class="body-l text-neutral-112">${subheading}</p>
		</div>
	`;

	return card;
}
