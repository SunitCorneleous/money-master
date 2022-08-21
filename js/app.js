function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseFloat(element.value);

  element.value = "";

  return elementValue;
}

function setElementInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function getElementInnerTextById(elementId) {
  const element = document.getElementById(elementId);
  const value = parseFloat(element.innerText);

  return value;
}

// calculate all expenses and show left balance
document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeAmount = getElementValueById("income-amount");
  const foodCost = getElementValueById("food-cost");
  const rentCost = getElementValueById("rent-cost");
  const clothesCost = getElementValueById("clothes-cost");

  const totalExpenses = foodCost + rentCost + clothesCost;

  const balanceLeft = incomeAmount - totalExpenses;

  console.log("Income: ", incomeAmount);
  console.log("Total Expenses: ", totalExpenses);
  console.log("Balance left: ", balanceLeft);

  setElementInnerTextById("total-expenses", totalExpenses);
  setElementInnerTextById("total-balance", balanceLeft);
});

// calculate savings and remaining balance
document.getElementById("save-btn").addEventListener("click", function () {
  // get and set savings amount
  const totalExpense = getElementInnerTextById("total-expenses");
  const balanceLeft = getElementInnerTextById("total-balance");
  const savings = getElementValueById("savings-number");

  const savingAmount = (totalExpense + balanceLeft) * (savings / 100);

  setElementInnerTextById("saving-amount", savingAmount);

  //   set remaining balance
  const remainingBalance = balanceLeft - savingAmount;
  setElementInnerTextById("remaining-balance", remainingBalance);
});
