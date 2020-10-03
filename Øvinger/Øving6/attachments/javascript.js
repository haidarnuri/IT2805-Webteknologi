function tax(){
  let income = document.getElementById("#income");
  let wealth = document.getElementById("#Wealth");
  let tax = 0.35*income + 0.25*wealth;
  document.getElementById("#Tax").innerHTML = tax;
}
