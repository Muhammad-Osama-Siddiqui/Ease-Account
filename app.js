   // this version normally using function
    //Devare Row
  function del(entry) {
var i = entry.parentNode.parentNode.rowIndex;
  document.getElementById("result").deleteRow(i);
  document.getElementById("result").deleteRow(i);
}
    //Add raw and calculate
function addEntry() {
    //var for input data calculated
var entryDr = document.getElementById("entry1").value;
    entryDr = entryDr.toLowerCase().replace(" ", "");
var amount = document.getElementById("amount").value;
    amount = +amount;
var entryCr = document.getElementById("entry2").value;
   entryCr=	entryCr.toLowerCase().replace(" ", "");
		  //var for add information 
var mS = document.getElementById("M/S").value;

    //var for get date input
var date = document.getElementById("date").value;
var dates = new Date(date);
var year = dates.getFullYear();
var currentMonth = dates.getMonth();
var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var nameOfCurrentMonth = arr[currentMonth];
var day = dates.getDate();
//document.getElementById("s").innerHTML = "<input type='button' value='hide' onClick='show()'>";
// var for add date and M/S
var d = document.getElementById("yer");
    d.innerText = year;
var may = document.getElementById("ms");
may.innerText = mS;
if(mS.length > 0 ) { 
    document.getElementById("M/S").disabled = true;
     }
else{document.getElementById("M/S").disabled = true;
}
//var to show result
var table = document.getElementById("result");
// var for insert row and cell and make column 
  var row = table.insertRow(-1);
  var cell = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var row1 = table.insertRow(-1);
  var cellA = row1.insertCell(0);
  var cell4 = row1.insertCell(1);
  var cell5 = row1.insertCell(2);
  var cell6 = row1.insertCell(3);
  var cellD = row.insertCell(4);
    cell.innerHTML = `${nameOfCurrentMonth}, ${day}`;
    cell1.innerHTML = entryDr;
    cell2.innerHTML = amount;
		 cell3.innerHTML = " ";
		 cell4.innerHTML = ` &nbsp &nbsp  ${entryCr}`;
		 cell5.innerHTML = " ";
		 cell6.innerHTML = amount;
		 cellA.innerHTML = "" ;
		 cellD.innerHTML = "<input type='button' value='❎' onClick='del(this)' id='remov'>";
		document.forms[1].reset();
		 }



