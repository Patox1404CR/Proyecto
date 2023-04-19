async function ExtraerJson() {

    var data = await fetch('https://patox1404cr.github.io/Json/Pizza.json');

    var Pizzas = await data.json();

    return Pizzas;

}


var Producto = "";
var producto = document.querySelector('#json');

async function CargarProductos() {

    var productos = await ExtraerJson();

    productos = productos.Pizzas;
    productos.map(pizza => {
        console.log(pizza.Posicion);
        Producto += `<div class="col-lg-4 col-md-6 p-0 portfolio-item ${pizza.Posicion}">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="${pizza.imagen}" alt="">
                            <a class="portfolio-btn" href="${pizza.imagen}" data-lightbox="portfolio">
                                <i class="fa fa-plus text-primary" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>`
    })

    producto.innerHTML = Producto;

}