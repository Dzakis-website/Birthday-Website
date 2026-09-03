document.addEventListener("DOMContentLoaded", () => {
    const btnSurprise = document.getElementById("btnSurprise");
    const surpriseMessage = document.getElementById("surpriseMessage");

    btnSurprise.addEventListener("click", () => {
        // Tampilkan pesan tersembunyi
        surpriseMessage.style.display = "block";
        
        // Ubah teks tombol setelah diklik
        btnSurprise.innerHTML = "Lagi! 🎈🎉";

        // Panggil Efek Konfeti
        launchConfetti();
    });
});

function launchConfetti() {
    // Letupan di tengah
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Pesta konfeti dari kiri dan kanan
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > end) {
            return clearInterval(interval);
        }

        confetti({
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            origin: { x: Math.random() * 0.3, y: Math.random() - 0.2 },
            colors: ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ed4245']
        });

        confetti({
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            origin: { x: Math.random() * 0.3 + 0.7, y: Math.random() - 0.2 },
            colors: ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ed4245']
        });
    }, 250);
}
