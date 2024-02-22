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
  const income_Table =document.getElementById("income_Table");

  let IncomeStorage = localStorage.getItem("income_Table")
    ? JSON.parse(localStorage.getItem("income_Table"))
    :{};

    
}
