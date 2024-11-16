export function Hero() {
	const heroSection = document.createElement("section");
	heroSection.id = "hero";
	heroSection.className = "min-h-mvh justify-center items-center ";

	heroSection.innerHTML = `
    <div class="container w-full justify-center relative flex-nowrap flex-col items-center lg:flex-row mx-auto">
        <div class="lg:w-3/6 lg:text-left flex flex-col justify-center gap-6 w-full text-center">
            <h1 class="headline-xxl">Enter the Guild of In-Game Creators</h1>
            <h5 class="subhead-l">We empower players, developers and creators to make the best games even better through UGC</h5>
            <a href="https://discord.com/invite/overwolf-developers" class="uppercase lg:w-auto lg:ml-0 lg:mr-auto btn md:w-min text-nowrap md:w-5/6 w-full mx-auto">Join Now</a>
        </div>
        <div  class="lg:w-3/6 lg:justify-end overflow-visible flex w-full justify-center">
            <img src="/images/wolf-1.png" alt="Overwolf wolf" class="lg:w-full lg:min-w-[760px] sm:min-w-[400px] w-5/6 min-w-[300px] "/>
        </div>
    </div>
    <a href="#about" class=".same-page-nav-link btn-arrow absolute top-full z-10"/>
    `;

	return heroSection;
}
