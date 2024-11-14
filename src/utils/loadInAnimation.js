function observerCallback(entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("loaded");
		}
	});
}

const observerOptions = {
	root: null,
	rootMargin: "50px",
	threshold: 0.3,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

//accepts an array of html elements
export function addLoadinAnimation(elementsToLoadIn) {
	elementsToLoadIn.forEach((el) => {
		el.classList.add("loadin");
		observer.observe(el);
	});
}
