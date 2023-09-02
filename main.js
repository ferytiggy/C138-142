img=""
noseX=0
noseY=0
TiggyX=325
TiggyY=325

function preload(){
	Tiggy_gameOver=loadSound("gameover.wav");
	Tiggy_jump=loadSound("jump.wav");
	Tiggy_coin=loadSound("coin.wav");
	Tiggy_kick=loadSound("kick.wav");
	Tiggy_dead=loadSound("mariodie.wav");
	Tiggy_start=loadSound("world_start.wav");
	img=loadImage("imgs/mario/mario02.png")
	setSprites()
	MarioAnimation()
}

function setup(){
	canvas=createCanvas(1240,336);
	canvas.parent("canvas");
	//carga todo el codigo requerido para el juego, y ya esta escrita por la libreria de lunik
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console")
	posenet=ml5.poseNet(video, modelLoaded)
}

function modelLoaded(){
console.log("MODELO CARGADO :D:D:D:D:D")
}

function gotResult(results,error){
	if (results.length>0) {
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;

	}else{
		console.error(error);
	}

}

function draw(){
	background("cyan")
	if (noseX<300) {
		TiggyX=TiggyX+1;
	}

	if (noseY<150) {
		TiggyY=TiggyY-1;
	}

	image(img,TiggyX,TiggyY);
}
