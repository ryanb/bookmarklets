javascript:(function() {
  function copyToClipboard(str) {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  let notes = "";
  $(".story .selector:visible > path").each(function(index, element) {
    let $div = $(element).closest("div.story");
    let story_id = $div.data("id");
    let story_text = $div.find("span.story_name span.tracker_markup").text();
    let line = `* [${story_text}](https://www.pivotaltracker.com/story/show/${story_id})\n`;
    if (!notes.includes(line)) {
      notes += line;
    }
  });
  copyToClipboard(notes);
  $("[data-aid='BulkDeselect']").trigger("click");
  console.log("Copied stories to clipboard!");
})();
