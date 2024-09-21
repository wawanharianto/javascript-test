import test from 'node:test'; // Mengimpor modul pengujian
import assert from 'node:assert'; // Mengimpor modul assertion
import sum from './index.js'; // Mengimpor fungsi sum

test('Pengujian fungsi sum', (t) => {
    // Kasus uji untuk bilangan positif
    assert.strictEqual(sum(1, 2), 3, 'sum(1, 2) harus mengembalikan 3');
    assert.strictEqual(sum(5, 10), 15, 'sum(5, 10) harus mengembalikan 15');

    // Kasus uji untuk bilangan nol
    assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) harus mengembalikan 0');
    assert.strictEqual(sum(0, 5), 5, 'sum(0, 5) harus mengembalikan 5');
    assert.strictEqual(sum(5, 0), 5, 'sum(5, 0) harus mengembalikan 5');

    // Kasus uji untuk bilangan negatif
    assert.strictEqual(sum(-1, 5), 0, 'sum(-1, 5) harus mengembalikan 0');
    assert.strictEqual(sum(5, -1), 0, 'sum(5, -1) harus mengembalikan 0');
    assert.strictEqual(sum(-1, -1), 0, 'sum(-1, -1) harus mengembalikan 0');

    // Kasus uji untuk input bukan angka
    assert.strictEqual(sum('1', 2), 0, 'sum("1", 2) harus mengembalikan 0');
    assert.strictEqual(sum(1, '2'), 0, 'sum(1, "2") harus mengembalikan 0');
    assert.strictEqual(sum('1', '2'), 0, 'sum("1", "2") harus mengembalikan 0');
    assert.strictEqual(sum(undefined, 5), 0, 'sum(undefined, 5) harus mengembalikan 0');
    assert.strictEqual(sum(5, null), 0, 'sum(5, null) harus mengembalikan 0');
});

