window.onload = function () {
  var hour = document.getElementById('hour');
  var minutes = document.getElementById('minutes');
  var second = document.getElementById('second');

  var HH = parseInt(hour.innerHTML) || 0;
  var mm = parseInt(minutes.innerHTML) || 0;
  var ss = parseInt(second.innerHTML) || 0;

  var timer = setInterval(function () {

    if (++ss == 60) {
      if (++mm == 60) {
        HH++;
        mm = 0;
      }
      ss = 0;
    }

    hour.innerHTML = HH < 10 ? "0" + HH : HH;
    minutes.innerHTML = mm < 10 ? "0" + mm : mm;
    second.innerHTML = ss < 10 ? "0" + ss : ss;
  }, 1000);
};