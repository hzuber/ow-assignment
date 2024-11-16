export function countUpAnimation(cards) {
	const options = {
		root: null,
		rootMargin: "0px 0px -25% 0px",
		threshold: 0,
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const targetNumber = entry.target.dataset["target"];
				const suffix = entry.target.dataset.suffix;
				const element = entry.target.querySelector(".stat-number");
				countUp(element, parseInt(targetNumber), suffix);
			}
		});
	}, options);

	cards.forEach((card) => observer.observe(card));

	function countUp(element, target, suffix) {
		let current = 0;
		const increment = target / 100;
		const duration = 1500;
		const stepTime = duration / (target / increment);

		const timer = setInterval(() => {
			current += increment;
			if (current >= target) {
				current = target;
				clearInterval(timer);
			}
			element.textContent = Math.ceil(current).toLocaleString() + suffix;
		}, stepTime);
	}
}
