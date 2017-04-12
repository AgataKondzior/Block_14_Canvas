var c = getElementById("c");
var ctx = c.getContext("2d");
var imange = new Image();
image.onload = function() {
  console.log ("Loaded image");
  ctx.drawImage (image, 0,0, c.width, c.height);
}
img.src = "#"
