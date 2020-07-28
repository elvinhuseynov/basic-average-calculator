var inputBox = document.querySelector("#input-text");
var n = prompt("Please enter how many numbers do you want to find the average");
var b = 0;
for (let index = 0; index < n; index++) {
 var a = prompt("Enter the number");
 Number(a);
 b =b + Number(a);
}
 var c = (b/n).toPrecision(4);

inputBox.value = c;



