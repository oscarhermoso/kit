import { assert, test } from 'vitest';
import { negotiate, has_vary_accept } from './http.js';

test('handle valid accept header value', () => {
	const accept = 'text/html';
	assert.equal(negotiate(accept, ['text/html']), 'text/html');
});

test('handle invalid accept header value', () => {
	const accept = 'text/html,*';
	assert.equal(negotiate(accept, ['text/html']), 'text/html');
});

for (const test_case of ['Accept', '*', 'Other-Header,accept']) {
	test(`request/response with Vary header and value "${test_case}" is matched`, () => {
		const exchange = new Request('https://example.com', {
			headers: new Headers({ Vary: test_case })
		});
		assert.equal(has_vary_accept(exchange), true);
	});
}

for (const test_case of [{ Vary: 'other,headers' }, { Vary: '' }]) {
	test(`request/response with Vary header and value "${test_case}" is not matched`, () => {
		const exchange = new Request('https://example.com', {
			headers: new Headers(test_case)
		});
		assert.equal(has_vary_accept(exchange), false);
	});
}
