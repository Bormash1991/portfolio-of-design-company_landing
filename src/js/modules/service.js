class Service {
	_apiBase = "http://localhost:3000";
	sendData = async (url, data) => {
		const res = await fetch(`${this._apiBase}${url}`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (!res.ok) {
			throw Error(`Could not fetch ${res.url}, status: ${res.status}`);
		}
		return await res.json();
	};
	sendForm = async (data) => {
		return await this.sendData("/message/", data);
	};
}
export default Service;
