javascript: (function () {
  function copyToClipboard(str) {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
  let notes = "";
  let codeIndex = Array.from(document.querySelectorAll("thead th"))
    .findIndex((th) => th.title === "Ticket Code");
  let trs = document.querySelectorAll("tr.selected");
  for (const tr of trs) {
    let code = tr.children[codeIndex].querySelector(".uiOutputText").title;
    let link = tr.querySelector("[data-refid=recordId]");
    notes += `- [${link.title} - ${code}](${link.href})\n`;
  }
  copyToClipboard(notes);
  console.log("Copied tickets to clipboard!");
})();
