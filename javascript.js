const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_Menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtn.classList = isOpen
    ?'fa-soild fs-xmark'
    :'fa-solid fa-bars'
}
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