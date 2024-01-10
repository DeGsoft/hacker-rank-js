/**
 * Calcula las sumas mínima y máxima de un array de números.
 * 
 * @param {number[]} arr - El arreglo de números.
 * @returns {void}
 */
function miniMaxSum(arr) {
    const ordered = arr.sort((a, b) => a - b);
    let min = 0;
    let max = 0;
    let len = ordered.length;

    for (let i = 0; i < len; i++) {
        if (i < len-1) min += ordered[i];
        if (i > 0) max += ordered[i];
    }

    console.log(min + "  " + max);
}

miniMaxSum([1, 3, 5, 7, 9])
//16 24
