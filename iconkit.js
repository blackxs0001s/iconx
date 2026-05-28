(function () {

  const repo = "https://cdn.jsdelivr.net/gh/blackxs0001s/iconx@main/";

  const styles = {
    "ji-regular": "svg_r/",
    "ji-bold": "svg_b/"
  };

  const sizes = {
    "ji-xs": "0.75em",
    "ji-sm": "0.875em",
    "ji-lg": "1.25em",
    "ji-xl": "1.5em",
    "ji-2xl": "2em",
    "ji-3xl": "3em",
    "ji-4xl": "4em",
    "ji-5xl": "5em"
  };

  function render(el) {
    if (el.dataset.jiRendered === "1") return;

    const styleClass = Object.keys(styles)
      .find(c => el.classList.contains(c));

    if (!styleClass) return;

    const iconClass = [...el.classList].find(c =>
      c.startsWith("ji-") &&
      !styles[c] &&
      !sizes[c]
    );

    if (!iconClass) return;

    const icon = iconClass.replace("ji-", "");
    const url = repo + styles[styleClass] + icon + ".svg";

    el.style.display = "inline-block";
    el.style.width = "1em";
    el.style.height = "1em";
    el.style.minWidth = "1em";
    el.style.minHeight = "1em";
    el.style.backgroundColor = "currentColor";
    el.style.verticalAlign = "-0.125em";
    el.style.mask = `url("${url}") center / contain no-repeat`;
    el.style.webkitMask = `url("${url}") center / contain no-repeat`;

    Object.keys(sizes).forEach(size => {
      if (el.classList.contains(size)) {
        el.style.fontSize = sizes[size];
      }
    });

    el.dataset.jiRendered = "1";
  }

  function scan(root = document) {
    root.querySelectorAll("[class*='ji-']").forEach(render);
  }

  document.addEventListener("DOMContentLoaded", () => scan());

  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;

        if (node.matches && node.matches("[class*='ji-']")) {
          render(node);
        }

        if (node.querySelectorAll) {
          scan(node);
        }
      });
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

})();
