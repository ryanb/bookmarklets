// Copies a list of selected Linear issues as Markdown text.
// It only works in List view, not Board view.
// Copy and paste the code below into the address part of a bookmark.
javascript:(function() {
  function copyToClipboard(str) {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
  let notes = "";
  let elements = document.querySelectorAll("a[data-selected='true']");
  elements = [...elements].reverse();
  for (const element of elements) {
    const titleElement = element.querySelector("[color='labelTitle']");
    let title = "";
    for (let i = 0; i < titleElement.childNodes.length; i++) {
      if (titleElement.childNodes[i].nodeType === Node.TEXT_NODE) {
        title += titleElement.childNodes[i].textContent;
      }
    }
    notes += `* [${title}](${element.href})\n`;
  }
  copyToClipboard(notes);
  const checkboxes = document.querySelectorAll(
    "[data-selected='true'] input[type='checkbox']"
  );
  for (const checkbox of checkboxes) {
    checkbox.click();
  }
  console.log("Copied selection to clipboard!");
})();
