// After login, go to the second page
function gotoSecondPage(event) {
  event.preventDefault();
  window.location.href = "second_page.html";
}

// Deposit
document.querySelector(".deposit_btn").addEventListener("click", () => {
  const currentBalance = getCurrentValue("current-balance");
  const currentDeposit = getCurrentValue("current-deposit");
  const depositInput = getInputValue("deposit-amount");

  const totalDeposit = currentDeposit + depositInput;
  const totalBalance = currentBalance + depositInput;

  setNewValue("current-balance", totalBalance);
  setNewValue("current-deposit", totalDeposit);
});

// Withdraw
document.querySelector(".withdraw_btn").addEventListener("click", () => {
  const withdrawInput = getInputValue("withdraw-amount");
  const currentBalance = getCurrentValue("current-balance");
  const totalBalance = currentBalance - withdrawInput;

  const currentWithdraw = getCurrentValue("current-withdraw");

  const totalWithdraw = currentWithdraw + withdrawInput;

  if (withdrawInput <= currentBalance) {
      setNewValue("current-balance", totalBalance);
      setNewValue("current-withdraw", totalWithdraw);
  }
});

// Utility functions
const setNewValue = (elementId, newValue) => {
  if (newValue >= 0) {
      const element = document.getElementById(elementId);
      element.innerText = newValue.toFixed(2);
  }
};

const getCurrentValue = (elementId) => {
  const element = document.getElementById(elementId);
  return parseFloat(element.innerText);
};

const getInputValue = (inputId) => {
  const element = document.getElementById(inputId);
  const value = parseFloat(element.value);
  element.value = "";
  return value;
};
