# Mini-Max Sum
Dado cinco enteros positivos, encuentra los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros.

Luego imprime los valores mínimo y máximo respectivos en una sola línea, separados por un espacio, como dos enteros largos.

## Ejemplo
> arr = [1,3,5,7,9]

El mínimo de la suma es __1 + 3 + 5 + 7 = 16__ y el máximo de la suma es __3 + 5 + 7 + 9 = 24__. 

La función imprime
> 16 24


## Descripción de la función

Completar la función miniMaxSum en el editor debajo.

miniMaxSum tiene los siguientes parámetros:

* arr: un arreglo de __5__ enteros

## Imprimir

Imprime dos enteros separados por un espacio en una línea: la suma mínima y la suma máxima de __4__ de __5__ elementos.

## Formato de entrada

Una sola linea de 5 enteros separados por espacios

## Restricciones
> 1 <= arr[i] <= 10^9

## Formato de salida

Imprime dos enteros largos separados por espacio que representan los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros.

(La salida debe ser mayor a un entero de 32 bit)

## Ejemplo de entrada
> 1 2 3 4 5

## Ejemplo de salida

> 10 14

## Explicación

Los números son __1, 2, 3, 4, y 5__.

Calcular las siguientes sumas usando cuatro de los cinco enteros:

1. Sumar todo excepto __1__, la suma es __2 + 3 + 4 + 5 = 14__.
2. Sumar todo excepto __2__, la suma es __1 + 3 + 4 + 5 = 13__.
3. Sumar todo excepto __3__, la suma es __1 + 2 + 4 + 5 = 13__.
4. Sumar todo excepto __4__, la suma es __1 + 2 + 3 + 5 = 11__.
5. Sumar todo excepto __5__, la suma es __1 + 2 + 3 + 4 = 10__.

__Pistas:__ ¡Cuidado con el desbordamiento de enteros! Use enteros de 64 bits.

#
# Autor
## *DeGsoft*

[YouTube](https://www.youtube.com/@degsoft)

[LinkedIn](https://www.linkedin.com/in/diegoezequielguillen)

[Twitter](https://twitter.com/DeGsoft)

[TikTok](https://www.tiktok.com/@degsoft)

[Instagram](https://www.instagram.com/degsoft)