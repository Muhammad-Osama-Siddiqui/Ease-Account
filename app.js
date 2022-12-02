// this version add classes, improve functionality and bug fixes
// this is new
class Account {
    constructor (mS,entryDr,entryCr, positive, negative){
    //input data
  this.mS = document.getElementById("M/S");
  this.entryDr = document.getElementById("entry1");
 // entryDr = entryDr.toLowerCase().replace(" ", "");
  this.entryCr = document.getElementById("entry2");
  // entryCr=	entryCr.toLowerCase().replace(" ", "");
  //this.amount = document.getElementById("amount");
    //amount = +amount;
 this.positive = [];
 this.negative = [];
    }
    //Delete Row
 del(entry){
const i = entry.parentNode.parentNode.rowIndex;
  document.getElementById("result").deleteRow(i);
  document.getElementById("result").deleteRow(i);
}
//Add raw and calculate
addEntry(){
    //const for get date input
let date = document.getElementById("date").value;
const dates = new Date(date);
const year = dates.getFullYear();
const currentMonth = dates.getMonth();
const arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const nameOfCurrentMonth = arr[currentMonth];
const day = dates.getDate();

// var for add date and M/S
let d = document.getElementById("yer");
    d.innerText = year;
let m = document.getElementById("ms");
let mr = this.mS.value;
m.innerText = mr;
if(mr.length > 0) { 
  this.mS.disabled = true;
     }else{
this.mS.disabled = true;
}
//const to show result
const table = document.getElementById("result");
// const for insert row and cell and make column 
  const row = table.insertRow(-1);
  const cell = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);
  const row1 = table.insertRow(-1);
  const cellA = row1.insertCell(0);
  const cell4 = row1.insertCell(1);
  const cell5 = row1.insertCell(2);
  const cell6 = row1.insertCell(3);
  const cellD = row.insertCell(4);
    cell.innerHTML = `${nameOfCurrentMonth}, ${day}`;
    cell1.innerHTML = this.entryDr.value;
    cell2.innerHTML = +document.getElementById("amount").value;
		 cell3.innerHTML = " ";
		 cell4.innerHTML = ` &nbsp &nbsp  ${this. entryCr.value}`;
		 cell5.innerHTML = " ";
		 cell6.innerHTML = +document.getElementById("amount").value;
		 cellA.innerHTML = "" ;
		 cellD.innerHTML = "<input type='button' value=' ❎' onClick='person1.del(this)' id='remov'>";
		 
		 }
res(){
document.getElementById("M/S").disabled = false;
}
}
let person1 = new Account();
