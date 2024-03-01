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
  const incomeTable = document.getElementById("income_Table");
  const tabbedForm = document.getElementById("tabbed_Form");
  const inputIncome = document.getElementById("input_income");


  // Convert input vlaues to strings

  let incomeEntry = `${incomeSource} - ${incomeAmount} - ${hoursWorked} - ${incomeFrequency} `;

  // let incomeEntryResults =

incomeStorage.push(incomeEntry);
    localStorage.setItem("income_Table", JSON.stringify(incomeStorage));

  const getResults = JSON.parse(localStorage.getItem("income_Table")) || []; // Ensure getResults is an array
  getResults.forEach((income) => {
    listBuilder(incomeTable, income);
    console.log('getResults')
  });
}


const deleteNote = (btn) => {
  let el = btn.parentNode;
  const index = [...el.parentElement.children].indexOf(el);
  incomeStorage.splice(index, 1);
  localStorage.setItem("income_Table", JSON.stringify(incomeStorage));
  el.remove();
};

let incomeStorage = localStorage.getItem("income_Table")
  ? JSON.parse(localStorage.getItem("income_Table"))
  : [];

const listBuilder = (list,text) => {
  const results = document.createElement("li");
  list.innerHTML = text + '<button onclick="deleteNote(this)">x</button>';
  list.appendChild(results);
};