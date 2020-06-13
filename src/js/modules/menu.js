import checkWidth from "./modals_checkWidth";
const menu = (hamburgerSelector, closeBtnSelector, itemWrapperSelector) => {
	const hamburger = document.querySelector(hamburgerSelector),
		closeBtn = document.querySelector(closeBtnSelector),
		itemWrapper = document.querySelector(itemWrapperSelector);
	hamburger.addEventListener("click", () => {
		itemWrapper.style.top = "0px";
		document.body.style.overflow = "hidden";
		document.body.style.marginRight = `${checkWidth()}px`;
	});
	const closeMenu = () => {
		itemWrapper.style.top = "-100%";
		document.body.style.overflow = "";
		document.body.style.marginRight = `0px`;
	};
	closeBtn.addEventListener("click", () => {
		closeMenu();
	});
	itemWrapper.addEventListener("click", (e) => {
		e.preventDefault();
		const target = e.target;
		if (target && (target.nodeName == "LI" || target.nodeName == "A")) {
			closeMenu();
		}
	});
};
export default menu;
