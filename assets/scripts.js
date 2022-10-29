
var currentDay = $('#currentDay')

function displayTime() {
    var currentTime = moment().format('dddd, MMMM DD, YYYY [at] hh:mm a');
    currentDay.text(currentTime);
  }
  //need to have this function in setInterval to keep current time by the second
  setInterval(displayTime, 1000)
  