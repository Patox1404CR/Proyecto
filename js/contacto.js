const d = document,
    rangeInputs = document.querySelectorAll('input[type="range"]'),
    numberInput = document.querySelector('input[type="number"]'),
    $fechaNacimiento = document.getElementById("fecha-nacimiento"),
    $edad = document.getElementById("edad").value;

const calculoEdad = (fecha) => {
    var fecha = document.getElementById("fecha-nacimiento").value;
    console.log(fecha);
    let hoy = new Date();
    let cumpleanos = new Date(fecha);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    document.querySelector("#edad").textContent = `La edad calculada es de: ${edad} años`;
    return console.log(edad);
}



$fechaNacimiento.addEventListener("change", calculoEdad);
/* Event Listeners */