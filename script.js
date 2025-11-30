const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceCells = document.querySelectorAll(".price");
  let total = 0;
  priceCells.forEach(cell => {
    total += parseFloat(cell.textContent);
  });

  // Remove existing total row if any
  const existingTotal = document.getElementById("ans");
  if (existingTotal) existingTotal.remove();

  const table = document.querySelector("table");
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.id = "ans"; // Add id so Cypress can find it
  cell.colSpan = 2;
  cell.textContent = total;
  row.appendChild(cell);
  table.appendChild(row);
};