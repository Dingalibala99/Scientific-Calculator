function sin() {
  let display = document.calculator.display.value;

  if (display === "" || isNaN(display)) {
    alert("Error: Invalid input");
    clearAll();
    return;
  }

  let degrees = parseFloat(display);
  let radians = degrees * (Math.PI / 180);
  let result = Math.sin(radians);

  document.calculator.display.value = result;
}

function cos() {
  let display = document.calculator.display.value;

  if (display === "" || isNaN(display)) {
    alert("Error: Invalid input");
    clearAll();
    return;
  }

  let degrees = parseFloat(display);
  let radians = degrees * (Math.PI / 180);
  let result = Math.cos(radians);

  document.calculator.display.value = result;
}

function tan() {
  let display = document.calculator.display.value;

  if (display === "" || isNaN(display)) {
    alert("Error: Invalid input");
    clearAll();
    return;
  }

  let degrees = parseFloat(display);

  if (degrees % 180 === 90) {
    alert("Error: Undefined");
    clearAll();
    return;
  }

  let radians = degrees * (Math.PI / 180);
  let result = Math.tan(radians);

  document.calculator.display.value = result;
}

function brackets() {
  let display = document.calculator.display.value;
  let openCount = (display.match(/\(/g) || []).length;
  let closeCount = (display.match(/\)/g) || []).length;

  if (openCount === closeCount || display.slice(-1) === "(") {
    document.calculator.display.value += "(";
  } else if (openCount > closeCount && /\d|\)/.test(display.slice(-1))) {
    document.calculator.display.value += ")";
  }
}

function log() {
  let display = document.calculator.display.value;

  if (display === "" || isNaN(display)) {
    alert("Error: Invalid input");
    clearAll();
    return;
  }

  let result = Math.log10(parseFloat(display));
  document.calculator.display.value = result;
}

function backSpace() {
  let val = document.calculator.display.value;
  let newValue = "";

  for (let i = 0; i < val.length - 1; i++) {
    newValue += val[i];
  }

  document.calculator.display.value = newValue;
}

function square() {
  let val = document.calculator.display.value;
  document.calculator.display.value *= val;
}

function sqrt2() {
  let display = document.calculator.display.value;

  if (display === "" || isNaN(display)) {
    alert("Error: Invalid input");
    clearAll();
    return;
  }

  let num = parseFloat(display);

  if (num < 0) {
    alert("Error: Invalid input");
    clearAll();
    return;
  }

  let result = Math.sqrt(num);
  document.calculator.display.value = result;
}

function number(value) {
  let display = document.calculator.display.value;

  if (display.includes("/") && value === "0") {
    alert("Error: Cannot divide by zero");
    clearAll();
  }

  document.calculator.display.value += value;
}

function clearAll() {
  document.calculator.display.value = " ";
}

function equal() {
  const expression = document.calculator.display.value;
  const result = new Function(`return (${expression})`)();
  document.calculator.display.value = result;
}

module.exports = {
  sin,
  cos,
  tan,
  backSpace,
  square,
  sqrt2,
  number,
  clearAll,
  equal,
  log,
  brackets,
};
