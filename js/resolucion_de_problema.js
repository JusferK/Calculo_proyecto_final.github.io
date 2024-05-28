let arista = document.getElementById('arista');
let campo_respuesta = document.getElementById('respuesta_del_volumen_maximo');
let potencia_del_problema_1 = 3;
let potencia_del_problema_2_y_3 = 2;

const segunda_derivada = valor => {
    let resultado = (8 * valor) / 6;
    document.getElementById('respuesta_de_la_segunda_derivada').innerHTML = resultado.toFixed(3);
}

const derivada = valor => {
    let a = [];
    let contador_de_iteraciones = 0;
    let signo;
    
    for(let i = 0; i < 2; i++) {
        contador_de_iteraciones === 0 ? signo = '+' : signo = '-';
        contador_de_iteraciones++;
 
        let x = 3, y = (valor * 8 * (-1)) , z = valor * valor;

        let formula_cuadratica = eval('(-1 *' + y + signo + 'Math.sqrt(Math.pow(' + y + ', 2) - (4 *' + x + '*' + z + '))) / (2 *' + x + ')');
        a.push(formula_cuadratica);
    }

    segunda_derivada(arista.value);
    
    let respuesta = a.filter((a, b) => a > b);

    return respuesta[0].toFixed(3);
};

arista.addEventListener('change', () => arista.value !== '' ? campo_respuesta.innerHTML = derivada(parseFloat(arista.value)) + ' m³' : campo_respuesta.innerHTML = ' ');