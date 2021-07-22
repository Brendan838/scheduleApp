
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
if (setData){
setData.scheduleArray[i] = time.value
localStorage.setItem("schedule", JSON.stringify(setData))
}
else {
getData.scheduleArray[i] = time.value
localStorage.setItem("schedule", JSON.stringify(getData))
}

}



function setUpText() { 
if (setData){
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

//The very first time I save it isn't working, but then it sets
//
//make a function to get that array and assign it to getData

function setTimeColors (timeBlock, timeNumber){
var currentHour = moment().format('HH')
var red = "list-group-item list-group-item-danger"
var gray = "list-group-item list-group-item-secondary"
var green = "list-group-item list-group-item-success"
if (currentHour == timeNumber){
timeBlock.setAttribute("class", red)
}

if (timeNumber < currentHour) {

timeBlock.setAttribute("class", gray)
}
if (timeNumber > currentHour) {

timeBlock.setAttribute("class", green)
}

}

