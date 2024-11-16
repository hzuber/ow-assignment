import lottie from "lottie-web";
import "./LottieCard.scss";
import { isMobile } from "../../utils/isMobile";
import { onResize } from "../../utils/onResize";

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

	const autoPlay = isMobile();

	const animation = lottie.loadAnimation({
		container: card.querySelector(`#${id}-lottie`),
		renderer: "svg",
		loop: true,
		autoplay: autoPlay,

		path: lottieSrc,
	});

	if (!autoPlay) {
		card.addEventListener("mouseenter", () => animation.play());
		card.addEventListener("mouseleave", () => animation.stop());
	}

	onResize((autoPlay) => {
		animation.autoplay = autoPlay;
		if (autoPlay) {
			animation.play();
		} else {
			animation.stop();
		}
	});

	return card;
}
