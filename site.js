(function () {
  var menu = document.querySelector('.menu');
  if (menu) document.addEventListener('click', function (e) {
    if (menu.open && !menu.contains(e.target)) menu.open = false;
  });
  document.getElementById('yr').textContent = new Date().getFullYear();
})();
