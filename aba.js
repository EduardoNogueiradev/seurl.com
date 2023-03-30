abaEncurtar.addEventListener('click', () => {
    abaEncurtar.classList.add("press");
    abaQrcode.classList.remove("press");
    abaMenu.classList.remove("press");
});

abaQrcode.addEventListener('click', () => {
    abaQrcode.classList.add("press");
    abaEncurtar.classList.remove("press");
    abaMenu.classList.remove("press");
});

abaMenu.addEventListener('click', () => {
    abaMenu.classList.add("press");
    abaEncurtar.classList.remove("press");
    abaQrcode.classList.remove("press");
});