$(document).on('mouseover', 'a:not(.preserve)', function() {
  $(this).attr('href', randomPage());
});

function randomPage() {
  var pageNumber = zeroPad(String(randomInteger(1, 1000)), 5);
  return sha1(pageNumber) + '.html';
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
