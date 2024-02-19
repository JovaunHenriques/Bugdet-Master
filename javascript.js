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

function submitForm() {
  // Implement form submission logic here
  // You can use JavaScript to handle form submission
  console.log("Form submitted");
}

// Function to Calculate Wage


// function calculateIncome(incomeAmount, incomeFrequency) {
  
// const incomeAmount = parseFloat(document.getElementById('incomeAmount').value);
// const incomeFrequency = parseFloat(document.getElementById('incomeFrequency').value);

//   return incomeAmount * incomeFrequency;
// }



//   const noteForm = document.getElementById("note-form");
// const noteInput = document.getElementById("note-input");
// const noteSubmit = document.getElementById("note-submit");
// const notes = document.getElementById("notes");

// let notesStorage = localStorage.getItem("notes")
//   ? JSON.parse(localStorage.getItem("notes"))
//   : [];