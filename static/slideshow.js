var numSlides = 1000;
var slideIndex = randomInteger(1, numSlides);

var maxScrolls = 3;
var scrollIndex = 0;

$(function() {
  advance();
  setInterval(advance, 10*1000);
});

function advance() {
  var slideshow = $('#slideshow');
  var body = slideshow[0].contentWindow.document.body;

  if (scrollIndex < maxScrolls && body.scrollTop + body.clientHeight*2 < body.scrollHeight) {
    scrollIndex += 1;
    var targetHeight = (body.scrollHeight - body.clientHeight) * scrollIndex/maxScrolls;
    targetHeight = Math.max(targetHeight, body.scrollTop + body.clientHeight);
    $(body).animate({scrollTop: targetHeight}, '500');
    return;
  }

  scrollIndex = 0;
  nextSlide();
}

function nextSlide() {
  var pageNumber = zeroPad(String(slideIndex), 5);
  var path = sha1(pageNumber) + '.html';
  $('#slideshow').attr('src', path);

  slideIndex += 1;
  if (slideIndex > numSlides) {
    slideIndex = 1;
  }
}

function sha1(string) {
  var sha = new jsSHA("SHA-1", "BYTES");
  sha.update(string);
  return sha.getHash("HEX");
}

function zeroPad(string, length) {
  while (string.length < length) {
    string = "0" + string;
  }
  return string;
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}
