/**
 * Menghitung faktorial dari bilangan bulat positif n menggunakan rekursi.
 * @param {number} n - Bilangan bulat positif.
 * @returns {number} - Faktorial dari n.
 */
function factorial(n) {
    if (n < 0) {
        throw new Error("Input harus bilangan bulat positif."); // Memastikan n tidak negatif.
    }
    if (n === 0 || n === 1) {
        return 1; // Faktorial dari 0 dan 1 adalah 1.
    }
    return n * factorial(n - 1); // Rekursi untuk menghitung faktorial.
}

// Jangan hapus kode di bawah ini!
export default factorial;
