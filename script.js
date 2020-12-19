//challenge Your age in days.

function ageInDays() {
  var birthYear = prompt("Enter your birth year: ");
  var current = prompt("Enter your current year: ");
  var areyousure = confirm("are you sure: ");
  var ageInDays = (2020 - birthYear) * 365;

  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDays + " days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);

  //   console.log(ageInDays);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
