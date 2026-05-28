(function () {
  const base = "https://cdn.jsdelivr.net/gh/blackxs0001s/iconx@main/svg/";

  document.querySelectorAll("[class*='ji-']").forEach(el => {
    const cls = [...el.classList].find(c => c.startsWith("ji-"));
    if (!cls) return;

    const icon = cls.substring(3); // ji-View-1 -> View-1

    el.style.display = "inline-block";
    el.style.width = "1em";
    el.style.height = "1em";
    el.style.backgroundColor = "currentColor";
    el.style.verticalAlign = "-0.125em";
    el.style.mask = `url("${base}${icon}.svg") center / contain no-repeat`;
    el.style.webkitMask = `url("${base}${icon}.svg") center / contain no-repeat`;
  });
})();