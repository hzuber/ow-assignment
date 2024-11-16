document.addEventListener("DOMContentLoaded", () => {
	const observer = new MutationObserver(() => {
		const sections = document.querySelectorAll("section");
		if (sections.length > 0) {
			observer.disconnect();
			initializeScrollBehavior(sections);
		}
	});
	observer.observe(document.body, { childList: true, subtree: true });
});

function initializeScrollBehavior(sections) {
	const observerOptions = {
		root: null,
		rootMargin: "0px 0px -75% 0px",
		threshold: 0,
	};

	const scrollObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				history.replaceState(null, "", `#${entry.target.id}`);
			}
		});
	}, observerOptions);

	sections.forEach((section) => scrollObserver.observe(section));
}
