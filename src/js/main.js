import slider from "./modules/slider";
import showInformation from "./modules/showInformation";
window.addEventListener("DOMContentLoaded", () => {
	slider(
		".slider_about .slider__item",
		".slider_about .slider__inner",
		".slider_about .slider__dots",
		".slider_about .slider__wrapper",
		false
	);
	showInformation();
});
