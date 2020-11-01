class Bob{
    constructor(x, y, radius, angle) {
    
    var opitions = {
        isStatic:false,
        restitution:1,
        friction:0,
        density:1
    }
    
    this.body = Bodies.circle(x, y, radius/2, opitions);
    this.radius = radius;
    World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
    push();
    ellipseMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    ellipse(0, 0, this.radius, this.radius);
    pop();
      }
};