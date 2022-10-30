
var currentDay = $('#currentDay')
var saveBtn = $('.saveBtn')

function displayTime() {
  var currentTime = moment().format('dddd, MMMM DD, YYYY [at] h:mm A');
  currentDay.text(currentTime);

}
//need to have this function in setInterval to keep current time by the second
setInterval(displayTime, 1000)

saveBtn.on('click', function() {
  alert('Your event for this hour has been modified.')
})

//hour9
var hour9 = 9
var text9 = $("#text9")
var but9 = $("#but9")
var text9Event = text9.val()
console.log((moment().hour()) - hour9)

if ((moment().hour()) - hour9 > 8) {
  text9.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("text9Event", "")
}
else if (text9Event === "[Enter Event]") {
  text9Event = localStorage.getItem("text9Event")
  text9.val(text9Event)
}

function saveEvent9() {
  text9Event = text9.val();
  localStorage.setItem("text9Event", text9Event);
  console.log(text9Event)
}

but9.on('click', saveEvent9)

if (hour9 == moment().hour()) {
  text9.addClass("present")
}
else if (hour9 > moment().hour()) {
  text9.addClass("future")
}
else if (hour9 < moment().hour()) {
  text9.addClass("past")
}

//hour10
var hour10 = 10
var text10 = $("#text10")
var but10 = $("#but10")
var text10Event = text10.val()
console.log((moment().hour()) - hour10)

if ((moment().hour()) - hour10 > 8) {
  text10.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("text10Event", "")
}
else if (text10Event === "[Enter Event]") {
  text10Event = localStorage.getItem("text10Event")
  text10.val(text10Event)
}

function saveEvent10() {
  text10Event = text10.val();
  localStorage.setItem("text10Event", text10Event);
  console.log(text10Event)
}

but10.on('click', saveEvent10)

if (hour10 == moment().hour()) {
  text10.addClass("present")
}
else if (hour10 > moment().hour()) {
  text10.addClass("future")
}
else if (hour10 < moment().hour()) {
  text10.addClass("past")
}

//hour11
var hour11 = 11
var text11 = $("#text11")
var but11 = $("#but11")
var text11Event = text11.val()
console.log((moment().hour()) - hour11)

if ((moment().hour()) - hour11 > 8) {
  text11.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("text11Event", "")
}
else if (text11Event === "[Enter Event]") {
  text11Event = localStorage.getItem("text11Event")
  text11.val(text11Event)
}

function saveEvent11() {
  text11Event = text11.val();
  localStorage.setItem("text11Event", text11Event);
  console.log(text11Event)
}

but11.on('click', saveEvent11)

if (hour11 == moment().hour()) {
  text11.addClass("present")
}
else if (hour11 > moment().hour()) {
  text11.addClass("future")
}
else if (hour11 < moment().hour()) {
  text11.addClass("past")
}

//hour12
var hour12 = 12
var text12 = $("#text12")
var but12 = $("#but12")
var text12Event = text12.val()
console.log((moment().hour()) - hour12)

if ((moment().hour()) - hour12 > 8) {
  text12.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("text12Event", "")
}
else if (text12Event === "[Enter Event]") {
  text12Event = localStorage.getItem("text12Event")
  text12.val(text12Event)
}

function saveEvent12() {
  text12Event = text12.val();
  localStorage.setItem("text12Event", text12Event);
  console.log(text12Event)
}

but12.on('click', saveEvent12)

if (hour12 == moment().hour()) {
  text12.addClass("present")
}
else if (hour12 > moment().hour()) {
  text12.addClass("future")
}
else if (hour12 < moment().hour()) {
  text12.addClass("past")
}

//hour1
var hour1 = 13
var text1 = $("#text1")
var but1 = $("#but1")
var text1Event = text1.val()
console.log((moment().hour()) - hour1)

if ((moment().hour()) - hour1 > 8) {
  text1.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("text1Event", "")
}
else if (text1Event === "[Enter Event]") {
  text1Event = localStorage.getItem("text1Event")
  text1.val(text1Event)
}

function saveEvent1() {
  text1Event = text1.val();
  localStorage.setItem("text1Event", text1Event);
  console.log(text1Event)
}

but1.on('click', saveEvent1)

if (hour1 == moment().hour()) {
  hour1.addClass("present")
}
else if (hour1 > moment().hour()) {
  text1.addClass("future")
}
else if (hour1 < moment().hour()) {
  text1.addClass("past")
}

//hour2
var hour2 = 14
var text2 = $("#text2")
var but2 = $("#but2")
var text2Event = text2.val()
console.log((moment().hour()) - hour2)

if ((moment().hour()) - hour2 > 8) {
  text2.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("text2Event", "")
}
else if (text2Event === "[Enter Event]") {
  text2Event = localStorage.getItem("text2Event")
  text2.val(text2Event)
}

function saveEvent2() {
  text2Event = text2.val();
  localStorage.setItem("text2Event", text2Event);
  console.log(text2Event)
}

but2.on('click', saveEvent2)

if (hour2 == moment().hour()) {
  text2.addClass("present")
}
else if (hour2 > moment().hour()) {
  text2.addClass("future")
}
else if (hour2 < moment().hour()) {
  text2.addClass("past")
}

//hour3
var hour3 = 15
var text3 = $("#text3")
var but3 = $("#but3")
var text3Event = text3.val()
console.log((moment().hour()) - hour3)

if ((moment().hour()) - hour3 > 8) {
  text3.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("text3Event", "")
}
else if (text3Event === "[Enter Event]") {
  text3Event = localStorage.getItem("text3Event")
  text3.val(text3Event)
}

function saveEvent3() {
  text3Event = text3.val();
  localStorage.setItem("text3Event", text3Event);
  console.log(text3Event)
}

but3.on('click', saveEvent3)

if (hour3 == moment().hour()) {
  text3.addClass("present")
}
else if (hour3 > moment().hour()) {
  text3.addClass("future")
}
else if (hour3 < moment().hour()) {
  text3.addClass("past")
}

//hour4
var hour4 = 16
var text4 = $("#text4")
var but4 = $("#but4")
var text4Event = text4.val()
console.log((moment().hour()) - hour4)

if ((moment().hour()) - hour4 > 8) {
  text4.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("text4Event", "")
}
else if (text4Event === "[Enter Event]") {
  text4Event = localStorage.getItem("text4Event")
  text4.val(text4Event)
}

function saveEvent4() {
  text4Event = text4.val();
  localStorage.setItem("text4Event", text4Event);
  console.log(text4Event)
}

but4.on('click', saveEvent4)

if (hour4 == moment().hour()) {
  text4.addClass("present")
}
else if (hour4 > moment().hour()) {
  text4.addClass("future")
}
else if (hour4 < moment().hour()) {
  text4.addClass("past")
}

//hour5
var hour5 = 17
var text5 = $("#text5")
var but5 = $("#but5")
var text5Event = text5.val()
console.log((moment().hour()) - hour5)

if ((moment().hour()) - hour5 > 8) {
  text5.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("text5Event", "")
}
else if (text5Event === "[Enter Event]") {
  text5Event = localStorage.getItem("text5Event")
  text5.val(text5Event)
}

function saveEvent5() {
  text5Event = text5.val();
  localStorage.setItem("text5Event", text5Event);
  console.log(text5Event)
}

but5.on('click', saveEvent5)

if (hour5 == moment().hour()) {
  text5.addClass("present")
}
else if (hour5 > moment().hour()) {
  text5.addClass("future")
}
else if (hour5 < moment().hour()) {
  text5.addClass("past")
}

//hourx Sandbox
var hourx = 9
var textx = $("#textx")
var butx = $("#butx")
var textxEvent = textx.val()
console.log((moment().hour()) - hourx)
//resets timeblocks for hours earlier than 8 hours by replacing html
if ((moment().hour()) - hourx > 8) {
  textx.html("Scheduling Unavailable; Enter New Event Tomorrow")
  localStorage.setItem("textxEvent", "")
}
else if (textxEvent === "[Enter Event]") {
  textxEvent = localStorage.getItem("textxEvent")
  textx.val(textxEvent)
}

function saveEventX() {
  textxEvent = textx.val();
  localStorage.setItem("textxEvent", textxEvent);
  console.log(textxEvent)
}

butx.on('click', saveEventX)

if (hourx == moment().hour()) {
  textx.addClass("present")
}
else if (hourx > moment().hour()) {
  textx.addClass("future")
}
else if (hourx < moment().hour()) {
  textx.addClass("past")
}

