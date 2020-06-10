const showInformation = () => {
	const trigger = document.querySelectorAll("[data-show-inf]"),
		moreInform = document.querySelectorAll(".service__item-add"),
		closeInform = document.querySelectorAll(".service__item-button_black");

	trigger.forEach((item, i) => {
		item.addEventListener("click", () => {
			moreInform.forEach((elem) => {
				elem.classList.remove("show");
			});
			moreInform[i].classList.add("show");
		});
	});
	closeInform.forEach((item, i) => {
		item.addEventListener("click", () => {
			moreInform[i].classList.remove("show");
		});
	});
};
export default showInformation;
