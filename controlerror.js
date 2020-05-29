function callFunction() {
  operatorion();
}

function operatorion() {
  return 10 + a;
}

function callOperationAsync(cb) {
  setTimeout(() => {
    try {
      return 10 + a;
    } catch (err) {
      cb(err);
    }
  });
}

try {
  callOperationAsync((err) => {
    console.log(err.message);
  });
} catch (err) {
  console.error(err);
}
