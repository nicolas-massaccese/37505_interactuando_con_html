// catching the DOM
const encabezados = document.querySelector('#titulos')
const Bienvenidos = document.getElementById('mensajeBienvenida')
const productosAgregados = document.querySelector('#suCompra')
const terminar = document.querySelector('div')

titulos.style.fontFamily = 'verdana'
titulos.style.fontStyle = 'italic'
titulos.style.color = 'blue'


let = marquesina = ['OFERTAS IMPERDIBLES', 'LA MEJOR CALIDAD', 'MODELOS EXCLUSIVOS', 'PARA TODA OCACIÓN']
let = marquesinaAleatoria = Math.floor(Math.random()*marquesina.length)
console.log(marquesinaAleatoria)

mensajeBienvenida.innerText = marquesina[marquesinaAleatoria];

mensajeBienvenida.style.fontFamily = 'verdana'
mensajeBienvenida.style.fontSize = '20px'
mensajeBienvenida.style.color = 'White'
mensajeBienvenida.style.backgroundColor = 'green'


// funcionamiento carrito
function agregarACarrito(){

    const productosCarrito = []
    let productos = parseInt(prompt("¿Cuál de nuestros productos desea adquirir? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
    
    do{
        const nuevoProducto = new Producto()
        switch(productos){
        case 1:
            console.log('sumaste una Mochila al carrito')
            suCompra.innerText += '\nUna Mochila al carrito'
            productos = parseInt(prompt("¿Desea sumar algun producto más a su carrito? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            nuevoProducto.tipo = 'Mochila'
            nuevoProducto.precio = 15000
            break;
        case 2:
            console.log('sumaste un Bolso al carrito')
            suCompra.innerText += '\nUn Bolso'
            productos = parseInt(prompt("¿Desea sumar algun producto más a su carrito? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            nuevoProducto.tipo = 'Bolso'
            nuevoProducto.precio = 10000
            break;
        case 3:
            console.log('sumaste un Accesorio al carrito')
            suCompra.innerText += '\nUn Accesorio'
            productos = parseInt(prompt("¿Desea sumar algun producto más a su carrito? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            nuevoProducto.tipo = 'Accesorio'
            nuevoProducto.precio = 5000
            break;
        default:
            alert("Por favor seleccione alguna de las opciones indicadas");
            productos = parseInt(prompt("¿Cuál de nuestros productos desea adquirir? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            break
        }
        if (productos > 0 && productos < 4){
            productosCarrito.push(nuevoProducto)
        }
    }while (productos !=0)

    return productosCarrito
}

function mostrarTotal(valorFinal){
    console.log(`Su compra ha sido realizada. El importe a abonar es de ${valorFinal}`)
    alert(`Su compra ha sido realizada. El importe a abonar es de ${valorFinal}`)
    let compraRealizada = document.createElement('span')
    compraRealizada.innerHTML += `\nEl importe a abonar es de ${valorFinal} pesos argentinos`
    terminar.append(compraRealizada)
    compraRealizada.style.fontFamily =  'verdana'
    compraRealizada.style.color =  'red'
    compraRealizada.style.fontSize =  '40px'
}

function calcularTotalCarrito(productosCarrito){
    let total = 0
    for(let i=0; i < productosCarrito.length ; i++){
        total += productosCarrito[i].precio
    }

    return total
}

const productosComprados = agregarACarrito()
let total = calcularTotalCarrito(productosComprados)

mostrarTotal(total)

function Producto(tipo, precio){

    this.tipo = tipo
    this.precio = precio
}

