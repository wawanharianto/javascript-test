/**
 * Kelas yang merepresentasikan sebuah Item.
 */
class Item {
    constructor(id, name, quantity, price) {
        this.id = id; // ID barang
        this.name = name; // Nama barang
        this.quantity = quantity; // Jumlah barang
        this.price = price; // Harga barang
    }

    /**
     * Memperbarui detail dari item.
     * @param {string} name - Nama barang.
     * @param {number} quantity - Jumlah barang.
     * @param {number} price - Harga barang.
     */
    updateDetails(name, quantity, price) {
        this.name = name; // Memperbarui nama
        this.quantity = quantity; // Memperbarui jumlah
        this.price = price; // Memperbarui harga
    }

    /**
     * Menampilkan detail dari item.
     * @returns {string} Detail dari item.
     */
    displayDetails() {
        return `ID: ${this.id}, Nama: ${this.name}, Jumlah: ${this.quantity}, Harga: ${this.price}`;
    }
}

// Jangan hapus kode di bawah ini!
export default Item;
