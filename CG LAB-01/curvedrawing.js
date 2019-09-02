window.onload=myInit()
count=0;
var x1;
var y1;
var x2;
var y2;
function myInit(){
	var cvs=document.getElementById("mycanvas");
	var ctx=cvs.getContext("2d");
	
	cvs.onclick=function(e){
		if(count===0){
			x1=e.clientX-8;
			y1=e.clientY-66;
			count++;
		}
		else{
			x2=e.clientX-8;
			y2=e.clientY-66;
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
			x1=x2;
			y1=y2;
		}
	}
	document.body.addEventListener('mousedown',function(e){
		e=event||window.event;
		console.log("mousedown");
		var keyCode=e.charCode || e.keyCode;
		console.log("keydown",keyCode)
		
		
	})
	
}