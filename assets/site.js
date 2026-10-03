// Theme toggle (light / dark), remembered per visitor.
(function () {
  var root = document.documentElement;
  function isDark() {
    var t = root.getAttribute('data-theme');
    return t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  });
})();

// Email links are assembled at runtime so the address never appears in the HTML source.
document.querySelectorAll('a.email').forEach(function (a) {
  var addr = a.dataset.u + '@' + a.dataset.d;
  a.href = 'mailto:' + addr;
  if (a.dataset.show === 'address') a.textContent = addr;
});
