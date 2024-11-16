export function Footer() {
	const footer = document.createElement("footer");
	footer.id = "footer";
	footer.className = " w-full bg-neutral-8";

	footer.innerHTML = `
    <div class="bg-neutral-0 w-full mx-auto flex flex-col items-center justify-between gap-12 px-5 pb-12 pt-8 mb-14 md:mb-12">
            <div class="flex gap-8 flex-col justify-center items-center">
                <a href="#hero" class=".same-page-nav-link arrow-up btn-arrow ">
                </a>
                <span class="hide-on-hover">back to top</span>
            </div>
        <div class="flex-shrink-0">
            <img src="/icons/ow-main-logo.svg" alt="Logo" class="h-full max-h-10">
        </div>
    </div>
    `;

	return footer;
}
