// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
  for (let i = 0; i < array.length; i++){
    nuevoArray[i] = array[i] + 1;
    }
    return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var nuevoArray=array;
  nuevoArray.push(elemento);
  return nuevoArray;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var arreglo = array
  arreglo.unshift(elemento);
  return arreglo
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
//   string = "";
//   for (let i = 0 ; i<palabras.length; i++){
//     string = string + palabras[i] + " ";
//   }
//   return string;
// }
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var arreglo = array
  var encontro = false;
  for (i=0; i < array.length; i++){
    if (array[i] == elemento){
       return true;
    }
    else {
      encontro = false;
    }
  }
  return encontro;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma=0;
  valores = numeros;
  for (i = 0 ; i< numeros.length; i++){
    if (Number.isInteger(valores[i])){
      suma = suma + valores[i];
    }
  }
  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var valores = resultadosTest;
  var suma = 0;
  for (i = 0; i<resultadosTest.length; i++){
    if (Number.isInteger(valores[i])){
      suma = suma + valores[i];
    }
  }
  console.log ('Suma ' + suma);
  console.log(valores.length)
  console.log('Promedio '+ suma/(valores.length));
  var promedio = suma/(valores.length);
  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numero = 0;
  var num = numeros;
  for (i=0; i<num.length; i++){
    if (Number.isInteger(num[i]) && (num[i]> 0 )){
      if (num[i] > numero){
        numero = num[i];
      }
    }
  }
  return numero;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  calculo = 1;
  if (arguments.length<1) return 0;
  for (i=0; i<arguments.length;i++){
      calculo = calculo * arguments[i];
    }
  return calculo
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  contar = 0;
  for (i=0; i<arreglo.length;i++){
    if (arreglo[i]>18){
      contar = contar + 1;
    }
  }
  return contar;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if (numeroDeDia === 1 || numeroDeDia === 7 ){
    return 'Es fin de semana'
    }
    else{
      return "Es dia Laboral"
    }
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString()
  if (num.charAt()== "9"){
    return true
  }
  else{
    return false
    }
  }


  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí
    var elemento=arreglo[0];
    for (i=0; i<arreglo.length; i++){
      if (elemento != arreglo[i]){
        return false
      }
    }
    return true
  }


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mes =[];
  for (i=0; i < array.length ; i++){
    if (array[i] === 'Enero' || array[i]=== 'Marzo' || array[i]==='Noviembre'){
      mes.push(array[i]);
    }
    }
    if (mes.length<3){
      return 'No se encontraron los meses pedidos'
    }
    else {
      return mes
    }
  }


  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    nuevo=[];
    for (i=0; i<array.length; i++){
      if (array[i]>100){
        nuevo.push(array[i]);
      }
    }
    return nuevo
  }


  function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    nuevo=[];
    suma = numero;
    for(var i=0;i<10;i++){
      suma = suma + 2;
      console.log(suma);
      if(suma === i) break;
      else{
        nuevo.push(suma);
      }
    }
    if (i < 10){
      return "Se interrumpió la ejecución"
    }
    else{
      return nuevo;
    }
  }


  function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    nuevo=[];
    suma = numero;
    for(var i=0;i<10;i++){
      if(i == 5 )continue;
      else{
        suma = suma + 2;
        nuevo.push(suma);
      }
    }
    if (i < 10){
      return "Se interrumpió la ejecución"
    }
    else{
      return nuevo;
    }
  }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
