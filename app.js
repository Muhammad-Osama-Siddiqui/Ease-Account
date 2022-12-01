  // this version uses es6 
    //Delete Row
    const del = (entry) => {
        const i = entry.parentNode.parentNode.rowIndex;
          document.getElementById("result").deleteRow(i);
          document.getElementById("result").deleteRow(i);
        }
            //Add raw and calculate
        const addEntry = () => {
            //const for input data calculated
        let entryDr = document.getElementById("entry1").value;
            entryDr = entryDr.toLowerCase().replace(" ", "");
        let amount = document.getElementById("amount").value;
            amount = +amount;
        let entryCr = document.getElementById("entry2").value;
           entryCr=	entryCr.toLowerCase().replace(" ", "");
                  //const for add information 
         let mS = document.getElementById("M/S").value;
        
            //const for get date input
        let date = document.getElementById("date").value;
        const dates = new Date(date);
        const year = dates.getFullYear();
        const currentMonth = dates.getMonth();
        const arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const nameOfCurrentMonth = arr[currentMonth];
        const day = dates.getDate();
        //document.getElementById("s").innerHTML = "<input type='button' value='hide' onClick='show()'>";
        // var for add date and M/S
        let d = document.getElementById("yer");
            d.innerText = year;
        let may = document.getElementById("ms");
        may.innerText = mS;
        if(mS.length > 0 ) { 
            document.getElementById("M/S").disabled = true;
             }
        else{document.getElementById("M/S").disabled = true;
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
        const res = () =>{
        document.getElementById("M/S").disabled = false;
        }
        
        