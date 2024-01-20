# Ordenación por comparación
Quicksort suele tener un tiempo de ejecución de n x log(n), pero ¿existe algún algoritmo que pueda ordenar aún más rápido? En general, no es posible. La mayoría de los algoritmos de ordenación son ordenaciones por comparación, es decir, ordenan una lista simplemente comparando los elementos entre sí. Un algoritmo de ordenación por comparación no puede superar el tiempo de ejecución n x log(n) (en el peor de los casos), ya que n x log(n) representa el número mínimo de comparaciones necesarias para saber dónde colocar cada elemento. Para más detalles, puede consultar estas notas ([PDF](./lect0913.pdf)).

# Clasificación alternativa
Otro método de ordenación, la ordenación por recuento, no requiere comparación. En su lugar, se crea una matriz de enteros cuyo rango de índices cubre todo el rango de valores de la matriz a ordenar. Cada vez que aparece un valor en la matriz original, se incrementa el contador en ese índice. Al final, recorre tu matriz contadora, imprimiendo el valor de cada índice con valor distinto de cero ese número de veces.

## Ejemplo
arr = [1,1,3,2,1]

Todos los valores están en el rango [0...3], así que crea una matriz de ceros, ___result___ = [0,0,0,0].
A continuación se muestran los resultados de cada iteración:

i	arr[i]	result
0	1	    [0, 1, 0, 0]
1	1	    [0, 2, 0, 0]
2	3	    [0, 2, 0, 1]
3	2	    [0, 2, 1, 1]
4	1	    [0, 3, 1, 1]

La matriz de frecuencias es [0,3,1,1]. Estos valores también se pueden utilizar para crear la matriz ordenada: ___sorted___ = [1,1,1,2,3].

### Nota
Para este ejercicio, devuelva siempre una matriz de frecuencias con 100 elementos. El ejemplo anterior muestra sólo los 4 primeros elementos, el resto son ceros.

## Desafío
Dada una lista de enteros, cuente y devuelva el número de veces que cada valor aparece como una matriz de enteros.

## Descripción de la función

Complete la función countingSort en el editor de abajo.

countingSort tiene los siguientes parámetros:

* arr[n]: una matriz de enteros

### Devuelve

* int[100]: un array de enteros

### Formato de entrada

La primera línea contiene un entero ___n___, el número de elementos en ___arr___.
Cada una de las líneas ___n___ siguientes contiene un ___arr[i]___ entero donde ___0 <= i < n___.

### Restricciones

100 <= n <= 10^6

0 <= arr[i] < 100

### Entrada de muestra

    100
    63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33  

### Salida de muestra

    0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2 

## Explicación

Cada uno de los valores resultantes representa el número de veces en que aparece.
