'use strict';

/*
 * live_dashboardページにテンプレートを反映する
 */

function triggerEvent(element, event) {
 var evt = document.createEvent("HTMLEvents");
 evt.initEvent(event, true, true ); // event type, bubbling, cancelable
 return element.dispatchEvent(evt);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var args = message.args;

  var elemTitle, elemBody, elemTag;
    // when PR
    var tmp_elemTitle = document.getElementsByClassName('input-container title')[0]
    elemTitle = tmp_elemTitle.querySelector('#textbox');

    var tmp_elemBody = document.getElementsByClassName('input-container description')[0];
    elemBody = tmp_elemBody.querySelector('#textbox');
    if (document.getElementsByClassName('video-settings-tags') != null) {
     elemTag = document.getElementsByClassName('video-settings-tags')[0];
    }

  if (elemTitle && elemBody) {
    elemTitle.innerHTML = args.title;
    triggerEvent(elemTitle,"input");
    elemBody.innerHTML = args.body;
    triggerEvent(elemBody,"input");
  }
  if (document.querySelector('#save-button')[0] != null) {
   document.querySelector('#save-changes-button')[0].disabled = false
  }
  if (document.querySelector('#save-button')[1] != null) {
   document.querySelector('#save-changes-button')[1].disabled = false
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
