// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menampung data orders
let orders = []; // Inisialisasi array untuk menyimpan pesanan

// Fungsi untuk menambahkan order
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0); // Menghitung total harga
  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu'
  };
  orders.push(order); // Menambahkan order ke dalam array
}

// Fungsi untuk memperbarui status order
function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId); // Mencari order berdasarkan ID
  if (order) {
    order.status = status; // Memperbarui status order
  }
}

// Fungsi untuk menghitung total revenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(o => o.status === 'Selesai') // Memfilter order yang berstatus Selesai
    .reduce((sum, order) => sum + order.totalPrice, 0); // Menghitung total revenue
}

// Fungsi untuk menghapus order
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id); // Menghapus order berdasarkan ID
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
