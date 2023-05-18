import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return json({
		message: 'endpoint should have a Vary: Accept header'
	});
}
