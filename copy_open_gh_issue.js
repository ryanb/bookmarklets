javascript:(function() {
  function copyToClipboard(str) {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  let name = document.querySelector(".js-issue-title").textContent.trim();
  let number = document.querySelector(".gh-header-number").textContent.trim();
  let url = window.location.href;
  let addedLines = document.querySelector("#diffstat .color-fg-success").textContent.trim();
  let removedLines = document.querySelector("#diffstat .color-fg-danger").textContent.trim();
  copyToClipboard(`[${name} (${number})](${url}) [${addedLines}, ${removedLines}]`);
  console.log("Copied current GitHub issue to clipboard!");
})();
