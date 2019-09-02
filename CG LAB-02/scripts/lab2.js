
window.onload=myInit();

function myInit(){
	myDisplay();
}

function myDisplay(){
	
	var cvs=document.getElementById("mycanvas");
	var ctx=cvs.getContext("2d");
	var rect={
		x:0,
		y:0,
		width:200,
		height:100
	}
	const path=new Path2D();
	path.rect(0,0,200,100);
	path.rect(25,72,32,32);
	//drawRect(ctx,rect.x,rect.y,rect.width,rect.height);
	ctx.fillStyle="#FFFFFF"
	ctx.fill(path);
	ctx.lineWidth=2;
	ctx.strokeStyle="#000000"
	ctx.stroke(path)
	
	cvs.addEventListener('click',function(e){
	var mousePos=getMousePos(cvs,e);
	if(isInside(mousePos,rect)){
		alert("clicked inside rect");
	}else{
		alert('clicked outside rect')
	}
	},false	)
}
function drawRect(ctx,x,y,x1,y2){
	ctx.fillStyle="red";
	ctx.fillRect(x,y,x1,y2);
}
function isInside(pos,rect){
	return pos.x>rect.x 
	&& pos.x<rect.x+rect.width
	&& pos.y< rect.y+rect.height
	&& pos.y>rect.y;
}
function getMousePos(canvas,event){
	var rect=canvas.getBoundingClientRect();
	console.log(rect.left,rect.top)
	return {
		x:event.clientX - rect.left,
		y:event.clientY - rect.top
	}
}
