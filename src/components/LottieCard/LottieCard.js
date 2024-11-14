// src/components/Card.js
import lottie from "lottie-web";
import "./LottieCard.scss";

export function LottieCard({ id, lottieSrc, heading, subheading }) {
	const card = document.createElement("div");
	card.className = "lottie-card";

	card.innerHTML = `
	<div class="lottie-card__inner-container">
		<div id="${id}-lottie" class="lottie-card__lottie"></div>
			<h3 class="lottie-card__heading headline-m">${heading}</h3>
			<p class="lottie-card__subheading subhead-s">${subheading}</p>
	</div>
  `;

	const isMobile = window.matchMedia("(max-width: 768px)").matches;

	const animation = lottie.loadAnimation({
		container: card.querySelector(`#${id}-lottie`),
		renderer: "svg",
		loop: true,
		autoplay: isMobile,

		path: lottieSrc,
	});

	if (!isMobile) {
		card.addEventListener("mouseenter", () => animation.play());
		card.addEventListener("mouseleave", () => animation.stop());
	}

	window.addEventListener("resize", () => {
		const isMobile = window.matchMedia("(max-width: 768px)").matches;
		animation.autoplay = isMobile;
		if (isMobile) {
			animation.play();
		} else {
			animation.stop();
		}
	});

	return card;
}
