import Service from "./service";
const sendForm = () => {
	const forms = document.querySelectorAll("[data-send-form]"),
		input = document.querySelectorAll("[data-clear-text]");
	const clearInputs = () => {
		input.forEach((item) => {
			item.value = "";
		});
	};
	let message = {
		loading: "img/form/original.svg",
		sucsess: "Спасибо! Скоро с вами свяжутся",
		failure: "Что-то пошло не так...",
	};
	forms.forEach((item) => {
		item.addEventListener("submit", (e) => {
			e.preventDefault();
			let statusMessage = document.createElement("img"),
				button = item.querySelector("button");
			statusMessage.src = message.loading;
			statusMessage.classList.add("status");
			button.textContent = "";
			button.append(statusMessage);
			const formData = new FormData(item);
			let formObj = {};
			for (let [key, value] of formData.entries()) {
				formObj[key] = value;
			}
			const postData = new Service();
			postData
				.sendForm(formObj)
				.then(() => {
					button.removeChild(statusMessage);
					button.textContent = message.sucsess;
				})
				.catch(() => (button.textContent = message.failure))
				.finally(() => {
					clearInputs();
					setTimeout(() => (button.textContent = "Send Message"), 5000);
				});
		});
	});
};
export default sendForm;
