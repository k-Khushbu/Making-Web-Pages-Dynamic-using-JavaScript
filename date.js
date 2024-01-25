const d = new Date();
console.log("Current Date: "+d.getDate());
console.log("Year: "+d.getFullYear());
console.log("Month: "+(d.getMonth()+1));
console.log("Day: "+d.getDay());
console.log("Hours:  "+d.getHours());
console.log("Time: "+d.getTime());

var currentDate = d.getDate();
const divElement = document.getElementById("divElement");
const h1Element = document.createElement("h1");
h1Element.textContent = currentDate;
document.getElementById("divElement").innerHTML =`<h1>Current Date is </h1>`;
divElement.appendChild(h1Element);