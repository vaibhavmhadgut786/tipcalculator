let calculate = document.querySelector("#calculate");

calculate.addEventListener("click", () => {
  let amount = document.querySelector("#bill_amount").value;
  let perc = document.querySelector("#tip_percents").value;
  let people = document.querySelector("#people_sharing").value;

  if (amount === "" || perc == null || people == 0) {
    alert("Please Enter values.");
    return;
  }

  let total = (amount * perc) / people;
  total = total.toFixed(2);

  document.getElementById("tip").innerHTML = total;
});
