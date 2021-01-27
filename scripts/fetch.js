'use strict';

/*
 * live_dashboardページのテキストを取得する
 *
 * return {
 *   "title": "タイトル"
 *   "body": "本文"
 *   "videotag": "タグ"
 * }
 */

var title, body, tag;

  title = document.getElementsByClassName('video-settings-title')[0].value;
  body = document.getElementsByClassName('video-settings-description')[0].value;
    if (document.getElementsByClassName('video-settings-tags')[0] != null) {
     tag = document.getElementsByClassName('video-settings-tags')[0].value;
    }
var data = {
  "title": title,
  "body": body,
  "videotag": tag
};

data;
