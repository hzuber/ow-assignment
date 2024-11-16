import { SwiperCard } from "./SwiperCard";
import "./Swiper.scss";

export function SwiperLayout(id, data, classes = "") {
	const swiper = document.createElement("div");
	swiper.id = id;
	swiper.className = `${classes} swiper`;

	const wrapper = document.createElement("div");
	wrapper.className = "swiper-wrapper";
	swiper.appendChild(wrapper);

	data.forEach((data) => {
		const card = SwiperCard(data);
		wrapper.appendChild(card);
	});

	const buttonWrapper = document.createElement("div");
	buttonWrapper.className = "swiper-button-wrapper";
	const buttonPrev = document.createElement("div");
	buttonPrev.className = "swiper-button-prev swiper-button btn-arrow";
	buttonWrapper.appendChild(buttonPrev);
	const buttonNext = document.createElement("div");
	buttonNext.className = "swiper-button-next swiper-button btn-arrow";
	buttonWrapper.appendChild(buttonNext);
	swiper.appendChild(buttonWrapper);

	return swiper;
}
