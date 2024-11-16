export function onResize(callback) {
	const checkMobile = () => {
		const isMobile = window.matchMedia("(max-width: 768px)").matches;
		callback(isMobile);
	};

	checkMobile();

	window.addEventListener("resize", checkMobile);

	return () => window.removeEventListener("resize", checkMobile);
}
