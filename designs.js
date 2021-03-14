// Select color input
const colorPicker = document.getElementById('colorPicker');

// When size is submitted by the user, call makeGrid()
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', makeGrid);

function makeGrid(event) {
  // Prevent default user-agent behavior (do NOT modify URL or reload)
  event.preventDefault();

  // Get size input
  const rows = document.getElementById('inputHeight').value;
  const cells = document.getElementById('inputWidth').value;

  const pixelCanvas = document.getElementById('pixelCanvas');
  pixelCanvas.innerHTML = '';

  for (let row = 0; row < rows; row++) {
    const newRow = document.createElement('tr');
    for (let cell = 0; cell < cells; cell++) {
      const newCell = document.createElement('td');
      newCell.addEventListener('click', paintCell);
      newRow.appendChild(newCell);
    }
    pixelCanvas.appendChild(newRow);
  }
}

function paintCell(event) {
  event.target.style.backgroundColor = colorPicker.value;
}
