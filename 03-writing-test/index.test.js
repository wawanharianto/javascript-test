// index.test.js
import { strict as assert } from 'node:assert';
import { sum } from './index.js';
import { test } from 'node:test';

test('sum adds 1 + 2 to equal 3', () => {
    assert.equal(sum(1, 2), 3);
});

test('sum adds -1 + 1 to equal 0', () => {
    assert.equal(sum(-1, 1), 0);
});

test('sum adds 0 + 0 to equal 0', () => {
    assert.equal(sum(0, 0), 0);
});

test('sum adds 2.5 + 2.5 to equal 5', () => {
    assert.equal(sum(2.5, 2.5), 5);
});

test('sum adds large numbers correctly', () => {
    assert.equal(sum(1000000, 2000000), 3000000);
});
