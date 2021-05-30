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

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

var p= createArray(canvas.width, canvas.height);    //0-tlo; 1-kropeczka
var p2= createArray(canvas.width, canvas.height);

function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

function fillWhole(r,g,b,a){
    for(var i=0; i<canvas.width;i++){
        for(var j=0; j<canvasHeight;j++){
            drawPixel(i, j, r, g, b, a);
        }
    }
}

function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}
var r=Math.floor(Math.random() * 255);
var g=Math.floor(Math.random() * 255);
var b=Math.floor(Math.random() * 255);

function drawPixels() {

    for(var i=0; i<canvas.width; i++){
        for(var j=0; j<canvas.height; j++){
            
            if(p[i][j]==1)drawPixel(i,j, r,g,b,255);
        }
    }
}

function gameoflife() {
    for(var i=1; i<canvas.width-1; i++){
        for(var j=1; j<canvas.height-1; j++){
            var s=0;
            if(p[i][j]==0){
                if(p[i+1][j])s++;
                if(p[i-1][j])s++;
                if(p[i][j+1])s++;
                if(p[i][j-1])s++;
                if(p[i+1][j+1])s++;
                if(p[i+1][j-1])s++;
                if(p[i-1][j+1])s++;
                if(p[i-1][j-1])s++;
                if(s==3)p2[i][j]=1;
                else p2[i][j]=0;
            }else{
                if(p[i+1][j])s++;
                if(p[i-1][j])s++;
                if(p[i][j+1])s++;
                if(p[i][j-1])s++;
                if(p[i+1][j+1])s++;
                if(p[i+1][j-1])s++;
                if(p[i-1][j+1])s++;
                if(p[i-1][j-1])s++;
                if(s==2||s==3)p2[i][j]=1;
                else p2[i][j]=0;
            }

        }
    }
    for(var i=1; i<canvas.width-1; i++){
        for(var j=1; j<canvas.height-1; j++){
            p[i][j]=p2[i][j];
        }
    }
}

function start(){


    for(var i=0; i<canvasWidth;i++){
        for(var j=0; j<canvasHeight;j++){
            p[i][j]=0;
            p2[i][j]=0;
        }
    }

    for(var i=0; i<(canvasWidth*canvasHeight)/6;i++){
        var a = Math.floor(Math.random() * (canvasWidth-2))+1;
        var b = Math.floor(Math.random() * (canvasHeight-2))+1;
        if(p[a][b]==1)i--;
        p[a][b]=1;
    }
}



var r1=Math.floor(Math.random() * 255);
var g1=Math.floor(Math.random() * 255);
var b1=Math.floor(Math.random() * 255);

function update(){
    setTimeout(function(){
         update();  
    }, 1000 / FPS);
    fillWhole(r1,g1,b1,255);

    gameoflife();

    drawPixels();
    updateCanvas();   
    //console.log("dupa");
}