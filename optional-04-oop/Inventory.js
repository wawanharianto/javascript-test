/**
 * Kelas yang merepresentasikan sebuah Inventaris.
 */
class Inventory {
    constructor() {
        this.items = []; // Inisialisasi properti items sebagai array kosong.
    }

    /**
     * Menambahkan item ke dalam inventaris.
     * @param {Item} item - Item yang akan ditambahkan ke dalam inventaris.
     */
    addItem(item) {
        this.items.push(item); // Menambahkan item ke dalam array items.
    }

    /**
     * Menghapus item dari inventaris berdasarkan id-nya.
     * @param {number} id - ID dari item yang akan dihapus.
     */
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id); // Menghapus item dengan id yang diberikan.
    }

    /**
     * Menampilkan semua item dalam inventaris.
     * @returns {string} String yang berisi detail semua item.
     */
    listItems() {
        return this.items.map(item => item.displayDetails()).join('\n'); // Mengambil detail item dan menggabungkannya dengan newline.
    }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
