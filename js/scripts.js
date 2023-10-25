window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", ui);
  
})

function calculate(countTo, countBy) {
  if (countBy > countTo) {
    return "error";
  } else {
  let result = 0;
  let results = [];
  for (let index = 0; index <= countTo - countBy; index += countBy) {
    result += countBy;
    results.push(result);
  }
  console.log(results);
  const resultsString = results.toString();
  return resultsString;
  }
}


function ui(e) {
  e.preventDefault();
  const countBy = parseInt(document.getElementById("countBy").value);
  const countTo = parseInt(document.getElementById("countTo").value);
  let finalResult = calculate(countTo, countBy);
  let h2 = document.getElementById("results")
  if (finalResult === "error") {
    h2.className = "error";
    h2.innerText = "ERROR: INVALID INPUTS";
  } else {
    h2.className = "normal";
    h2.innerText = finalResult;
  }

}