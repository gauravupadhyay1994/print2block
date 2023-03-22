function binomialCoeff(n) {
  let coeffArr = new Array(n + 1);
  coeffArr[0] = 1; // Coeff of 0
  coeffArr[n] = 1; //coeff of n
  let k = 1;
  while (k <= Math.floor(n / 2)) {
    let res = 1;
    for (let i = 0; i < k; i++) {
      res *= n - i;
      res /= i + 1;
    }
    coeffArr[k] = res;
    coeffArr[n - k] = res;
    k++;
  }

  return coeffArr;
}

function expandBinomial(n) {
  if (n == 0) {
    return "1 ";
  }
  const coeffArr = binomialCoeff(n);
  let result = "";
  for (let i = n; i > 0; i--) {
    let term = "";
    if (coeffArr[i] !== 1) {
      term += coeffArr[i].toString();
    }
    if (i > 1) {
      term += "x^" + i.toString();
    } else {
      term += "x";
    }
    if (result !== "") {
      result += " + ";
    }
    result += term;
  }
  return result + " + 1";
}

function expand() {
  const n = parseInt(document.getElementById("n").value);
  if (isNaN(n) || n < 0 || n > 50) {
    document.getElementById("result").innerHTML = "";
    alert("Please enter a number between 0 and 50. Both included");
    return;
  }
  const result = expandBinomial(n);
  document.getElementById("result").innerHTML = "(x + 1)^" + n + " = " + result;
}
