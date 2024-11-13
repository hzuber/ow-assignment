// components/MyButton.js
class MyButton extends HTMLElement {
	constructor() {
		super();
		const button = document.createElement("button");
		button.textContent = this.getAttribute("text") || "Default Text";
		button.addEventListener("click", () =>
			alert("Custom Element Button Clicked!")
		);
		this.appendChild(button);
	}
}

// Define the custom element
customElements.define("my-button", MyButton);
