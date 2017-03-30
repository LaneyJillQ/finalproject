var timerHours = 1
var timerMinutes = 1
var timerSeconds = 10
var countdownTimeInSeconds = (timerHours * 3600) + (timerMinutes * 60) + timerSeconds

var myCountdown = setInterval( function(){
  countdownTimeInSeconds -= 1
  if ( countdownTimeInSeconds === 0) {
    console.log('time up')
    clearInterval(myCountdown)
    return
  }
  var hours = Math.floor(countdownTimeInSeconds / 3600)
  var leftOver = Math.floor(countdownTimeInSeconds % 3600)
  var minutes = Math.floor(leftOver / 60)
  var seconds = Math.floor(leftOver % 60)
  if (hours < 10) hours = "0" + hours
  if (minutes < 10) minutes = "0" + minutes
  if (seconds < 10) seconds = "0" + seconds
  $('#timer').text(hours + ":" +minutes + ":" + seconds)

}, 1000)
