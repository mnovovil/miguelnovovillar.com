  (function () {
    var el = document.getElementById('clock');
    function tick() {
      try {
        el.textContent = 'NY ' + new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'America/New_York' });
      } catch (e) {}
    }
    tick(); setInterval(tick, 1000);
    var menu = document.querySelector('.menu');
    if (menu) document.addEventListener('click', function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });
    document.getElementById('yr').textContent = new Date().getFullYear();
  })();
