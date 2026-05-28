document.addEventListener("DOMContentLoaded", () => {

  const repo =
    "https://cdn.jsdelivr.net/gh/blackxs0001s/iconx@main/";

  const styles = {
    "ji-regular": "svg_r/svg/",
    "ji-bold": "svg_b/svg/"
  };

  document.querySelectorAll("[class*='ji-']").forEach(el => {

    let styleClass = null;

    Object.keys(styles).forEach(c => {
      if (el.classList.contains(c)) {
        styleClass = c;
      }
    });

    if (!styleClass) return;

    const cls = [...el.classList]
      .find(c =>
        c.startsWith("ji-") &&
        c !== "ji-regular" &&
        c !== "ji-bold"
      );

    if (!cls) return;

    const icon = cls.replace("ji-", "");

    const base =
      repo + styles[styleClass];

    el.style.display = "inline-block";
    el.style.width = "1em";
    el.style.height = "1em";
    el.style.minWidth = "1em";
    el.style.minHeight = "1em";

    el.style.backgroundColor = "currentColor";
    el.style.verticalAlign = "-0.125em";

    el.style.mask =
      `url("${base}${icon}.svg") center / contain no-repeat`;

    el.style.webkitMask =
      `url("${base}${icon}.svg") center / contain no-repeat`;

  });

});
