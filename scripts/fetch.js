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

  var title_tmp = document.getElementsByClassName('input-container title')[0];
  //console.log(title_tmp);
  console.log(title_tmp.querySelector('#textbox').innerHTML);
  
  title = title_tmp.querySelector('#textbox').innerHTML;
  var body_tmp = document.getElementsByClassName('input-container description')[0];
  console.log(body_tmp.querySelector('#textbox').innerHTML);
  body = body_tmp.querySelector('#textbox').innerHTML

  //console.log(document.querySelector('#tags-container'));
  var tag_tmp = document.querySelector('#tags-container');
  tag_tmp = tag_tmp.querySelector('#child-input')
  var tag_tmp2 = tag_tmp.querySelector('#chip-bar');
  console.log(tag_tmp2);
  if (tag_tmp != null) {
     //tag = document.querySelector('tags-container')[0].value;

    }

var data = {
  "title": title,
  "body": body,
  "videotag": tag
};

data;
