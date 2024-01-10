
/**
 * Calcula la proporción de números positivos, negativos y cero en un array dado.
 * @param {number[]} arr - El array de números.
 * @returns {void}
 */
function plusMinus(arr) {

    /**
     * Imprime un número con 6 decimales.
     * @param {number} value - El número a imprimir.
     * @returns {void}
     */
    const print = (value) => {
        console.log(Number(value).toFixed(6));
    }

    const length = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < length; i++) {
        const number = arr[i];
        if (number === 0) zero++;
        else if (number > 0) positive++;
        else if (number < 0) negative++;        
    }

    print(positive/length);
    print(negative/length);
    print(zero/length);
}

plusMinus([-4, 3, -9, 0, 4, 1])
