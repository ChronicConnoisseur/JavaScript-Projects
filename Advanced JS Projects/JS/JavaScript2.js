function validateForm() {
  let x = document.forms["myForm"]["fname"].value.trim();
  let y = document.forms["myForm"]["lname"].value.trim();
  if (x === "" || y === "") {
    alert("Name must be filled out");
    return false;
  }
}