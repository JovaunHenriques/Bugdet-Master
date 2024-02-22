function openTab(evt, tabName) {
  var i, tabContent, tabButton;
  tabContent = document.getElementsByClassName("tab");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButton = document.getElementsByClassName("tabButton");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function validation(){
  var inputs = document.querySelectorAll('input');

  // Regular expression to check for special characters
  var specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  // Loop through each input element
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    // Check if input type is "number"
    if (input.type === 'number') {
      // Check if the value is not a number
      if (isNaN(input.value)) {
        alert('Please enter a valid number for ' + input.name);
        return false;
      }
    } else if (input.type === 'text') {
      // Check if the value contains special characters
      if (specialCharsRegex.test(input.value)) {
        alert('Special characters are not allowed for ' + input.name);
        return false;
      }
    }
  }

  // If all validations pass, return true
  return true;
}


function submitForm() {
  console.log('submitForm');
  // Get form data
  let name = document.getElementById("incomeSoure").value;
  let hoursWorked = document.getElementById("hoursWorked").value;
  let income = document.getElementById("incomeAmount").value;

  // Create an object to hold the income data
  var incomeData = {
    hoursWorked: hoursWorked,
    incomeAmount: incomeAmount,
    incomeFrequency: incomeFrequency
};

// Get existing income data from localStorage or initialize an empty array
var existingIncomeData = JSON.parse(localStorage.getItem('income_Table')) || [];

// Add new income data to the array
existingIncomeData.push(income_Table);

// Save the updated income data back to localStorage
localStorage.setItem('income_Table', JSON.stringify(existingIncomeData));

// Update the table on the right side of the webpage
updateIncomeTable(existingIncomeData);
}

// Function to update the income table
function updateIncomeTable(incomeDataArray) {
// Get the table element
var table = document.getElementById('incomeTableBody');

// Clear existing table rows
table.innerHTML = '';

// Loop through the income data array and add rows to the table
incomeDataArray.forEach(function(incomeData) {
    var row = table.insertRow();

    // Insert cells with income data
    var hoursCell = row.insertCell(0);
    hoursCell.textContent = incomeData.hoursWorked;

    var amountCell = row.insertCell(1);
    amountCell.textContent = incomeData.incomeAmount;

    var frequencyCell = row.insertCell(2);
    frequencyCell.textContent = incomeData.incomeFrequency;
});
}


