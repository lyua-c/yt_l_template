'use strict';

/*
 * live_dashboardページにテンプレートを反映する
 */

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var args = message.args;

  var elemTitle, elemBody, elemTag;
    // when PR
    elemTitle = document.getElementsByClassName('video-settings-title')[0];
    elemBody = document.getElementsByClassName('video-settings-description')[0];
    if (document.getElementsByClassName('video-settings-tags') != null) {
     elemTag = document.getElementsByClassName('video-settings-tags')[0];
    }

  if (elemTitle && elemBody) {
    elemTitle.value = args.title;
    elemBody.value = args.body;
  }
  if (document.getElementsByClassName('save-changes-button')[0] != null) {
   document.getElementsByClassName('save-changes-button')[0].disabled = false
  }
  if (document.getElementsByClassName('save-changes-button')[1] != null) {
   document.getElementsByClassName('save-changes-button')[1].disabled = false
  }
  if (document.getElementsByClassName('yt-chip') != null) {
   while (document.getElementsByClassName('yt-chip')[0]) document.getElementsByClassName('yt-chip')[0].parentNode.removeChild(document.getElementsByClassName('yt-chip')[0]);
  }
  if (elemTag) {
   if (args.videotag) {
    elemTag.value = args.videotag;
    document.getElementsByClassName('video-settings-add-tag')[0].value = args.videotag;
   } else {
    elemTag.value = "";
    document.getElementsByClassName('video-settings-add-tag')[0].value = "";
   }
  }
});
