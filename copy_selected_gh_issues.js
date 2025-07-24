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
  let elements = document.querySelectorAll(
    ".js-issue-row:has(:checked) .js-navigation-open"
  );
  elements = [...elements].reverse();
  for (const element of elements) {
    let number = element.id.split("_")[1];
    notes += `- [${element.textContent} (#${number})](${element.href})\n`;
  }
  copyToClipboard(notes);
  let checkboxes = document.querySelectorAll(
    ".js-issue-row input[type='checkbox']:checked"
  );
  for (const checkbox of checkboxes) {
    checkbox.click();
  }
  console.log("Copied selection to clipboard!");
})();
