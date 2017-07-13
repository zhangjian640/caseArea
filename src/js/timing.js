window.onload = function () {
  var HH = 0;
  var mm = 0;
  var ss = 0;
  var hour = document.getElementById('hour');
  var minutes = document.getElementById('minutes');
  var second = document.getElementById('second');
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