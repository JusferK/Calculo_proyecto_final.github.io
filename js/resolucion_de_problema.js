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
    let signo;

    for(let i = 0; i < 2; i++) {
        i === 0 ? signo = '+' : signo = '-';
    
        let x = 3, y = (valor * 8 * (-1)) , z = valor * valor;
        let formula_cuadratica = eval('(-1 *' + y + signo + 'Math.sqrt(Math.pow(' + y + ', 2) - (4 *' + x + '*' + z + '))) / (2 *' + x + ')');
        a.push(formula_cuadratica);
    }

    segunda_derivada(valor);
    let respuesta = a.filter((a, b) => a > b);

    if(respuesta[0] > 0) {
        return respuesta[0].toFixed(3);
    } else {
        return 0;
    } 
};

arista.addEventListener('keyup', () => {
    if(arista.value === '') {
        campo_respuesta.innerHTML = ' '
        document.getElementById('respuesta_de_la_segunda_derivada').innerHTML = ' ';
    } else if(arista.value === '0') {
        campo_respuesta.innerHTML = 0;
        document.getElementById('respuesta_de_la_segunda_derivada').innerHTML = 0;
    } else if(parseInt(arista.value) !== '' && parseInt(arista.value) > 0) {
        campo_respuesta.innerHTML = derivada(parseFloat(arista.value)) + ' m³'
    }

    arista.value !== '' ? campo_respuesta.innerHTML = derivada(parseFloat(arista.value)) + ' m³' : campo_respuesta.innerHTML = ' '
});