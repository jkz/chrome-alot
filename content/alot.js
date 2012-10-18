var img = '<img class="alot" src="'+chrome.extension.getURL("images/alot.png")+'" />';

$(document).ready(function () {
  var count = $("body *").replaceText(/\balot\b/gi, img, false,  true);
});


