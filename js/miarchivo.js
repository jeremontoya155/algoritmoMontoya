function funcion() {
  let opciones = `Ingrese :
                (1) Para sumar
                (2) Para restar
                (3) Para Multiplicar
                (4) Para dividir(En este caso no ingrese un b=0)
                (5) Para Salir 
                (REVISAR SALIDAS EN LA CONSOLA UNA VEZ FINALIZADA LAS EJECUCIONES) `;
  let opcion = parseInt(prompt(opciones));
  let ban = true;
  while (ban) {
    if (opcion > 0 && opcion < 4) {
      let a = parseInt(prompt("Ingrese un numero"));
      let b = parseInt(prompt("Ingrese segundo numero"));

      switch (opcion) {
        case 1:
          console.log(a + b);
          break;
        case 2:
          console.log(a - b);
          break;
        case 3:
          console.log(a * b);
          break;
        case 4:
          console.log(a / b);
          break;
      }

      opcion = parseInt(prompt(opciones));
    } else if (opcion == 5) {
      ban = false;
      alert("Gracias por usar el programa");
    } else {
      alert("Opcion Incorrecta");
      opcion = prompt(opciones);
    }
  }
}
