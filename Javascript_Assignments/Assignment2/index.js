var isNameValid,
  isEmailValid,
  isMobileNoValid;
var serialNo = 1;
var nameInput, emailInput, mobileNoInput;
var regexForName = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/i;
var regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var regexForMobileNo = /^\d{10}$/;
function util(event) {
  //   event.preventDefault();
  isNameValid = false;
  isEmailValid = false;
  isMobileNoValid = false;
  nameInput = document.getElementById("name").value;
  emailInput = document.getElementById("email").value;
  mobileNoInput = document.getElementById("mobileno").value;
  validateForm();
}
function validateForm() {
  if (nameInput.length && regexForName.test(nameInput)) {
    isNameValid = true;
    document.getElementById("invalid-name").style.display = "none";
    document.getElementById("valid-name").style.display = "block";
  } else {
    isNameValid = false;
    document.getElementById("invalid-name").style.display = "block";
    document.getElementById("valid-name").style.display = "none";
  }
  if (emailInput.length && regexForEmail.test(emailInput)) {
    isEmailValid = true;
    document.getElementById("invalid-email").style.display = "none";
    document.getElementById("valid-email").style.display = "block";
  } else {
    isEmailValid = false;
    document.getElementById("invalid-email").style.display = "block";
    document.getElementById("valid-email").style.display = "none";
  }
  if (mobileNoInput.length == 0 || regexForMobileNo.test(mobileNoInput)) {
    isMobileNoValid = true;
    document.getElementById("invalid-mobileno").style.display = "none";
    document.getElementById("valid-mobileno").style.display = "block";
  } else {
    isMobileNoValid = false;
    document.getElementById("invalid-mobileno").style.display = "block";
    document.getElementById("valid-mobileno").style.display = "none";
  }
//   console.log(
//     nameInput +
//       " " +
//       emailInput +
//       " " +
//       mobileNoInput +
//       " " +
//       isEmailValid +
//       " " +
//       isMobileNoValid +
//       " " +
//       isNameValid
//   );
  if (isNameValid && isEmailValid && isMobileNoValid) {
    localStorage.setItem(serialNo + "name", nameInput);
    localStorage.setItem(serialNo + "email", emailInput);
    localStorage.setItem(serialNo + "mobileno", mobileNoInput);
    displayTable()
  }
}
function displayTable() {
    var table = document.getElementById("table-body");
    var tHead = document.getElementById("table-head");
    let row = document.createElement("tr");
    if(serialNo == 1) {
      let head = document.createElement("tr");
      head.innerHTML = `<tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
    </tr>`;
    tHead.append(head);
    }
    // console.log(localStorage);
    row.innerHTML = `<tr>
    <th scope="row">${serialNo+"."}</th>
    <td>${localStorage.getItem(serialNo + "name")}</td>
    <td>${localStorage.getItem(serialNo + "email")}</td>
    <td>${localStorage.getItem(serialNo + "mobileno")===null?"":localStorage.getItem(serialNo + "mobileno")}</td>
  </tr>`;
    table.append(row);
    serialNo++;
}
