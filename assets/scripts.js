
var currentDay = $('#currentDay')

function displayTime() {
    var currentTime = moment().format('dddd, MMMM DD, YYYY [at] h:mm A');
    currentDay.text(currentTime);
  }
  //need to have this function in setInterval to keep current time by the second
  setInterval(displayTime, 1000)
  
  //need to have conditions that add past/present/future class to timeblocks
  var hour9 =$('#hour-9').text()
  var text9 =$("#text9")
  if (hour9 == moment().format('h A')) {
    text9.addClass("present")
  }
  else if (hour9 > moment().format('h A')) {
    text9.addClass("future")
  }
  else if (hour9 < moment().format('h A')) {
    text9.addClass("past")
  }

  var hour10 =$('#hour-10').text()
  var text10 =$("#text10")
  if (hour10 == moment().format('h A')) {
    text10.addClass("present")
  }
  else if (hour10 > moment().format('h A')) {
    text10.addClass("future")
  }
  else if (hour10 < moment().format('h A')) {
    text10.addClass("past")
  }

  var hour11 =$('#hour-11').text()
  var text11 =$("#text11")
  if (hour11 == moment().format('h A')) {
    text11.addClass("present")
  }
  else if (hour11 > moment().format('h A')) {
    text11.addClass("future")
  }
  else if (hour11 < moment().format('h A')) {
    text11.addClass("past")
  }

  var hour12 =$('#hour-12').text()
  var text12 =$("#text12")
  if (hour12 == moment().format('h A')) {
    text12.addClass("present")
  }
  else if (hour12 > moment().format('h A')) {
    text12.addClass("future")
  }
  else if (hour12 < moment().format('h A')) {
    text12.addClass("past")
  }

  var hour1 =$('#hour-1').text()
  var text1 =$("#text1")
  if (hour1 == moment().format('h A')) {
    hour1.addClass("present")
  }
  else if (hour1 > moment().format('h A')) {
    text1.addClass("future")
  }
  else if (hour1 < moment().format('h A')) {
    text1.addClass("past")
  }

  var hour2 =$('#hour-2').text()
  var text2 =$("#text2")
  if (hour2 == moment().format('h A')) {
    text2.addClass("present")
  }
  else if (hour2 > moment().format('h A')) {
    text2.addClass("future")
  }
  else if (hour2 < moment().format('h A')) {
    text2.addClass("past")
  }

  var hour3 =$('#hour-3').text()
  var text3 =$("#text3")
  if (hour3 == moment().format('h A')) {
    text3.addClass("present")
  }
  else if (hour3 > moment().format('h A')) {
    text3.addClass("future")
  }
  else if (hour3 < moment().format('h A')) {
    text3.addClass("past")
  }

  var hour4 =$('#hour-4').text()
  var text4 =$("#text4")
  if (hour4 == moment().format('h A')) {
    text4.addClass("present")
  }
  else if (hour4 > moment().format('h A')) {
    text4.addClass("future")
  }
  else if (hour4 < moment().format('h A')) {
    text4.addClass("past")
  }

  var hour5 =$('#hour-5').text()
  var text5 =$("#text5")
  if (hour5 == moment().format('h A')) {
    text5.addClass("present")
  }
  else if (hour5 > moment().format('h A')) {
    text5.addClass("future")
  }
  else if (hour5 < moment().format('h A')) {
    text5.addClass("past")
  }

  var hourx =$('#hour-x').text()
  var textx =$("#textx")
  console.log(hourx)
  if (hourx == moment().format('h A')) {
    textx.addClass("present")
  }
  else if (hourx > moment().format('h A')) {
    textx.addClass("future")
  }
  else if (hourx < moment().format('h A')) {
    textx.addClass("past")
  }