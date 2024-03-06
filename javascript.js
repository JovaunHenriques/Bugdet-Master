// - ${incomeStream}
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

function validation() {
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
  const incomeTab = document.getElementById("incomeTab");
  const expensesTab = document.getElementById("expensesTab");
  const loanTab = document.getElementById("loanTab");

  const incomeData = getDataFromTab(incomeTab);
  const expensesData = getDataFromTab(expensesTab);
  const loanData = getDataFromTab(loanTab);

  if (incomeData && expensesData && loanData) {
    saveDataToLocalStorage(incomeData, expensesData, loanData);
    publishToTable(incomeData, expensesData, loanData);
    clearForm();
  }
}
function getDataFromTab(tab) {
  const formData = {};
  const inputs = tab.querySelectorAll('input, select');
  inputs.forEach(input => {
    formData[input.name] = input.value;
  });
  return formData;
}

function clearForm() {
  const form = document.getElementById("tabbed_Form");
  form.reset();
}

function saveDataToLocalStorage(incomeData, expensesData, loanData) {
  const data = {
    income: incomeData,
    expenses: expensesData,
    loan: loanData
  };
  localStorage.setItem("form_data", JSON.stringify(data));
}

function loadAndPublishDataFromLocalStorage() {
  const storedData = localStorage.getItem("form_data");
  if (storedData) {
    const { income, expenses, loan } = JSON.parse(storedData);
    publishToTable(income, expenses, loan);
  }
}

function publishToTable(incomeData, expensesData, loanData) {
  const tableElement = document.getElementById("income_table");
  const row = tableElement.insertRow();

  const incomeCell = row.insertCell();
  incomeCell.textContent = Object.values(incomeData).join(" - ");

  const expensesCell = row.insertCell();
  expensesCell.textContent = Object.values(expensesData).join(" - ");

  const loanCell = row.insertCell();
  loanCell.textContent = Object.values(loanData).join(" - ");
}

loadAndPublishDataFromLocalStorage();

function calculateTotalIncome() {
  //Get value from inputs fields
  const incomeAmount = parseFloat(document.getElementById('incomeAmount').value) || 0;
  const hoursWorked = parseFloat(document.getElementById('hoursWorked').value) || 0;
  const frequency = document.getElementById('frequency').value;

  let weeksPerYear;
  switch (frequency) {
    case 'Hourly':
      weeksPerYear = 52; //Assuming 52 weeks in a year
      break;
    case 'Day':
      weeksPerYear = 5 * 52; // Assuming 5 working days per week and 52 weeks in a year
      break;
    case 'Week':
      weeksPerYear = 52; // Assuming 52 weeks in a year
      break;
    case 'Bi-weekly':
      weeksPerYear = 26; // Assuming 26 bi-weekly pay periods in a year
      break;
    case 'Monthly':
      weeksPerYear = 12; // Assuming 12 months in a year
      break;
    case 'Quarter':
      weeksPerYear = 4; // Assuming 4 quarters in a year
      break;
    case 'Yearly':
      weeksPerYear = 1; // Only one pay period in a year
      break;
    default:
      weeksPerYear = 52; // Default to weekly frequency
  }
  // Calculate total income
  const totalIncome = incomeAmount * hoursWorked * weeksPerYear;
  
  // Display total income
  document.getElementById('totalIncome').textContent = totalIncome.toFixed(2); // Displaying total income up to 2 decimal places
}
// let incomeStorage = localStorage.getItem("income_Table")
//   ? JSON.parse(localStorage.getItem("income_Table"))
//   : [];

// const listBuilder = (list,text) => {
//   const results = document.createElement("li");
//   list.innerHTML = text + '<button onclick="deleteNote(this)">x</button>';
//   list.appendChild(results);
// };