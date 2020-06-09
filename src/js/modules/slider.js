const slider = (
	contentSelector,
	innerSelector,
	dWrapperSelector,
	wrapperSelector,
	auto = true,
	nextSelector = "",
	prevSelector = ""
) => {
	const content = document.querySelectorAll(contentSelector),
		inner = document.querySelector(innerSelector),
		dotsWrapper = document.querySelector(dWrapperSelector),
		wrapper = document.querySelector(wrapperSelector),
		width = window.getComputedStyle(wrapper).width;
	let slideIndex = 1,
		margin = 0,
		dots = [];
	inner.style.cssText = `
        width: ${100 * content.length}%;
        transition: 0.5s all;
        `;
	for (let i = 0; i < content.length; i++) {
		const div = document.createElement("div");
		div.setAttribute("data-slide-to", i + 1);
		div.classList.add("slider__dot");
		dotsWrapper.appendChild(div);
		dots.push(div);
		if (i == 0) {
			div.classList.add("slider__dot_active");
		}
	}
	const selectDot = () => {
		dots.forEach((item) => {
			item.classList.remove("slider__dot_active");
		});
		dots[slideIndex - 1].classList.add("slider__dot_active");
	};
	const nextSlide = () => {
		if (margin == +width.slice(0, width.length - 2) * (content.length - 1)) {
			margin = 0;
		} else {
			margin += +width.slice(0, width.length - 2);
		}
		inner.style.transform = `translateX(-${margin}px)`;
		if (slideIndex == content.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}
		selectDot();
	};
	const prevSlide = () => {
		if (margin == 0) {
			margin = +width.slice(0, width.length - 2) * (content.length - 1);
		} else {
			margin -= +width.slice(0, width.length - 2);
		}
		inner.style.transform = `translateX(-${margin}px)`;
		if (slideIndex == 1) {
			slideIndex = content.length;
		} else {
			slideIndex--;
		}
		selectDot();
	};
	if (auto) {
		const timerInterval = setInterval(nextSlide, 4000);
	}
	if (nextSelector != "" && prevSelector != "") {
		const prev = document.querySelector(prevSelector),
			next = document.querySelector(nextSelector);
		prev.addEventListener("click", () => {
			prevSlide();
		});
		next.addEventListener("click", () => {
			nextSlide();
		});
	}
};
export default slider;
