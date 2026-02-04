let balance = 0;

function deposit() {
  let amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  balance += amount;
  updateBalance();
  addHistory(`Deposited ₹${amount}`);
}

function withdraw() {
  let amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  if (amount > balance) {
    alert("Insufficient balance");
    return;
  }

  balance -= amount;
  updateBalance();
  addHistory(`Withdrawn ₹${amount}`);
}

function updateBalance() {
  document.getElementById("balance").innerText = balance;
  document.getElementById("amount").value = "";
}

function addHistory(message) {
  let li = document.createElement("li");
  li.innerText = message;
  document.getElementById("history").appendChild(li);
}
