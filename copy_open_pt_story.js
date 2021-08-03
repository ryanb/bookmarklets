// Copies story link for the first one that is open
// The URL ends with `?preview=0` so Slack doesn't generate a preview
// Copy and paste the code below into the address part of a bookmark.
javascript:(function() {
  function copyToClipboard(str) {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  let $story = $("[data-aid=StoryDetailsEdit]").first();
  if ($story.length === 0) {
    alert("Unable to find an opened story");
    return;
  }
  let storyUrl = $story.find(".clipboard_button").attr("data-clipboard-text");
  let storyName = $story.find("[data-aid=name]").val();
  copyToClipboard(`[${storyName}](${storyUrl}?preview=0)`);
})();
