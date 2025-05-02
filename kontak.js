document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah pengiriman form sebenarnya

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        if (!nama || !email || !pesan) {
            alert("Semua field harus diisi!");
            return;
        }

        // Simulasi kirim data
        alert("Terima kasih, " + nama + "! Pesanmu telah dikirim.");

        // Reset form
        form.reset();
    });
});