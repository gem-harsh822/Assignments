(function () {
  var c = 0; 
  var data = new Array();
  data.push(["Name", "Age", "DOB","Email","Company"]);
  data.push(["Harsh", 21, "15/04/2001","abc@gmail.com","XYZ"]);
  data.push(["sdfgfs", 42, "25/04/2001","abc@gmail.com","XYZ"]);
  data.push(["Harsh", 21, "15/04/2001","abc@gmail.com","XYZ"]);
  data.push(["Harsh", 21, "15/04/2001","abc@gmail.com","XYZ"]);
  data.push(["Harsh", 21, "15/04/2001","abc@gmail.com","XYZ"]);
  var table = document.createElement("table");
  for (var i = 0; i < 6; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var text1 = document.createTextNode(data[i][0]);
    var text2 = document.createTextNode(data[i][1]);
    var text3 = document.createTextNode(data[i][2]);
    var text4 = document.createTextNode(data[i][3]);
    var text5 = document.createTextNode(data[i][4]);
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
  }
  document.body.appendChild(table);
})();
