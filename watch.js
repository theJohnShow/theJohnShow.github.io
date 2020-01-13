"use strict"

var episodesToLoad = 8

function iterateHTML(allCasts) {
  return '\n        <div class="episode">\n          <div class="epTitle">'+allCasts[0]+'</div>\n          <div class="epDescription">\n            '+allCasts[1]+'\n          </div>\n          <iframe src="https://www.youtube.com/embed/'+allCasts[5]+'" frameborder="0" allowfullscreen>\n          </iframe>\n          <div class="epCast">'+allCasts[3]+'</div><div class="epDate">'+allCasts[4]+'</div>\n        </div>\n';
}

var xmlRequest = new XMLHttpRequest();
xmlRequest.open("GET", "https://theJohnShow.github.io/rss/theJohnShow.xml");
xmlRequest.timeout = 4000;
xmlRequest.onload = function() {parseXML(xmlRequest, "the John Show")};
xmlRequest.ontimeout = function() {netError()};
xmlRequest.send();
