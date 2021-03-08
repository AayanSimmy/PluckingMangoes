class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.slingShot);
    }

    display(){
        if(this.slingShot.bodyA){
        var pointA = this.slingShot.bodyA.position;

        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
     fly(){
this.slingShot.bodyA=null

    }
}