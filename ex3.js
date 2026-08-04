// Ejercicio 3: Comparar respuestas tipo test
const respuestasCorrectas = ["A", "B", "C", "D", "A"];
const respuestasAlumno = ["A", "", "C", "D", "B"];
let aciertos = 0;
let fallos = 0;
let sinContestar = 0;

for (let i = 0; i < respuestasCorrectas.length; i++) {
    if (respuestasAlumno[i] === "") {
        sinContestar += 1;
    } else if (respuestasAlumno[i] === respuestasCorrectas[i]) {
        aciertos += 1;
    } else {
        fallos += 1;
    }
}

console.log("Aciertos:", aciertos); // 3
console.log("Fallos:", fallos); // 1
console.log("Sin contestar:", sinContestar); // 1
