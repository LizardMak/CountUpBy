window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", calculate);
})

function calculate(e) {
  e.preventDefault();
  const countBy = parseInt(document.getElementById("countBy").value);
  const countTo = parseInt(document.getElementById("countTo").value);
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
  return results;
  }
}