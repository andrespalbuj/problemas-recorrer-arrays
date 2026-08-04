// Ejercicio 1: Puntuaciones de natación
const puntuaciones = [8, 9, 7, 10, 9];
let sumaPuntuaciones = 0;

for (let i = 0; i < puntuaciones.length; i++) {
    sumaPuntuaciones += puntuaciones[i];
}

const promedioNatacion = sumaPuntuaciones / puntuaciones.length;
console.log("Promedio de natación:", promedioNatacion); // 8.6
