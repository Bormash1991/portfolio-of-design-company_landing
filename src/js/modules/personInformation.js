const personInformation = () => {
	const elems = document.querySelectorAll(".team__item");
	const itemWrapper = document.querySelector(".team__wrapper");
	const inform = document.querySelectorAll(".team__inform-wrapper");

	itemWrapper.addEventListener("click", (e) => {
		const target = e.target;
		if (target && target.classList.contains("team__item")) {
			inform.forEach((item) => {
				item.style = "none";
			});
			elems.forEach((item, i) => {
				if (item == target) {
					let targetCoords = item.getBoundingClientRect();
					let xCoord = e.clientX - targetCoords.left;
					let yCoord = e.clientY - targetCoords.top;
					inform[i].style.cssText = `
					        display: block;
					        left:${xCoord}px;
                            top:${yCoord}px `;
					if (document.body.offsetWidth < document.body.scrollWidth) {
						inform[i].style.cssText = `
					        display: block;
					        left:${
										xCoord -
										(document.body.scrollWidth - document.body.offsetWidth + 20)
									}px;
                            top:${yCoord}px `;
					}
				}
			});
		}
	});

	elems.forEach((item) => {
		item.addEventListener("mouseleave", () => {
			inform.forEach((item) => {
				item.style = "none";
			});
		});
	});
};
export default personInformation;
