nosex = 0;
nosey = 0;
leftWristx = 0;
rightWristx = 0;
difference = 0;
function setup(){
video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 550);
canvas.position(560, 150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
background('#FFD700');
document.getElementById("square_sides").innerHTML = "width and height of the square will be " + difference + "px";
fill('#800080');
stroke('#00FF00');
square(nosex, nosey, difference);
}

function modelLoaded(){
console.log('PoseNet is initialized')
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log("nosex = " + nosex + "nosey = " + nosey);
leftWristx = results[0].pose.leftWrist.x;
rightWristx = results[0].pose.rightWrist.x; 
difference = floor(leftWristx - rightWristx);
console.log("rightWristx = " + rightWristx + "leftWristx = " + leftWristx + "difference = " + difference);
}
}
