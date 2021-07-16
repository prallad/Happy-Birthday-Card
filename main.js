var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        
        Img.scaleToWidth(510);
        Img.scaleToHeight(700);
        Img.set({
            top:0,
            left:0
        });
        canvas.add(Img);
    });
	
};

function playSound(){
	x.play();
}
