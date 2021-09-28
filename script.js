let totalAmountReceived = 0;
let totalBillingAmount = 0;
let whatsTheChange = 0;
let twoThousandValue = 0;
let fiveHundredValue = 0;
let twoHundredValue = 0;
let oneHundredValue = 0;
let fiftyValue = 0;
let twentyValue = 0;
let tenValue = 0;
let fiveValue = 0;
let twoValue = 0;
let pulseValue = 0;
const twoThousandOutput = document.getElementById("two-thousand-output");
const fiveHundredOutput = document.getElementById("five-hundred-output");
const twoHundredOutput = document.getElementById("two-hundred-output");
const oneHundredOutput = document.getElementById("one-hundred-output");
const fiftyOutput = document.getElementById("fifty-output");
const twentyOutput = document.getElementById("twenty-output");
const tenOutput = document.getElementById("ten-output");
const fiveOutput = document.getElementById("five-output");
const twoOutput = document.getElementById("two-output");
const pulseOutput = document.getElementById("pulse-output");
const errorDiv = document.querySelector("#error-div");

function resetAllOutputs() {
  twoThousandOutput.innerText = 0;
  fiveHundredOutput.innerText = 0;
  twoHundredOutput.innerText = 0;
  oneHundredOutput.innerText = 0;
  fiftyOutput.innerText = 0;
  twentyOutput.innerText = 0;
  tenOutput.innerText = 0;
  fiveOutput.innerText = 0;
  twoOutput.innerText = 0;
  pulseOutput.innerText = 0;
}
function takeData() {
  resetAllOutputs();
  totalAmountReceived = Number(document.getElementById("tmr").value);
  totalBillingAmount = Number(document.getElementById("bill").value);
  if (totalBillingAmount < 0 || totalAmountReceived < 0) {
    errorDiv.innerText = "Enter a positive amount.";
  } else if (totalAmountReceived >= totalBillingAmount) {
    errorDiv.innerText = "";
    whatsTheChange = totalAmountReceived - totalBillingAmount;
    console.log(whatsTheChange);
    if (2000 <= whatsTheChange) {
      while (2000 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 2000;
        twoThousandValue++;
      }
      twoThousandOutput.innerHTML = twoThousandValue;
      twoThousandValue = 0;
    }
    if (500 <= whatsTheChange) {
      while (500 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 500;
        fiveHundredValue++;
      }
      fiveHundredOutput.innerHTML = fiveHundredValue;
      fiveHundredValue = 0;
    }
    if (200 <= whatsTheChange) {
      while (200 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 200;
        twoHundredValue++;
      }
      twoHundredOutput.innerHTML = twoHundredValue;
      twoHundredValue = 0;
    }
    if (100 <= whatsTheChange) {
      while (100 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 100;
        oneHundredValue++;
      }
      oneHundredOutput.innerHTML = oneHundredValue;
      oneHundredValue = 0;
    }
    if (50 <= whatsTheChange) {
      while (50 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 50;
        fiftyValue++;
      }
      fiftyOutput.innerHTML = fiftyValue;
      fiftyValue = 0;
    }
    if (20 <= whatsTheChange) {
      while (20 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 20;
        twentyValue++;
      }
      twentyOutput.innerHTML = twentyValue;
      twentyValue = 0;
    }
    if (10 <= whatsTheChange) {
      while (10 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 10;
        tenValue++;
      }
      tenOutput.innerHTML = tenValue;
      tenValue = 0;
    }
    if (5 <= whatsTheChange) {
      while (5 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 5;
        fiveValue++;
      }
      fiveOutput.innerHTML = fiveValue;
      fiveValue = 0;
    }
    if (2 <= whatsTheChange) {
      while (2 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 2;
        twoValue++;
      }
      twoOutput.innerHTML = twoValue;
      twoValue = 0;
    }
    if (1 <= whatsTheChange) {
      while (1 <= whatsTheChange) {
        whatsTheChange = whatsTheChange - 1;
        pulseValue++;
      }
      pulseOutput.innerHTML = pulseValue;
      pulseValue = 0;
    }
  } else if (totalBillingAmount > totalAmountReceived) {
    errorDiv.innerHTML = "Your resignation is expected by tomorrow. Thank you.";
  }
}
