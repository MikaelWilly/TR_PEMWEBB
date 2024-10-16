// Inisialisasi variabel input quantity dan cart item
let bungaQuantity = document.getElementById("bunga-quantity");
let uangQuantity = document.getElementById("uang-quantity");
let bonekaQuantity = document.getElementById("boneka-quantity");
let makananQuantity = document.getElementById("makanan-quantity");
let fotoQuantity = document.getElementById("foto-quantity");
let mixQuantity = document.getElementById("mix-quantity");

let cartItems = document.getElementById("cartItems");
let total = document.getElementById("total");

// Fungsi untuk memperbarui keranjang
function updateCart() {
    let bungaTotal = parseInt(bungaQuantity.value) * 35000;
    let uangTotal = parseInt(uangQuantity.value) * 50000;
    let bonekaTotal = parseInt(bonekaQuantity.value) * 40000;
    let makananTotal = parseInt(makananQuantity.value) * 35000;
    let fotoTotal = parseInt(fotoQuantity.value) * 45000;
    let mixTotal = parseInt(mixQuantity.value) * 50000;
    let totalPrice = bungaTotal + uangTotal + bonekaTotal + makananTotal + fotoTotal + mixTotal;

    // Kosongkan isi keranjang sebelum diupdate
    cartItems.innerHTML = '';

    if (bungaQuantity.value > 0) {
        cartItems.innerHTML += `<li>Bouquet Bunga (Qty: ${bungaQuantity.value}) - Rp ${bungaTotal}</li>`;
    }
    if (uangQuantity.value > 0) {
        cartItems.innerHTML += `<li>Bouquet Uang (Qty: ${uangQuantity.value}) - Rp ${uangTotal}</li>`;
    }
    if (bonekaQuantity.value > 0) {
        cartItems.innerHTML += `<li>Bouquet Boneka (Qty: ${bonekaQuantity.value}) - Rp ${bonekaTotal}</li>`;
    }
    if (makananQuantity.value > 0) {
        cartItems.innerHTML += `<li>Bouquet Makanan (Qty: ${makananQuantity.value}) - Rp ${makananTotal}</li>`;
    }
    if (fotoQuantity.value > 0) {
        cartItems.innerHTML += `<li>Bouquet Foto (Qty: ${fotoQuantity.value}) - Rp ${fotoTotal}</li>`;
    }
    if (mixQuantity.value > 0) {
        cartItems.innerHTML += `<li>Bouquet Mix (Qty: ${mixQuantity.value}) - Rp ${mixTotal}</li>`;
    }

    // Tampilkan total harga
    total.textContent = `Total: Rp ${totalPrice}`;
}
