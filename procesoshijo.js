/*
    Proceso es la ejecución de algo(programa, commando, etc) que terminara en un tiempo finito.

    Cuando se ejecuta un programa estos corren sobre la terminal y cuando necesitan crear un nuevo proceso crean una nueva terminal(Parent shell).

    Node funciona a nivel SO creando child shell en los que es posible ejecutar cualquier instrucción.
*/

var { exec, spawn } = require("child_process");

// exec("node controlerror.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log("run srcipt...");
//   console.log(stdout);
// });

let child = spawn("dir", [], { shell: true });

child.stdout.on("data", (data) => {
  console.log("spawn dir...");
  console.log(data.toString());
});

child.on("exit", () => {
  // una vez que se haya desconectado totalmente del event loop
  console.log("end process...");
  console.log(child.killed);
});

// Escuchar excepción
process.on("uncaughtException", (err, from) => {
  console.error("Error in code");
  console.error(err);
});
