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
  if (!name) {
    name = document.querySelector("[data-component='TitleArea'] h1 .markdown-title")?.textContent.trim();
  }
  const url = window.location.href;
  let addedLines = document.querySelector("#diffstat span.color-fg-success")?.textContent.trim();
  let removedLines = document.querySelector("#diffstat span.color-fg-danger")?.textContent.trim();
  if (!addedLines || !removedLines) {
    addedLines = document.querySelector("[data-component='PageHeader'] span.fgColor-success")?.textContent.trim() || "+0";
    removedLines = document.querySelector("[data-component='PageHeader'] span.fgColor-danger")?.textContent.trim() || "-0";
  }
  copyToClipboard(`[${name}](${url}) [${addedLines}, ${removedLines}]`);
  console.log("Copied current GitHub issue to clipboard!");
})();
