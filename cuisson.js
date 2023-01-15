const caneles = document.getElementById("caneles");
const buy_oven = document.getElementById("buy_oven");
const oven = document.getElementById("oven");
var nombre_caneles = 0;
var nombre_four = 0;
var coeff = 1;

function cuisiner_caneles()
{
    nombre_caneles += 1 * coeff;
    caneles.textContent = nombre_caneles;
    if (nombre_caneles >= 25 * coeff) {
        buy_oven.disabled = false;
    }
}

function buy_new_oven()
{
    coeff += 1;
    buy_oven.disabled = true;
    nombre_four += 1;
    oven.textContent = nombre_four;
}