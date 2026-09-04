// Task 2: Calculator JavaScript Engine

let currentInput = "0";
let expression = "";
let history = [];
let isEvaluated = false;

// DOM Elements
const expressionDisplay = document.getElementById("expressionDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scientificPanel = document.getElementById("scientificPanel");
const scientificToggleBtn = document.getElementById("scientificToggleBtn");
const historyDrawer = document.getElementById("historyDrawer");
const historyToggleBtn = document.getElementById("historyToggleBtn");
const closeHistoryBtn = document.getElementById("closeHistoryBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// UI Toggle Handlers
scientificToggleBtn.addEventListener("click", () => {
  const isHidden = scientificPanel.style.display === "none";
  scientificPanel.style.display = isHidden ? "grid" : "none";
  scientificToggleBtn.classList.toggle("active", isHidden);
});

historyToggleBtn.addEventListener("click", () => {
  historyDrawer.classList.add("open");
});

closeHistoryBtn.addEventListener("click", () => {
  historyDrawer.classList.remove("open");
});

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

// Update Displays
function updateDisplay() {
  expressionDisplay.textContent = expression;
  resultDisplay.textContent = currentInput;
}

// Input Handlers
function appendNumber(num) {
  if (isEvaluated) {
    currentInput = num === "." ? "0." : num;
    expression = "";
    isEvaluated = false;
  } else {
    if (num === "." && currentInput.includes(".")) return;
    if (currentInput === "0" && num !== ".") {
      currentInput = num;
    } else {
      currentInput += num;
    }
  }
  updateDisplay();
}

function handleOperator(op) {
  if (isEvaluated) {
    expression = currentInput + " " + op + " ";
    currentInput = "0";
    isEvaluated = false;
  } else {
    if (currentInput !== "0" || expression === "") {
      expression += currentInput + " " + op + " ";
      currentInput = "0";
    } else if (expression !== "") {
      // Change last operator
      expression = expression.slice(0, -3) + " " + op + " ";
    }
  }
  updateDisplay();
}

function clearAll() {
  currentInput = "0";
  expression = "";
  isEvaluated = false;
  updateDisplay();
}

function backspace() {
  if (isEvaluated) {
    clearAll();
    return;
  }
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

function negate() {
  if (currentInput === "0") return;
  if (currentInput.startsWith("-")) {
    currentInput = currentInput.slice(1);
  } else {
    currentInput = "-" + currentInput;
  }
  updateDisplay();
}

function percentage() {
  const num = parseFloat(currentInput);
  if (!isNaN(num)) {
    currentInput = (num / 100).toString();
    updateDisplay();
  }
}

// Scientific Functions
function handleScientific(func) {
  const val = parseFloat(currentInput);
  if (isNaN(val)) return;

  let res = 0;
  switch (func) {
    case "sin": res = Math.sin(val * Math.PI / 180); break;
    case "cos": res = Math.cos(val * Math.PI / 180); break;
    case "tan": res = Math.tan(val * Math.PI / 180); break;
    case "sqrt": res = val < 0 ? "Error" : Math.sqrt(val); break;
    case "pow": res = Math.pow(val, 2); break;
    case "log": res = val <= 0 ? "Error" : Math.log10(val); break;
    case "pi": res = Math.PI; break;
    case "e": res = Math.E; break;
  }

  if (res === "Error") {
    currentInput = "Error";
  } else {
    // Format precision
    currentInput = Number.isInteger(res) ? res.toString() : parseFloat(res.toFixed(8)).toString();
  }
  isEvaluated = true;
  updateDisplay();
}

// Calculate Expression
function calculate() {
  if (expression === "" && !isEvaluated) return;
  const fullExpr = expression + currentInput;
  
  try {
    // Replace visual operators with JS math operators
    const sanitizedExpr = fullExpr
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/−/g, "-");

    const evalResult = eval(sanitizedExpr);
    
    if (!isFinite(evalResult) || isNaN(evalResult)) {
      currentInput = "Error";
    } else {
      const formattedRes = Number.isInteger(evalResult) ? evalResult.toString() : parseFloat(evalResult.toFixed(8)).toString();
      
      // Save History
      addHistory(fullExpr, formattedRes);

      currentInput = formattedRes;
      expression = "";
      isEvaluated = true;
    }
  } catch (err) {
    currentInput = "Error";
  }
  updateDisplay();
}

// History Functions
function addHistory(expr, res) {
  history.unshift({ expr, res });
  renderHistory();
}

function renderHistory() {
  if (history.length === 0) {
    historyList.innerHTML = '<p class="empty-history">No calculation history yet.</p>';
    return;
  }

  historyList.innerHTML = "";
  history.forEach(item => {
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `
      <div class="history-expr">${item.expr} =</div>
      <div class="history-res">${item.res}</div>
    `;
    div.addEventListener("click", () => {
      currentInput = item.res;
      expression = "";
      isEvaluated = false;
      updateDisplay();
      historyDrawer.classList.remove("open");
    });
    historyList.appendChild(div);
  });
}

clearHistoryBtn.addEventListener("click", () => {
  history = [];
  renderHistory();
});

// Event Delegation for Keypad Buttons
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.getAttribute("data-val");
    const action = btn.getAttribute("data-action");

    if (val !== null) {
      if (btn.classList.contains("btn-operator")) {
        handleOperator(val);
      } else {
        appendNumber(val);
      }
      return;
    }

    if (action) {
      switch (action) {
        case "clear": clearAll(); break;
        case "backspace": backspace(); break;
        case "negate": negate(); break;
        case "percent": percentage(); break;
        case "equals": calculate(); break;
        case "sin":
        case "cos":
        case "tan":
        case "sqrt":
        case "pow":
        case "log":
        case "pi":
        case "e":
          handleScientific(action);
          break;
      }
    }
  });
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") appendNumber(e.key);
  if (e.key === ".") appendNumber(".");
  if (e.key === "+") handleOperator("+");
  if (e.key === "-") handleOperator("-");
  if (e.key === "*") handleOperator("*");
  if (e.key === "/") { e.preventDefault(); handleOperator("/"); }
  if (e.key === "Enter" || e.key === "=") { e.preventDefault(); calculate(); }
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") clearAll();
  if (e.key === "%") percentage();
});

// Initial Update
updateDisplay();
