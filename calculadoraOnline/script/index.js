const numbersBtn = document.querySelectorAll(".number");
const operatorsBtn = document.querySelectorAll(".operatorsBtn");
const clearAllBtn = document.querySelector("#clearBtn");
const deleteNumberBtn = document.querySelector("#deleteBtn");
const resultBtn = document.querySelector("#equalBtn");
// const plusMinusBtn = document.querySelector("#plusMinus");
const previoustOperationText = document.querySelector("#previoustOperation");
const currentOperationText = document.querySelector("#currentOperation");

class calc {
  constructor(previoustOperationText, currentOperationText) {
    this.previoustOperationText = previoustOperationText;
    this.currentOperationText = currentOperationText;
    this.clearAll();
  }

  clearAll() {
    this.currentOperation = "";
    this.previoustOperation = "";
    this.operators = undefined;
  }

  deleteLastNumber() {
    this.currentOperation = this.currentOperation.slice(0, -1)
  }

  addNumber(number) {
    if (number === "." && this.currentOperation.includes(".")) { 
        return
    }
    this.currentOperation += number.toString()
  }

  operatorionSelect(operators) {
    if(this.currentOperation === '') {
      return;
    }

    if(this.previoustOperation !== ''){
      this.execOperation()
    }
    this.operators = operators
    this.previoustOperation = this.currentOperation
    this.currentOperation = ''
  }

  execOperation() {
    let calculateOperation
    let previous = parseFloat(this.previoustOperation);
    let current = parseFloat(this.currentOperation);
    if(isNaN(previous) || isNaN(current)){
      return
    }

    switch(this.operators){
      case '+':
        calculateOperation = previous + current
        break

        case '-':
        calculateOperation = previous - current
        break

        case 'x':
        calculateOperation = previous * current
        break

        case '÷':
        calculateOperation = previous / current
        break

        default:
          return
    }
    this.currentOperation = calculateOperation
    this.operators = undefined
    this.previoustOperation = ''
  }

  updateDisplay() {
    this.currentOperationText.innerText = this.currentOperation;
    this.previoustOperationText.innerText = this.previoustOperation;
  }
}

//-------------------------------------------
const calculator = new calc(previoustOperationText, currentOperationText);

numbersBtn.forEach((elementValue) => {
    elementValue.addEventListener("click", () => {
    calculator.addNumber(elementValue.innerText);
    calculator.updateDisplay();
  });
});

operatorsBtn.forEach((elementValue) => {
    elementValue.addEventListener("click", () => {
      calculator.operatorionSelect(elementValue.innerText);
      calculator.updateDisplay();
    });
  });

  resultBtn.addEventListener('click', () => {
    calculator.execOperation();
    calculator.updateDisplay();
  })

  clearAllBtn.addEventListener('click', () => {
    calculator.clearAll();
    calculator.updateDisplay();
  })

  deleteNumberBtn.addEventListener('click', () => {
    calculator.deleteLastNumber();
    calculator.updateDisplay();
  })