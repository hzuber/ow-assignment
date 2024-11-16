import { isMobile } from "./isMobile";

function observerCallback(entries, observer, runOnce, i, delay) {
	entries.forEach((entry) => {
		const isScrollingUp = entry.boundingClientRect.top > 0;

		if (entry.isIntersecting) {
			if (!isMobile()) {
				setTimeout(() => {
					entry.target.classList.add("loaded");
				}, i * delay);
			} else {
				entry.target.classList.add("loaded");
			}

			if (runOnce) {
				observer.unobserve(entry.target);
			}
		} else if (!entry.isIntersecting && isScrollingUp) {
			entry.target.classList.remove("loaded");
		}
	});
}

export function addLoadinAnimation(
	elementsToLoadIn,
	animationName,
	runOnce = true,
	i = 0,
	delay = 0
) {
	const observerOptions = {
		root: null,
		threshold: 0,
	};

	const observer = new IntersectionObserver(
		(entries) => observerCallback(entries, observer, runOnce, i, delay),
		observerOptions
	);
	elementsToLoadIn.forEach((el) => {
		el.classList.add(animationName);
		observer.observe(el);
	});
}
