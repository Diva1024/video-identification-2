video="";
status1=true;
function preload(){
video=createVideo("video.mp4");
video.hide();
}
function setup(){
canvas=createCanvas(450,300);
canvas.center();
}
function draw(){
image(video,0,0,450,300);
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
    
}
function modelLoaded(){
    console.log("modelloaded");
    status1=true;
    vidoe.loop();
    video.speed(2.5);
    video.volume(1);
}