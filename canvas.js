function textChangeListener(event){
  var id = event.target.id;
  var text = event.target.value;
  
  if (id == "topLineText") {
    window.topLineText = text;
    
  } else {
    window.bottomLineText = text; 
  }
  
  
  redrawMeme(window.imgSrc, window.topLineText, window.bottomLineText);    
  }
  
  function redrawMeme (image, topLine, bottomLine) {
    var canvas = (document).querySelector("canvas");
    var ctx = canvas.getContext("2d");   
    if(image !=null);
    
       ctx.drawImage(image, 0,0, canvas.width, canvas.height);
  }

//*text atributes
  ctx.font = "36px Arial";
  ctx.textAlign = "center";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.fillStyle = "white";
  
 if  (topLine !=null) {
   ctx.fillText(topLine, canvas.width/ 2,40);
   ctx.strokeText(topLine, canvas.width/ 2,40);
 }
 
 if  (bottomLine !=null) {
   ctx.fillText(bottomLine, canvas.width/ 2, canvas.height -20);
   ctx.strokeText(bottomLine, canvas.width/ 2,canvas.height -20);
 }
                                
                 
function saveFile () {
    window.open(document.querySelector("canvas").toDataURL());  
  }
  
function handleFileSelector (event) {
    var canvasWidth = 500;
    var canvasHeight = 500;
  
    var file = event.target.files[0];
    var reader = new FileReader();
    
     reader.onload = function(fileObject) {
        var data = fileObject.target.result;
        
    // Create an image object
        var image = new Image();
        image.onload = function() {
          
          window.imageSrc = this;
          redrawMeme(window.imageSrc, null, null);
           }
        
    // Set image data to background image.
     image.src = data;
     console.log(fileObject.target.result);
    
     }
     
      reader.readAsDataURL(file)
    }
    
    function(main) {
    window.topLineText = "";
    window.bottomLineText = "";
    var input1 = document.getElementById('topLineText');
    var input2 = document.getElementById('bottomLineText');
    input1.oninput = textChangeListener;
    input2.oninput = textChangeListener;
    document.getElementById('file').addEventListener('change', handleFileSelect, false);
    document.querySelector('button').addEventListener('click', saveFile, false);
  
    }
  
  main();


