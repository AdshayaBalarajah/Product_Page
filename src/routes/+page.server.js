// +page.server.js
export const load = async ({ fetch }) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=50');
	const products = await response.json();

	return { products };
};
