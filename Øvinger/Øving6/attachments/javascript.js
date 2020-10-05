function taxCalculation(){
  let incomeValue = document.getElementById("Income").value;
  let wealthValue = document.getElementById("Wealth").value;
  let tax = 0.35*incomeValue + 0.25*wealthValue;
  document.getElementById("Tax").value = tax.toFixed();
}
