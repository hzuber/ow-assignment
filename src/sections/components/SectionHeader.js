export function SectionHeader(text) {
	const sectionHeader = document.createElement("h2");
	sectionHeader.className = "header-xl container--heading";
	sectionHeader.innerHTML = text;
	return sectionHeader;
}
