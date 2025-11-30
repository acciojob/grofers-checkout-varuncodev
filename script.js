const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 const priceCells = document.querySelectorAll(".price");

  // Calculate total
  let total = 0;
  priceCells.forEach(cell => {
    total += parseFloat(cell.textContent);
  });

  // Remove existing total row if any
  const existingTotal = document.getElementById("ans");
  if (existingTotal) existingTotal.remove();

  // Select the table
  const table = document.querySelector("table");

  // Create a new row for total
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row"); // optional for styling

  // Create a single cell spanning both columns
  const totalCell = document.createElement("td");
  totalCell.id = "ans"; // So Cypress or tests can find it
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;

  // Append the cell to the row, and the row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// Attach event listener to the button
getSumBtn.addEventListener("click", getSum);