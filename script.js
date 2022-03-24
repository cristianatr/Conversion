/* function calcular () {
    let base = Number(document.getElementById("base").value);
    var num_b1 = Number(document.getElementById("dec").value);
    let num_b2 = num_b1.toString(base);
    document.querySelector(".value").innerHTML = `Decimal : ${num_b1} = Binario : ${num_b2}`;
}
 */

function calcular(){
    
    let precision = prompt("Ingrese la precisión");
    let base = Number(document.getElementById("base").value);
    var num_b1 = Number(document.getElementById("dec").value);

    let part_int = Math.floor(num_b1);
    let part_dec = num_b1 - part_int;

    let num_b2 = num_b1.toString(base);
    document.querySelector(".value").innerHTML = `Decimal : ${num_b1} = Conversion en base ${base} : ${num_b2}`;

    /* mostrar los resultados de un for */
    let resu_div = document.querySelector(".div_suc");
    resu_div.innerHTML = "";

    //Divisiion sucesitas
    while (part_int > 0){
        resu_div.innerHTML += `<br> ${part_int}/ ${base} = ${part_int/base} --> ${part_int % base} `;
        part_int = Math.floor(part_int / base);
    }

    //multiplicacion sucesivas
    let resu_mult = document.querySelector(".mult_suc");
    resu_mult.innerHTML = "";
    
    for(i = 0; i<=precision; i++){
        if (part_dec*base<1){
            resu_mult.innerHTML += `<br> ${part_dec} * ${base} = ${part_dec*base} --> ${Math.floor(part_dec*base)}`;
            part_dec = part_dec*base;
        }else{
            resu_mult.innerHTML += `<br> ${part_dec} * ${base} = ${part_dec*base} --> ${Math.floor(part_dec*base)}`;
            part_dec = part_dec*base - Math.floor(part_dec*base);
    }
}
    // parte entera de un numero decimal
    // int(num_b1) : parte entera de un numero decimal

}
