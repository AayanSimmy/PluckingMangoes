class Bird {
  constructor(x,y,radius){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.circle(x, y, radius, options);
  this.radius = radius;
    this.image=loadImage("stone.png")
    World.add(world, this.body);
  }

  display() {
   
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        //rect(0,0,this.width,this.heiht)
        rotate(angle);
        pop();
  }
}
