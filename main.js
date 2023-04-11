function preload() {
	world_start = loadSound("world_start.wav");
	pulo = loadSound("jump.wav");
	moeda = loadSound("coin.wav");
	mortePersonagem = loadSound("kick.wav");
	marioMorre = loadSound("mariodie.wav");
	jogoAcabado = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");

	vd = createCapture(VIDEO);
	vd.size(800,400);
	vd.parent("gameconsole");

	posenet = ml5.poseNet(vd, modeloCarregado);
	posenet.on('pose', gotPoses);
}

function draw() {
	game();
}

function modeloCarregado(){
	console.log("Modelo carregado!")
}
  
function gotPoses(resultado){
	if(resultado.length > 0){
	  console.log(resultado);
	  noseX = resultado[0].pose.nose.x;
	  noseY = resultado[0].pose.nose.y;
	}
}