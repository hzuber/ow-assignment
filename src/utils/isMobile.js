export function isMobile() {
	const checkMobile = () => window.matchMedia("(max-width: 768px)").matches;

	return checkMobile();
}
