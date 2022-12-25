var entry=document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var list1=[];
var list1=[];
var list1=[];
var list1=[];
var list1=[];
var list1=[];

var n=1;

function displayDetails(){
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var phone=document.getElementById("phone").value;
    var mail=document.getElementById("mail").value;
    var websitelink=document.getElementById("websitelink").value;
    var skill=document.getElementById("skill").value;
    var gender=document.getElementById("gender").value;

   if(!firstname || !lastname || !phone || !mail || !websitelink || !skill || !gender){
    alert("please fill the boxes");
    return;
   }

   var display=document.getElementById("display");
   var newRow=display.insertRow(row);
   var cell1=newRow.insertCell(0);
   var cell1=newRow.insertCell(1);
   var cell1=newRow.insertCell(2);
   var cell1=newRow.insertCell(3);
   var cell1=newRow.insertCell(4);
   var cell1=newRow.insertCell(5);
   cell1.innerHTML=firstname;
   cell1.innerHTML=lastname;
   cell1.innerHTML=phone;
   cell1.innerHTML=mail;
   cell1.innerHTML=websitelink;
   cell1.innerHTML=skill;
   cell1.innerHTML=gender;
   row++;

   


}

