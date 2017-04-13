function textChangeListener(evt){
  var id = evt.target.id;
  var text = evt.target.value;
  
if (id = "topLineText") {
    window.topLineText=text;
    
  } else {
    window.bottomLineText=text;
    
    redrawMeme(window.imgSrc, window.topLineText, window.bottomLinetext);
    
  }
  
function redrawMeme (image, topLine, bottomLine) {
    var canvas = (document).getElementByTagName("canvas");
    var ctx = canvas.getContext("2d");   
  
  var imange = new Image();
  image.onload = function() {
  console.log ("Loaded image");
  ctx.drawImage (image, 0,0, canvas.width, canvas.height);
  var savedImage ="canvas.ToDataURL();
  window.open(savedImage);
}
  img.src = "Meme.jpg"

  
  
  }
  
function saveFile () {
    window.open(document).getElementByTagName("canvas").toDataURL());  
  }
  
function handleFileSelector (evt) {
    var canvasWidth = 500;
    var canvasHeight = 500;
    var file = evt.target.file;
  
  
  
  
  


