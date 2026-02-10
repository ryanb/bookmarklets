javascript:(function() {
  function copyToClipboard(str) {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  let name = document.querySelector("h1.gh-header-title bdi")?.textContent.trim();
  let number = document.querySelector("h1.gh-header-title span.gh-header-number, h1.gh-header-title span.color-fg-muted")?.textContent.trim();
  if (!name || !number) {
    const spans = [...document.querySelectorAll("[data-component='TitleArea'] h1 span")].map((element) => element.textContent);
    name = spans[0];
    number = spans[1];
  }
  const url = window.location.href;
  let addedLines = document.querySelector("#diffstat span.color-fg-success")?.textContent.trim();
  let removedLines = document.querySelector("#diffstat span.color-fg-danger")?.textContent.trim();
  if (!addedLines || !removedLines) {
    addedLines = document.querySelector("[data-component='PH_Navigation'] span.fgColor-success")?.textContent.trim() || "+0";
    removedLines = document.querySelector("[data-component='PH_Navigation'] span.fgColor-danger")?.textContent.trim() || "-0";
  }
  copyToClipboard(`[${name} (${number})](${url}) [${addedLines}, ${removedLines}]`);
  console.log("Copied current GitHub issue to clipboard!");
})();
