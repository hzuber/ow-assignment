// src/components/Card.js
import lottie from "lottie-web";
import LottieInteractivity from "@lottiefiles/lottie-interactivity";
import "./LottieCard.scss";

export function LottieCard({ id, imageSrc, lottieSrc, heading, subheading }) {
	const card = document.createElement("div");
	card.className = "lottie-card";

	// Set up the HTML structure
	card.innerHTML = `
    <div class="lottie-card__image-container">
	<img class="lottie-card__image" src="${imageSrc}"/>
		<lottie-player
		class="lottie-card__lottie"
					id='${id}-lottie'
					src="${lottieSrc}"
					
  		>
  		</lottie-player> 
    </div>
    <div class="lottie-card__content">
      <h3 class="lottie-card__heading">${heading}</h3>
      <p class="lottie-card__subheading">${subheading}</p>
    </div>
  `;

	const animation = lottie.loadAnimation({
		container: card.querySelector(`#${id}-lottie`),
		loop: true,
		autoplay: true,
		path: lottieSrc,
	});

	// Initialize Lottie animation
	const player = card.querySelector(`#${id}-lottie`);
	player.addEventListener("ready", () => {
		LottieInteractivity.create({
			player: animation,
			mode: "cursor",
			actions: [
				{
					type: "hover", // Plays animation on hover
					forceFlag: false,
				},
			],
		});
	});

	return card;
}
