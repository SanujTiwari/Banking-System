let balance = 0;
const transactions = [];

const amountInput = document.getElementById("amount");
const balanceDisplay = document.getElementById("balanceDisplay");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const transactionList = document.getElementById("transactionList");

function updateBalance() {
  balanceDisplay.textContent = `$${balance.toFixed(2)}`;
}

function addTransaction(type, amount) {
  transactions.push({ type, amount });
  displayTransactions();
}

function displayTransactions() {
  transactionList.innerHTML = "";
  transactions.forEach((transaction) => {
    const li = document.createElement("li");
    li.className = `transaction ${transaction.type.toLowerCase()}`;
    li.textContent = `${transaction.type}: $${transaction.amount.toFixed(2)}`;
    transactionList.appendChild(li);
  });
}

depositBtn.addEventListener("click", function () {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  balance += amount;
  addTransaction("Deposit", amount);
  updateBalance();
  amountInput.value = "";
});

withdrawBtn.addEventListener("click", function () {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  if (amount > balance) {
    alert("Insufficient balance");
    return;
  }

  balance -= amount;
  addTransaction("Withdraw", amount);
  updateBalance();
  amountInput.value = "";
});

updateBalance();