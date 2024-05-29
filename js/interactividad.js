let cuadro_reglas_de_derivacion = document.getElementById('reglas_de_derivacion');
let cuadro_enunciado_solucion = document.getElementById('enunciado_solucion');
let etiqueta_reglas_de_derivada = document.getElementById('label_reglas_de_derivadas');
let etiqueta_enunciado_solucion = document.getElementById('label_enunciado');
let inputs_desactivados_dinamicos_arista = document.querySelectorAll('.inputs_en_math_contenedor_arista');
let seleccionado = etiqueta_reglas_de_derivada;
let select_lista_de_derivadas = document.getElementById('reglas_de_las_derivadas');
let lista_de_etiquetas = [etiqueta_reglas_de_derivada, etiqueta_enunciado_solucion];

let lista_de_contenedores_de_reglas = [
    document.getElementById('contenedor_por_definicion'),
    document.getElementById('contenedor_del_producto'),
    document.getElementById('contenedor_del_cociente'),
    document.getElementById('contenedor_de_la_cadena'),
    document.getElementById('contenedor_de_funciones_trigonometricas'),
    document.getElementById('contenedor_de_funciones_logaritmicas'),
    document.getElementById('contenedor_de_funciones_exponenciales'),
];

document.addEventListener('DOMContentLoaded', () => {
    cuadro_enunciado_solucion.classList.add('hidden_class');
    inputs_desactivados_dinamicos_arista.forEach(input => input.disabled = true);

    etiqueta_reglas_de_derivada.style.padding = '20px';
    etiqueta_reglas_de_derivada.style.border = '1px solid white';
    etiqueta_reglas_de_derivada.style.fontSize = '20px';
    etiqueta_reglas_de_derivada.style.borderRadius = '10px';

    for(let i = 1; i < lista_de_contenedores_de_reglas.length; i++) {
        lista_de_contenedores_de_reglas[i].classList.add('hidden_class');
    }

    generador_de_contenedores(contextos_de_formulas[0]);
});

etiqueta_enunciado_solucion.addEventListener('click', () => {
    seleccionado = etiqueta_enunciado_solucion;
    cuadro_reglas_de_derivacion.classList.add('hidden_class');
    cuadro_enunciado_solucion.classList.remove('hidden_class');

    etiqueta_enunciado_solucion.style.padding = '20px';
    etiqueta_enunciado_solucion.style.border = '1px solid white';
    etiqueta_enunciado_solucion.style.fontSize = '20px';
    etiqueta_enunciado_solucion.style.borderRadius = '10px';

    etiqueta_reglas_de_derivada.style.padding = '0px';
    etiqueta_reglas_de_derivada.style.fontSize = '16px';
    etiqueta_reglas_de_derivada.style.borderRadius = '0px';
    etiqueta_reglas_de_derivada.style.transition = '0.2s ease-in';
    etiqueta_reglas_de_derivada.style.border = '0px';

});

etiqueta_reglas_de_derivada.addEventListener('click', () => {
        seleccionado = etiqueta_reglas_de_derivada;
        cuadro_reglas_de_derivacion.classList.remove('hidden_class');
        cuadro_enunciado_solucion.classList.add('hidden_class');

        etiqueta_reglas_de_derivada.style.padding = '20px';
        etiqueta_reglas_de_derivada.style.fontSize = '20px';
        etiqueta_reglas_de_derivada.style.borderRadius = '10px';
        etiqueta_reglas_de_derivada.style.border = '1px solid white';

        etiqueta_enunciado_solucion.style.padding = '0px';
        etiqueta_enunciado_solucion.style.fontSize = '16px';
        etiqueta_enunciado_solucion.style.borderRadius = '0px';
        etiqueta_enunciado_solucion.style.transition = '0.2s ease-in';
        etiqueta_enunciado_solucion.style.border = '0px';
});


arista.addEventListener('keyup', () => {
    inputs_desactivados_dinamicos_arista.forEach(input_desactivado => input_desactivado.value = arista.value);
});

for(let i = 0; i < lista_de_etiquetas.length; i++) {
    lista_de_etiquetas[i].addEventListener('mouseover', () => {
        if(lista_de_etiquetas[i] !== seleccionado) {
            lista_de_etiquetas[i].style.padding = '20px';
            lista_de_etiquetas[i].style.border = '1px solid white';
            lista_de_etiquetas[i].style.fontSize = '20px';
            lista_de_etiquetas[i].style.borderRadius = '10px';
            lista_de_etiquetas[i].style.transition = '0.2s ease-in';
            lista_de_etiquetas[i].style.cursor = 'pointer';
        }
    });

    lista_de_etiquetas[i].addEventListener('mouseout', () => {
        if(lista_de_etiquetas[i] !== seleccionado) {
            lista_de_etiquetas[i].style.padding = '0';
            lista_de_etiquetas[i].style.border = '0px';
            lista_de_etiquetas[i].style.fontSize = '16px';
            lista_de_etiquetas[i].style.borderRadius = '0px';
            lista_de_etiquetas[i].style.transition = '0.2s ease-out';
        }
    });
}