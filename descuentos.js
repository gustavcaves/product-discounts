// 'use strict';

// const { result } = require("lodash");

// const precioInicialSinDescuento = 210;

// const descuentoARealizar = 15;

// const precioConDescuento = precioInicialSinDescuento - ((descuentoARealizar * precioInicialSinDescuento) / 100)

// console.log({
//     precioInicialSinDescuento,
//     descuentoARealizar,
//     precioConDescuento,
// })


function obtenerDescuento(precio, descuento) {
    const precioConDescuento = precio - ((descuento * precio) / 100)
    // alert(precioConDescuento)
    return precioConDescuento
}


// // ARRAY CON CUPONES DE DESCUENTO TIPO DICCIONARIO

// const coupons = [
//     {
//         name: "JuanDC_es_Batman",
//         discount: 15,
//     },
//     {
//         name: "pero_no_le_digas_a_nadie",
//         discount: 30,
//     },
//     {
//         name: "es_un_secreto",
//         discount: 25,
//     },
// ];


// const isCouponValueValid = function (coupon) {
//     return coupon.name === couponValue;
// };

// const userCoupon = coupons.find(isCouponValueValid);

// if (!userCoupon) {
//     alert("El cupón " + userCouponValue + "no es válido");
// } else {
//     const descuento = userCoupon.discount;
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }



const btnPrecio = document.getElementById("button-calculo")

btnPrecio.addEventListener('click', function CalcularObtenerDescuento(params) {

    const result = document.getElementById("result-discount")
    
    const data = document.getElementById("input-precio")
    const value1 =  data.value
    const data2 = document.getElementById("input-descuento")
    const value2 = data2.value
    let descuentoObtenido = obtenerDescuento(value1, value2)
    result.innerHTML = `${descuentoObtenido}`
})






