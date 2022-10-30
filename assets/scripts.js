
var currentDay = $('#currentDay')

function displayTime() {
    var currentTime = moment().format('dddd, MMMM DD, YYYY [at] h:mm A');
    currentDay.text(currentTime);
    
  }
  //need to have this function in setInterval to keep current time by the second
  setInterval(displayTime, 1000)
  
  //need to have conditions that add past/present/future class to timeblocks
  var hour9 = 9
  var text9 =$("#text9")
  if (hour9 == moment().hour()) {
    text9.addClass("present")
  }
  else if (hour9 > moment().hour()) {
    text9.addClass("future")
  }
  else if (hour9 < moment().hour()) {
    text9.addClass("past")
  }

  var hour10 = 10
  var text10 =$("#text10")
  if (hour10 == moment().hour()) {
    text10.addClass("present")
  }
  else if (hour10 > moment().hour()) {
    text10.addClass("future")
  }
  else if (hour10 < moment().hour()) {
    text10.addClass("past")
  }

  var hour11 = 11
  var text11 =$("#text11")
  if (hour11 == moment().hour()) {
    text11.addClass("present")
  }
  else if (hour11 > moment().hour()) {
    text11.addClass("future")
  }
  else if (hour11 < moment().hour()) {
    text11.addClass("past")
  }

  var hour12 = 12
  var text12 =$("#text12")
  if (hour12 == moment().hour()) {
    text12.addClass("present")
  }
  else if (hour12 > moment().hour()) {
    text12.addClass("future")
  }
  else if (hour12 < moment().hour()) {
    text12.addClass("past")
  }

  var hour1 = 13
  var text1 =$("#text1")
  if (hour1 == moment().hour()) {
    hour1.addClass("present")
  }
  else if (hour1 > moment().hour()) {
    text1.addClass("future")
  }
  else if (hour1 < moment().hour()) {
    text1.addClass("past")
  }

  var hour2 = 14
  var text2 =$("#text2")
  if (hour2 == moment().hour()) {
    text2.addClass("present")
  }
  else if (hour2 > moment().hour()) {
    text2.addClass("future")
  }
  else if (hour2 < moment().hour()) {
    text2.addClass("past")
  }

  var hour3 = 15
  var text3 =$("#text3")
  if (hour3 == moment().hour()) {
    text3.addClass("present")
  }
  else if (hour3 > moment().hour()) {
    text3.addClass("future")
  }
  else if (hour3 < moment().hour()) {
    text3.addClass("past")
  }

  var hour4 = 16
  var text4 =$("#text4")
  if (hour4 == moment().hour()) {
    text4.addClass("present")
  }
  else if (hour4 > moment().hour()) {
    text4.addClass("future")
  }
  else if (hour4 < moment().hour()) {
    text4.addClass("past")
  }

  var hour5 = 17
  var text5 =$("#text5")
  if (hour5 == moment().hour()) {
    text5.addClass("present")
  }
  else if (hour5 > moment().hour()) {
    text5.addClass("future")
  }
  else if (hour5 < moment().hour()) {
    text5.addClass("past")
  }

  var hourx = 1
  var textx =$("#textx")
  var butx = $("#butx")
  var textxEvent = textx.val()
  console.log((moment().hour()) - hourx)

  if ((moment().hour())-hourx > 8) {
    textx.html("Scheduling Unavailable; Enter New Event Tomorrow")
  }
  else if(textxEvent === "[Enter Event]") {
    textxEvent = localStorage.getItem("textxEvent")
    textx.val(textxEvent)
  }

  function saveEventX () {
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