# Recorrer arrays en JavaScript

Este repositorio contiene ejercicios separados en `ex1.js`, `ex2.js`, `ex3.js` y `ex3b.js`.

## ¿Cómo recorrer un array?

```
// La variable array de la que queremos obtener información
let movimientos = [10, -5 , 1];

// Se define FUERA del bucle. Variable para acumular el saldo
let saldoFinalBucle = 0;

for (let i=0; i<movimientos.length; i++) {
    // Iteramos por cada una de las posiciones del array para ir acumulando en la variable saldoFinalBucle los ingresos y retiradas de mis movimientos bancarios
    saldoFinalBucle = saldoFinalBucle + movimientos[i];
}

console.log("Saldo final del bucle: ", saldoFinalBucle);


/** Contar ovejas */

const animales = ["🐶", "🐑", "🐱"];

let contadorOvejas = 0; 

for (let i = 0; i < animales.length; i++) {
    if (animales[i] == "🐑") {
        contadorOvejas++; // contadorOvejas = contadorOvejas + 1;
    }
}

console.log("Hay " + contadorOvejas + " ovejas");
```

## Ejercicio 1: Puntuaciones de natación

El nadador olímpico Pepe necesita calcular su promedio después de una ronda de competiciones. Recorre su lista de puntuaciones y averigua cuánto vale su media.

![](https://cdn.vectorstock.com/i/1000v/56/47/surf-judge-score-silhouettes-vector-60795647.jpg)

Resultado esperado:

- `8.6`

## Ejercicio 2: Ingresos y retiradas de un banco

El banco de la ciudad está en modo detective: cada movimiento puede ser ingreso o retirada. Recorre el extracto, suma los ingresos y suma las retiradas por separado.

Resultado esperado:

- Ingresos: `1050`
- Retiradas: `-195`

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVxqIC3z5s4FfLrpBGe51n9DTiiPrV1ym5lA&s)

## Ejercicio 3: Comparar respuestas tipo test (versión A — `ex3.js`)

La prueba del profesor Vega tiene varias respuestas correctas. Recorre las respuestas del alumno y cuenta cuántas están bien y cuántas están mal.

![](https://fotografias-2.larazon.es/clipping/cmsimages02/2023/05/01/79018DBD-FEEE-4FDF-9475-72CE92F01CA6/tres-trucos-aprobar-examenes-tipo-test-que-han-hecho-virales-tiktok_98.jpg?crop=4242,2387,x0,y221&width=1900&height=1069&optimize=low&format=webply)

Resultado esperado:

- Aciertos: `3`
- Fallos: `1`

## Ejercicio 3b: Comparar respuestas tipo test con respuestas en blanco (`ex3b.js`)

Versión en la que el alumno puede dejar preguntas en blanco. Recorre las respuestas y cuenta aciertos, fallos y respuestas no contestadas.

![](https://fotografias-2.larazon.es/clipping/cmsimages02/2023/05/01/79018DBD-FEEE-4FDF-9475-72CE92F01CA6/tres-trucos-aprobar-examenes-tipo-test-que-han-hecho-virales-tiktok_98.jpg?crop=4242,2387,x0,y221&width=1900&height=1069&optimize=low&format=webply)

Resultado esperado:

- Aciertos: `2`
- Fallos: `1`
- No contestadas: `2`
