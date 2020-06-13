import slider from "./modules/slider";
import itemInformation from "./modules/itemInformation";
import personInformation from "./modules/personInformation";
import map from "./modules/map";
import menu from "./modules/menu";
import scroll from "./modules/scroll";
window.addEventListener("DOMContentLoaded", () => {
	slider(
		".slider_about .slider__item",
		".slider_about .slider__inner",
		".slider_about .slider__dots",
		".slider_about .slider__wrapper",
		false
	);
	slider(
		".slider_team .slider__item",
		".slider_team .slider__inner",
		".slider_team .slider__dots",
		".slider_team .slider__wrapper",
		false,
		".slider__next",
		".slider__prev"
	);
	slider(
		".slider_inform .slider__item",
		".slider_inform .slider__inner",
		".slider_team .slider__dots",
		".slider_inform .slider__wrapper",
		false,
		".slider__next",
		".slider__prev"
	);
	itemInformation();
	personInformation();
	map();
	menu(".header__hamburger", ".header__menu-close", ".header__menu");
	scroll();
});
