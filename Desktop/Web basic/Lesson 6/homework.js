
const fruits = [];
fruits [0] = ["apple", 10];
fruits [1] = ["banana", 20];
fruits [2] = ["cherry", 15];
  console.log("I have 10 apple");

 let text = "<ul>";
 for (let i = 0; i < fruits.length; i++) {
  text += "<li>" + "tôi có" + fruits[i][1] + fruits[i][0] + "</li>";
}
text += "</ul>";


document.getElementById("demo").innerHTML = text;

var Husky = {
"name": "Vàng",
"legs": 4,
"color": "brown",
}