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

window.addEventListener('scroll', function(event) {
  var depth, i, layer, layers, len, movement, topDistance, translate3d;
  topDistance = this.pageYOffset;
  layers = document.querySelectorAll("[data-type='parallax']");
  for (i = 0, len = layers.length; i < len; i++) {
    layer = layers[i];
    depth = layer.getAttribute('data-depth');
    movement = -(topDistance * depth);
    translate3d = 'translate3d(0, ' + movement + 'px, 0)';
    layer.style['-webkit-transform'] = translate3d;
    layer.style['-moz-transform'] = translate3d;
    layer.style['-ms-transform'] = translate3d;
    layer.style['-o-transform'] = translate3d;
    layer.style.transform = translate3d;
  }
});
