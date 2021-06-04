const FPS = 30;

$(window).ready(function(){
    // onload
    start();
    update();
});

var canvas = document.getElementById("game");
canvas.width  = $(window).width(); 
canvas.height  = $(window).height(); 

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");
var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

function start(){
    ctx.beginPath();
    ctx.arc(600, 300, 50, 0, 2 * Math.PI);
    ctx.fillStyle="black";
    ctx.fill();
    ctx.stroke();
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
}

var i=1;
var k=0;


function update(){
    setTimeout(function(){
         update();  
    }, 1000 / FPS);
    
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    ctx.fillStyle="purple";
    ctx.fillRect(0,0, canvasWidth,canvasHeight);

    ctx.beginPath();
    ctx.arc(600, 300, i, 0, 2 * Math.PI);
    ctx.fillStyle="yellow";
    ctx.fill();
    ctx.stroke();
    if(i>200)k=1;
    if(i>0){
        if(!k){
        i+=i/40+0.5;
        }else{
            i-=i/40+0.5;
        } 
    }
    
}