export function Video() {
	const videoSection = document.createElement("section");
	videoSection.id = "video-section";
	videoSection.className = "items-center";

	videoSection.innerHTML = `
    <div class="px-5 flex w-full justify-center max-w-[1110px]">
        <div class="video-container">
           <iframe src="https://www.youtube.com/embed/sMLiFP-BESE" title="Overwolf&#39;s Tools for Game Developers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    `;

	return videoSection;
}
