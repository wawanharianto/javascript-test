/**
 * Menghasilkan deret Fibonacci hingga elemen ke-n menggunakan rekursi.
 * @param {number} n - Elemen ke-n dari deret Fibonacci.
 * @returns {number[]} - Array berisi deret Fibonacci hingga elemen ke-n.
 */
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input harus bilangan bulat positif."); // Memastikan n tidak negatif.
    }
    if (n === 0) {
        return [0]; // Deret Fibonacci untuk n = 0.
    }
    if (n === 1) {
        return [0, 1]; // Deret Fibonacci untuk n = 1.
    }
    
    const fibSeries = fibonacci(n - 1); // Rekursi untuk mendapatkan deret hingga n-1.
    fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]); // Menambahkan elemen Fibonacci berikutnya.
    
    return fibSeries; // Mengembalikan deret Fibonacci.
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
