export function SwiperCard({
	id,
	imgfolder,
	img = id,
	logo = id,
	mobileimg = id,
	title,
	description,
}) {
	const card = document.createElement("div");
	card.id = id;
	card.className = "swiper-slide";
	card.innerHTML = `
		<div class="inner-slide">
            <img class="desktop" src="/images/${imgfolder}/desktop/${img}.png"/>
            <img class="mobile" src="/images/${imgfolder}/mobile/${mobileimg}.png"/>
            <div class="slide-content">
                <div class="title-row">
                    <img src="/images/${imgfolder}/thumbnails-icon/${logo}.png"/>
                    <h6 class="headline-m">${title}</h6>
                </div>
                <p>${description}</p>
            </div>
		</div>
	`;

	return card;
}
