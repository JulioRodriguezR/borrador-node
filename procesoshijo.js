var { exec, spawn } = require("child_process");

exec("node controlerror.js", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log("run srcipt...");
  console.log(stdout);
});

let child = spawn("dir", [], { shell: true });

child.stdout.on("data", (data) => {
  console.log("spawn dir...");
  console.log(data.toString());
});

child.on("exit", () => {
  console.log("end process...");
  console.log(child.killed);
});
