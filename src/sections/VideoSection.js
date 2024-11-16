import { addLoadinAnimation } from "../utils/loadInAnimation";

export function Video() {
	const videoSection = document.createElement("section");
	videoSection.id = "sizzle-reel";
	videoSection.className = "items-center";

	const video = document.createElement("div");
	video.className = "px-5 flex w-full justify-center max-w-[1110px]";
	video.innerHTML = `
        <div class="video-container">
           <iframe src="https://www.youtube.com/embed/sMLiFP-BESE" title="Overwolf&#39;s Tools for Game Developers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    `;

	addLoadinAnimation([video], "zoomin", false, 1, 0);
	videoSection.appendChild(video);

	return videoSection;
}
