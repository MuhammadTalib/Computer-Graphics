var bgimage=new Image();
var fgimage=new Image();
var timer;
var ball={
	xx:0,
	yy:0,
	w:fgimage.width,
	h:fgimage.height
}
window.onload=myInit();

function myInit(){
	bgimage.src='images/bgimage.jfif';
	fgimage.src='images/fgimage.jpg';
	
	myDisplay();
}

function myDisplay(){
	
	var cvs=document.getElementById("mycanvas");
	var ctx=cvs.getContext("2d");
	
	bgimage.onload=function(){
		ctx.drawImage(bgimage,400,100);	
	}
	fgimage.onload=function(){
		ctx.drawImage(fgimage,0,0,50,50);	
	}
	
	/*cvs.onclick=function(e){
		var x=e.clientX-8;
		var y=e.clientY-66;
		//ctx.drawImage(fgimage,x,y,50,50
		ctx.moveTo(0,0);
		ctx.lineTo(x,y);
		ctx.stroke();
		
	}*/
	document.body.addEventListener('keydown',function(e){
		e=event||window.event;
		
		var keyCode=e.charCode || e.keyCode;
		console.log("keydown",keyCode)
		if(keyCode=== 13){
			timer=setInterval(moveBall,10);
		}
		
	})
	document.body.addEventListener('keyup',function(e){
		e=event||window.event;
		
		var keyCode=e.charCode || e.keyCode;
		console.log("keyCode",keyCode);
		if(keyCode=== 65){
			clearInterval(timer);
		}
		
	})
	function moveBall(){
			ctx.drawImage(fgimage,ball.xx,ball.yy,50,50);
			ball.xx+=10;
			ball.yy+=2.5;
		
	}
}