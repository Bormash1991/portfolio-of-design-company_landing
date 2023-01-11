import "leaflet";
const map = () => {
	// eslint-disable-next-line no-undef
	const map = L.map("map").setView([50.454, 30.523], 17);
	// eslint-disable-next-line no-undef
	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
	// eslint-disable-next-line no-undef
	L.marker([50.454, 30.523]).addTo(map);
};
export default map;
