let lista_derivadas = document.getElementById('reglas_de_las_derivadas');
let contenedor_a_insertar = document.getElementById('contenedor_regla_dinamico');
let contenedor_de_contexto_dinamico = document.getElementById('contenedor_dinamico_contexto');
let lista_de_las_reglas = [
    document.getElementById('contenedor_por_definicion'),
    document.getElementById('contenedor_del_producto'),
    document.getElementById('contenedor_del_cociente'),
    document.getElementById('contenedor_de_la_cadena'),
    document.getElementById('contenedor_de_funciones_trigonometricas'),
    document.getElementById('contenedor_de_funciones_logaritmicas'),
    document.getElementById('contenedor_de_funciones_exponenciales'),
];

let contextos_de_formulas = [
    {titulo: 'Derivada por definición', contexto: 'La fórmula de la derivada por definición se basa en el concepto del límite y se usa para encontrar la pendiente de la tangente a la curva de una función en un punto específico.'},
    {titulo: 'Regla del producto', contexto: 'La fórmula de la derivada del producto nos permite encontrar la derivada de una función que es el producto de dos funciones distintas. Para derivar el producto de dos funciones, mantén una función constante y deriva la otra, luego viceversa, y suma ambos resultados.'},
    {titulo: 'Regla del conciente', contexto: 'La fórmula de la derivada del cociente nos permite encontrar la derivada de una función que es el cociente de dos funciones distintas. Para derivar el cociente de dos funciones, primero derivas el numerador multiplicado por el denominador, luego restas el numerador por el denominador derivado, todo esto dividido por el cuadrado del denominador.'},
    {titulo: 'Regla de la cadena', contexto: 'Esta regla establece cómo encontrar la derivada de una función compuesta de dos funciones diferentes. La regla de la cadena nos permite descomponer una función complicada en partes más simples y luego derivarlas individualmente.'},
    {titulo: 'Funciones trigonometricas', contexto: 'La derivación de las funciones trigonométricas es el proceso matemático de encontrar el ritmo al cual una función trigonométrica cambia respecto de la variable independiente; es decir, la derivada de la función. Las funciones trigonométricas más habituales son las funciones sen(x), cos(x) y tan(x).'},
    {titulo: 'Funciones logarítmicas', contexto: 'La derivación logarítmica es una técnica de derivación que nos permite hallar la derivada de una función aplicando las propiedades de los logaritmos'},
    {titulo: 'Funciones exponenciales', contexto: 'La derivada es la función original multiplicada por el logaritmo natural de la base. Esto se debe a las propiedades de la función exponencial y la regla de la cadena en cálculo.'}
];


const generador_de_contenedores = (objeto) => {
    
    
    let titulo_generado = document.createElement('h2');
    titulo_generado.textContent = objeto.titulo;
    let contexto_generado = document.createElement('p');
    contexto_generado.textContent = objeto.contexto;
    
    contenedor_de_contexto_dinamico.replaceChildren(titulo_generado, contexto_generado);

}


lista_derivadas.addEventListener('change', () => {


    switch(lista_derivadas.value) {
        case 'definicion':
            lista_de_las_reglas[0].classList.remove('hidden_class');
            for(let i = 0; i < lista_de_las_reglas.length; i++) i !== 0 && !lista_de_las_reglas[i].classList.contains('hidden_class') ? lista_de_las_reglas[i].classList.add('hidden_class') : false;
            generador_de_contenedores(contextos_de_formulas[0]);
            break;
        case 'producto':
            lista_de_las_reglas[1].classList.remove('hidden_class');
            for(let i = 0; i < lista_de_las_reglas.length; i++) i !== 1 && !lista_de_las_reglas[i].classList.contains('hidden_class') ? lista_de_las_reglas[i].classList.add('hidden_class') : false;
            generador_de_contenedores(contextos_de_formulas[1]);
            break;
        case 'cociente':
            lista_de_las_reglas[2].classList.remove('hidden_class');
            for(let i = 0; i < lista_de_las_reglas.length; i++) i !== 2 && !lista_de_las_reglas[i].classList.contains('hidden_class') ? lista_de_las_reglas[i].classList.add('hidden_class') : false;
            generador_de_contenedores(contextos_de_formulas[2]);
            break;
        case 'cadena':
            lista_de_las_reglas[3].classList.remove('hidden_class');
            for(let i = 0; i < lista_de_las_reglas.length; i++) i !== 3 && !lista_de_las_reglas[i].classList.contains('hidden_class') ? lista_de_las_reglas[i].classList.add('hidden_class') : false;
            generador_de_contenedores(contextos_de_formulas[3]);
            break;
        case 'funciones trigonometricas':
            lista_de_las_reglas[4].classList.remove('hidden_class');
            for(let i = 0; i < lista_de_las_reglas.length; i++) i !== 4 && !lista_de_las_reglas[i].classList.contains('hidden_class') ? lista_de_las_reglas[i].classList.add('hidden_class') : false;
            generador_de_contenedores(contextos_de_formulas[4]);
            break;
        case 'logaritmicas':
            lista_de_las_reglas[5].classList.remove('hidden_class');
            for(let i = 0; i < lista_de_las_reglas.length; i++) i !== 5 && !lista_de_las_reglas[i].classList.contains('hidden_class') ? lista_de_las_reglas[i].classList.add('hidden_class') : false;
            generador_de_contenedores(contextos_de_formulas[5]);
            break;
        case 'exponenciales':
            lista_de_las_reglas[6].classList.remove('hidden_class');
            for(let i = 0; i < lista_de_las_reglas.length; i++) i !== 6 && !lista_de_las_reglas[i].classList.contains('hidden_class') ? lista_de_las_reglas[i].classList.add('hidden_class') : false;
            generador_de_contenedores(contextos_de_formulas[6]);
            break;
    }   
});