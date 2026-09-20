// Ejercicio 3: Comparar respuestas tipo test
const respuestasCorrectas = ["A", "B", "C", "D", "A"];
const respuestasAlumno = ["A", "D", "C", "D", "B"];
let aciertos = 0;
let fallos = 0;

for (let i = 0; i < respuestasCorrectas.length; i++) {
   // ¿Cómo sabemos si una respuesta es correcta o incorrecta?
   if (respuestasAlumno[i] === respuestasCorrectas[i]) {//Cuando la repuesta del alumno es igual a la correcta, entonces es un acierto

      aciertos++;//Aumento la variable aciertos en 1
      
   } else {
      fallos= fallos + 1;//En caso contrario, aumento la variable fallos en 1
   }
}

console.log("Aciertos:", aciertos); // 3
console.log("Fallos:", fallos); // 2
