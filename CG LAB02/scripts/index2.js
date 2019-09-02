
window.onload=myInit();
let activeColor='red';
let yAxis=false;
function myInit(){
    document.getElementById("imageFile").addEventListener("change",handleFiles);
}
function handleFiles(){
    
    var theGoods=document.getElementById("imageFile").files[0];
    var img=new Image();
    var reader=new FileReader();

    reader.addEventListener("load",function(){
        img.src=reader.result;
    })

    img.onload = function(){ 
        calcAndGraph(img)
    }

    if(theGoods) {
        reader.readAsDataURL(theGoods);
    }
}

function calcAndGraph(img){
    let rD=[], gD=[] ,bD=[];
    let cvs=document.getElementById("mycanvas");
    let ctx=cvs.getContext("2d");
    cvs.width=img.width;
    cvs.height=img.height;
    ctx.drawImage(img,0,0);

    const iD=ctx.getImageData(0,0,cvs.width,cvs.height).data;
    for(var i=0;i<256;i++){
        rD[i]=0;
        gD[i]=0;
        bD[i]=0;
    }
    var a=0;
    for(var i=0;i<iD.length;i+=4){
        
        console.log("console.log(rD[iD[i]])",rD[iD[i]],"   ",iD[i])
        rD[iD[i]]++;
        console.log("console.log(rD[iD[i]]++)",rD[iD[i]],"   ")
        gD[iD[i+1]]++;
        bD[iD[i+2]]++;
        a++;
    }
    console.log(iD)
    console.log("a",a)
    console.log("red",rD)
    console.log("green",gD)
    console.log("blue",bD)
   histogram({rD,gD,bD})

}
function histogram(data) {
    let W=800
    let H=W/2;
    const svg = d3.select('svg');
    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    const width = W - margin.left - margin.right;
    const height = H - margin.top - margin.bottom;
    let q = document.querySelector('svg');
    q.style.width=width;
    q.style.height=height;
    if (yAxis) { d3.selectAll("g.y-axis").remove(); yAxis=false; }
    function graphComponent(data, color) {
    //   d3.selectAll(".bar-"+color).remove();
    //   var data = Object.keys(data).map(function(key){ return {freq:data[key], idx:+key}});
    //   var x = d3.scaleLinear()
    //     .range([0, width])
    //     .domain([0, d3.max(data, function(d) { return d.idx; })]);
    //   var y = d3.scaleLinear()
    //     .range([height, 0])
    //     .domain([0, d3.max(data, function(d) { return d.freq; })]);
    //   var g = svg.append("g")
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //   if (!yAxis) {
    //     yAxis=true;
    //     g.append("g")
    //      .attr("class", "y-axis")
    //      .attr("transform", "translate(" + -5 + ",0)")
    //      .call(d3.axisLeft(y).ticks(10).tickSizeInner(10).tickSizeOuter(2));
    //   }
    //   g.selectAll(".bar-"+color)
    //     .data(data)
    //     .enter().append("rect")
    //     .attr("class", "bar-"+color)
    //     .attr("fill", color)
    //     .attr("x", function(d) { return x(d.idx); })
    //     .attr("y", function(d) { return y(d.freq); })
    //     .attr("width", 2)
    //     .attr("opacity", 0.8)
    //     .attr("height", function(d) { return height - y(d.freq); })    
    }
    graphComponent(data.gD, "green");
    graphComponent(data.bD, "blue");
    graphComponent(data.rD, "red");
  }
