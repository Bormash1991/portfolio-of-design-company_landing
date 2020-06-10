import slider from "./modules/slider";
import itemInformation from "./modules/itemInformation";
import personInformation from "./modules/personInformation";
window.addEventListener("DOMContentLoaded", () => {
	slider(
		".slider_about .slider__item",
		".slider_about .slider__inner",
		".slider_about .slider__dots",
		".slider_about .slider__wrapper",
		false
	);
	itemInformation();
	personInformation();
});
