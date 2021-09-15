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
  copyToClipboard(`[${name} (${number})](${url})`);
  console.log("Copied current GitHub issue to clipboard!");
})();
