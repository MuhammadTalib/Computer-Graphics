window.onload=myDisplay()

function myDisplay(){
	var cvs=document.getElementById("mycanvas");
	if(cvs.getContext){
		var ctx=cvs.getContext("2d");
		
		var img=new Image();
		img.onload=function(){
			ctx.drawImage(img,100,100,300,300);
		}
		img.src='images/led.jpeg';
		
		
		ctx.fillStyle="blue";
		ctx.fillRect(0,0,640,480);
		
		ctx.moveTo(0,0);
		ctx.lineTo(320,240);
		ctx.stroke();
	}
}