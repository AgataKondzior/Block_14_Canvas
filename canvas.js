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
  if(image ! = null);
    ctx.drawImage (image, 0,0, canvas.width, canvas.height);
  
  ctx.font = " 36px Arial";
  ctx.textAlign = "center";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.fillStyle = "white";
  
 if  (topLine !=null) {
   ctx.fillText(topLine, canvas.width/ 2,40;
   ctx.strokeText(topLine, canvas.width/ 2,40;
 }
 
 if  (bottomLine !=null) {
   ctx.fillText(bottomLine, canvas.width/ 2, canvas.height -20);
   ctx.strokeText(bottomLine, canvas.width/ 2,canvas.height -20);
 }
}                                 
                 
function saveFile () {
    window.open(document).getElementByTagName("canvas").toDataURL());  
  }
  
function handleFileSelector (evt) {
    var canvasWidth = 500;
    var canvasHeight = 500;
    var file = evt.target.file;
  
  
  
  
  


