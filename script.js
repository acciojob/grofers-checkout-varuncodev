const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceCells = document.querySelectorAll('.price');

  // Calculate total
  let total = 0;
  priceCells.forEach(cell => {
    total += parseFloat(cell.textContent);
  });

  // Check if total row already exists and remove it
  const existingTotalRow = document.querySelector('.total-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Select the table
  const table = document.querySelector('table');

  // Create a new row for the total
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row'); // optional for styling

  // Create a single cell spanning both columns
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;

  // Append the cell to the row, and row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
  
};

getSumBtn.addEventListener("click", getSum);

