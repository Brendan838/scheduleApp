
//setting time in jumbotron
var currentDay = document.querySelector("#currentDay")
var time = moment().format('LLLL');
currentDay.innerHTML = time;

//creating text areas
var nine = document.querySelector("#nine")
var ten = document.querySelector("#ten")
var eleven = document.querySelector("#eleven")
var twelve = document.querySelector("#twelve")
var one = document.querySelector("#one")
var two = document.querySelector("#two")
var three = document.querySelector("#three")
var four = document.querySelector("#four")
var five = document.querySelector("#five")
//this is for the list group item colors
var nineBlock = document.querySelector("#nineBlock")
var tenBlock = document.querySelector("#tenBlock")
var elevenBlock = document.querySelector("#elevenBlock")
var twelveBlock = document.querySelector("#twelveBlock")
var oneBlock = document.querySelector("#oneBlock")
var twoBlock = document.querySelector("#twoBlock")
var threeBlock = document.querySelector("#threeBlock")
var fourBlock = document.querySelector("#fourBlock")
var fiveBlock = document.querySelector("#fiveBlock")


//creating save buttons for the text area
var buttonNine = document.querySelector("#buttonNine")
var buttonTen = document.querySelector("#buttonTen")
var buttonEleven = document.querySelector("#buttonEleven")
var buttonTwelve = document.querySelector("#buttonTwelve")
var buttonOne = document.querySelector("#buttonOne")
var buttonTwo = document.querySelector("#buttonTwo")
var buttonThree = document.querySelector("#buttonThree")
var buttonFour = document.querySelector("#buttonFour")
var buttonFive = document.querySelector("#buttonFive")

var getData = {
scheduleArray: [ "","","","","","","","","",
]
}
var setData = JSON.parse(localStorage.getItem("schedule"))
//var setData = localStorage.setItem("schedule", JSON.stringify(getData))
//setUp Array
setUpText();
//set colors based on time
setTimeColors(nineBlock, 09)
setTimeColors(tenBlock, 10)
setTimeColors(elevenBlock, 11)
setTimeColors(twelveBlock, 12)
setTimeColors(oneBlock, 13)
setTimeColors(twoBlock, 14)
setTimeColors(threeBlock, 15)
setTimeColors(fourBlock, 16)
setTimeColors(fiveBlock, 17)







//Adding Button Functionality

buttonNine.addEventListener("click", function(){
console.log(nine.value)
saveLocal(nine, 0)
})
buttonTen.addEventListener("click", function(){
console.log(ten.value)
saveLocal(ten, 1)
})
buttonEleven.addEventListener("click", function(){
console.log(eleven.value)
saveLocal(eleven, 2)
})
buttonTwelve.addEventListener("click", function(){
console.log(twelve.value)
saveLocal(twelve, 3)
})
buttonOne.addEventListener("click", function(){
console.log(one.value)
saveLocal(one, 4)
})
buttonTwo.addEventListener("click", function(){
console.log(two.value)
saveLocal(two, 5)
})
buttonThree.addEventListener("click", function(){
console.log(three.value)
saveLocal(three, 6)
})
buttonFour.addEventListener("click", function(){
console.log(four.value)
saveLocal(four, 7)
})
buttonFive.addEventListener("click", function(){
console.log(five.value)
saveLocal(five, 8)
})

function saveLocal(time, i) {
setData.scheduleArray[i] = time.value
localStorage.setItem("schedule", JSON.stringify(setData))
}




function setUpText() { 
if (setData === null || setData === undefined) {
return
}
else
{
nine.textContent = setData.scheduleArray[0]
ten.textContent = setData.scheduleArray[1]
eleven.textContent = setData.scheduleArray[2]
twelve.textContent = setData.scheduleArray[3]
one.textContent = setData.scheduleArray[4]
two.textContent = setData.scheduleArray[5]
three.textContent = setData.scheduleArray[6]
four.textContent = setData.scheduleArray[7]
five.textContent = setData.scheduleArray[8]
}
}


//when I load the page I need to populate my text areas via the localStorage array. 
//my text areas are getting that information from the getData variable. Therefore the getData variable HAS to be defined upon the page loading.
//upon the page loading we need to set getData equal to the localStorage Object 
//what if it is the first time that local storage exists? That's okay because every other time
//when i hit a button its sets the text value equal to the proper value of the parsed array
//
//
//make a function to get that array and assign it to getData

function setTimeColors (timeBlock, timeNumber){
var currentHour = 10
// moment().format("DD")
var red = "list-group-item list-group-item-danger"
var gray = "list-group-item list-group-item-secondary"
var green = "list-group-item list-group-item-success"

if (currentHour === timeNumber){
timeBlock.setAttribute("class", red)
}

else if (timeNumber < currentHour) {

timeBlock.setAttribute("class", gray)
}
else if (timeNumber > currentHour) {

timeBlock.setAttribute("class", green)
}
else {
return;
}
}

