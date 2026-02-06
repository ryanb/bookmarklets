javascript:(function() {
  function copyToClipboard(str) {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  const [name, number] = [...document.querySelectorAll("[data-component='TitleArea'] h1 span")].map((element) => element.textContent);
  const url = window.location.href;
  const addedLines = document.querySelector("[data-component='PH_Navigation'] span.fgColor-success")?.textContent.trim() || "+0";
  const removedLines = document.querySelector("[data-component='PH_Navigation'] span.fgColor-danger")?.textContent.trim() || "-0";
  copyToClipboard(`[${name} (${number})](${url}) [${addedLines}, ${removedLines}]`);
  console.log("Copied current GitHub issue to clipboard!");
})();
