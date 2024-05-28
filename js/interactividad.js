let cuadro_reglas_de_derivacion = document.getElementById('reglas_de_derivacion');
let cuadro_enunciado_solucion = document.getElementById('enunciado_solucion');
let etiqueta_reglas_de_derivada = document.getElementById('label_reglas_de_derivadas');
let etiqueta_enunciado_solucion = document.getElementById('label_enunciado');
let inputs_desactivados_dinamicos_arista = document.querySelectorAll('.inputs_en_math_contenedor_arista');
let seleccionado = etiqueta_reglas_de_derivada;


document.addEventListener('DOMContentLoaded', () => {
    cuadro_enunciado_solucion.classList.add('hidden_class');
    inputs_desactivados_dinamicos_arista.forEach(input => input.disabled = true);
});

etiqueta_enunciado_solucion.addEventListener('click', () => {
    if(seleccionado !== etiqueta_enunciado_solucion) {
        seleccionado = etiqueta_enunciado_solucion;
        cuadro_reglas_de_derivacion.classList.add('hidden_class');
        cuadro_enunciado_solucion.classList.remove('hidden_class');
    }
});

etiqueta_reglas_de_derivada.addEventListener('click', () => {
    if(seleccionado !== etiqueta_reglas_de_derivada) {
        seleccionado = etiqueta_reglas_de_derivada;
        cuadro_reglas_de_derivacion.classList.remove('hidden_class');
        cuadro_enunciado_solucion.classList.add('hidden_class');
    }
});

arista.addEventListener('keyup', () => {
    inputs_desactivados_dinamicos_arista.forEach(input_desactivado => input_desactivado.value = arista.value);
});

