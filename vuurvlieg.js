let width = 800; //breedte is 800
let height = 800; //hoogte is 800
let xPlace = 200; //variabele van x is 200
let yPlace = 200; //variabele van y is 200
let xSize = 20; //variabele van x is 20
let ySize = 20; //variabele van y is 20
let xspeed = 3; //variabele van x is 3
let yspeed = 3 //variabele van y is 3
let balletjes = [];

function setup() { //dit is nog voor de drawfunctie, dit wordt niet getekend
  createCanvas(width, height);//het canvas wordt gemaakt waar alles opstaat van 800 bij 800
	noStroke(); //dit betekent dat de balletjes geen randen hebben
  
 }

class Ship  { //hier wordt het balletje gemaakt
  constructor (x, y, radius, velX, velY) { //dit zijn de waardes van het balletje: de x,y positie, de radius(de straal van het balletje, de x en y snelheid
    this.x = x ; //bevestigd de x waarde
    this.y = y ; //bevestigd de y waarde  

    this.velX = velX ; //bevestigd de x snelheid
    this.velY = velY ; //bevestigd de y snelheid
    this.radius = radius; //bevestigd de straal
}


  update() {
  if( this.x > width||  this.x < 0)  {this.velX = -this.velX} 
  if(  this.y > height|| this.y  < 0) { this.velY = -this.velY}// deze command update elke seconde 60 keer en zorgt voor de bewegingen en de bounces tegen de muur

  
    this.x -= this.velX;
    this.y -= this.velY;
  }

	draw(){
		ellipse(this.x, this.y, this.radius, this.radius); //dit is het balletje
	}
}
  
let ship = new Ship(3,2,10);

for(let i = 0; i < 1500; i++){
 balletjes.push(new Ship(Math.random()* 200, Math.random()*200, 10, Math.random() * 10, Math.random() * 10));// de hoeveelheid balletjes en de bewegingen
}

function draw() {
  background(0)
 balletjes.forEach(function(ship){
 ship.update();
   ship.draw();
 });
  



  
}


