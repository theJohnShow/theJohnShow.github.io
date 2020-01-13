"use strict"

var episodesToLoad = 5

function iterateHTML(allCasts) {
  return '\n        <div class="episode">\n          <div class="epTitle">'+allCasts[0]+'</div>\n          <div class="epDescription">\n            '+allCasts[1]+'\n          </div>\n          <audio controls preload="metadata">\n            <source src="'+allCasts[2]+'.ogg" type="audio/ogg">\n            <source src="'+allCasts[2]+'.mp3" type="audio/mpeg">\n          </audio>\n          <div class="epCast">'+allCasts[3]+'</div><div class="epDate">'+allCasts[4]+'</div>\n        </div>\n';
}

var xmlRequest = new XMLHttpRequest();
xmlRequest.open("GET", "https://theJohnShow.github.io/rss/theJohnShow.xml");
xmlRequest.timeout = 4000;
xmlRequest.onload = function() {parseXML(xmlRequest, "the John Show")};
xmlRequest.ontimeout = function() {netError()};
xmlRequest.send();
