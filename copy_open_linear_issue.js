javascript:(function() {
  function copyToClipboard(str) {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  const title = document.querySelector("[placeholder='Issue title']").textContent;
  const url = window.location.href;
  copyToClipboard(`[${title}](${url})`);
  console.log("Copied current Linear issue to clipboard!");
})();
