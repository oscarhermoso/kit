/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch }) {
	const response = await fetch('vary');

	return { ...(await response.json()) };
}
