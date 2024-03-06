let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
}

function Calculate() {
  try {
    let result = eval(outputScreen.value);
    outputScreen.value = result;
  } catch (err) {
    outputScreen.value = "Invalid Input";
  }
}

function Clear() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

function sin() {
  outputScreen.value = Math.sin(outputScreen.value);
}

function cos() {
  outputScreen.value = Math.cos(outputScreen.value);
}

function tan() {
  outputScreen.value = Math.tan(outputScreen.value);
}

function inverseSin() {
  outputScreen.value = Math.asin(outputScreen.value);
}

function inverseCos() {
  outputScreen.value = Math.acos(outputScreen.value);
}

function inverseTan() {
  outputScreen.value = Math.atan(outputScreen.value);
}

function exponentiation() {
  outputScreen.value = Math.pow(outputScreen.value, 2);
}

function squareRoot() {
  outputScreen.value = Math.sqrt(outputScreen.value);
}

function logarithm() {
  outputScreen.value = Math.log(outputScreen.value);
}

