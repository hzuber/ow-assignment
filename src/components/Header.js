export function Header() {
	const header = document.createElement("header");
	header.id = "header";
	header.className = "fixed top-0 z-50 w-full bg-neutral-0";

	header.innerHTML = `
    <div class="w-full mx-auto flex items-center justify-between px-5 py-4">
        <div class="flex-shrink-0">
            <img src="/icons/ow-main-logo.svg" alt="Logo" class="h-full max-h-10">
        </div>
        
        <a class="btn btn-secondary header-btn" href="https://discord.com/invite/overwolf-developers">
            Join
        </a>
    </div>
    `;

	return header;
}
