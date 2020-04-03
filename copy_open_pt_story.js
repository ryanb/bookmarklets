// Copies story link for the first one that is open
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
  let storyId = $story.closest(".story.model").attr("data-id");
  let storyName = $story.find("[data-aid=name]").val();
  copyToClipboard(`[${storyName}](https://www.pivotaltracker.com/story/show/${storyId})`);
})();
