# Plus Minus
Dado un array de enteros, calcula las proporciones de sus elementos que son positivos, negativos y cero.
Imprime el valor decimal de cada fracción en una nueva línea con __6__ lugares decimales.

__Nota__:
Este desafío presenta problemas de precisión.
Los casos de prueba están escalados a seis lugares decimales, aunque se aceptan respuestas con un error absoluto de hasta __10^-4__.

## Ejemplo
__arr = [1,1,0,-1,-1]__

Hay __n = 5__ elementos, dos positivos, dos negativos y uno cero.
Sus proporciones son __2/5 = 0.400000__, __2/5 = 0.400000__ y __1/5 = 0.200000__. 
Los resultados se imprimen como:
```
0.400000
0.400000
0.200000
```

## Descripción de la función

Completa la función plusMinus en el editor de abajo.

plusMinus tiene el siguiente(s) parámetro(s):

* int arr[n]: un arreglo de enteros

## Imprimir

Imprime las proporciones de valores positivos, negativos y cero en el arreglo. Cada valor debe imprimirse en una línea separada con dígitos después del decimal. La función no debe devolver ningún valor.

## Formato de Entrada

La primera línea contiene un entero, __n__, el tamaño del arreglo.
La segunda línea contiene __n__ enteros separados por espacios que describen __arr[n]__.

## Restricciones

```
0 < n <= 100
-10 <= arr [i] <= 100
```

## Formato de Salida

__Imprime__ las siguientes __3__ líneas, cada una con __6__ decimales:

1. proporción de valores positivos
2. proporción de valores negativos
3. proporción de ceros

## Entrada de Ejemplo

```
STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```

## Salida de Ejemplo

```
0.500000
0.333333
0.166667
```

## Explicación

Hay 3 números positivos, 2 números negativos y 1 cero en el arreglo.
Las proporciones de ocurrencia son positivos: __3/6 = 0.500000__, negativos: __2/6 = 0.33333__ y ceros: __1/6 = 0.166667__.

#
# Autor
## *DeGsoft*

[YouTube](https://www.youtube.com/@degsoft)

[LinkedIn](https://www.linkedin.com/in/diegoezequielguillen)

[Twitter](https://twitter.com/DeGsoft)

[TikTok](https://www.tiktok.com/@degsoft)

[Instagram](https://www.instagram.com/degsoft)