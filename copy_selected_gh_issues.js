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
  if (elements.length === 0) {
    elements = document.querySelectorAll(
      "li:has(input[data-listview-component='selection-input']:checked) a[data-testid='listitem-title-link']"
    );
  }
  elements = [...elements].reverse();
  for (const element of elements) {
    const number = element.href.split("/").pop();
    notes += `- [${element.textContent.trim()} (#${number})](${element.href})\n`;
  }
  copyToClipboard(notes);
  let checkboxes = document.querySelectorAll(
    ".js-issue-row input[type='checkbox']:checked"
  );
  if (checkboxes.length === 0) {
    checkboxes = document.querySelectorAll(
      "input[data-listview-component='selection-input']:checked"
    );
  }
  for (const checkbox of checkboxes) {
    checkbox.click();
  }
  console.log("Copied selection to clipboard!");
})();
