/**
 * Cuenta valores repetidos un array utilizando el algoritmo de Counting Sort.
 *
 * @param {number[]} arr - El array a contar.
 * @returns {number[]} - El array con los valores contados.
 */
function countingSort(arr) {
    // obtenemos la longitud del array
    const len = arr.length;
    // creamos un array de longitud 100 con valores en 0
    const counted = Array(100).fill(0);
    // recorremos el array
    for (let i=0; i<len; i++) {
        counted[arr[i]]++;
    }
    return counted;
}

// array con 100 valores aleatorios entre 0 y 100
const arr = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
console.log(countingSort(arr));
