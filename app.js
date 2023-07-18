const qrModel = document.querySelector("#qr-code");
const qrText = document.querySelector(".cosmetic-container__text");
const light = document.querySelector(".cosmetic-container__light");
const dark = document.querySelector(".cosmetic-container__dark");
const sizes = document.querySelector(".cosmetic-container__sizes");

qrText.addEventListener("input", handleQRText);
light.addEventListener("input", handleLightColor);
dark.addEventListener("input", handleDarkColor);
sizes.addEventListener("change", handleSize);

let colorLight = "#fff",
    colorDark = "#000",
    text = "defaultText",
    size = 300;

function handleDarkColor(e) {
    colorDark = e.target.value;
    generateQRCode();
}

function handleLightColor(e) {
    colorLight = e.target.value;
    generateQRCode();
}

function handleQRText(e) {
    const value = e.target.value;
    text = value;
    generateQRCode();
}

async function generateQRCode() {
    qrModel.innerHTML = "";
    new QRCode("qr-code", {
        text,
        height: size,
        width: size,
        colorLight,
        colorDark,
    });
}


function handleSize(e) {
    size = e.target.value;
    generateQRCode();
}