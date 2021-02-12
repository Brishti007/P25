class Paper {
    constructor(x,y,width,height){
        this.image = loadImage("paper.png");
var options = {
    isStatic : false,
restitution : 0.3,
friction : 0.5,
density : 1.2



}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

World.add(world , this.body);
}

display(){

    var pos =this.body.position;
    var angle = this.body.angle;
    rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
  push();


}

}