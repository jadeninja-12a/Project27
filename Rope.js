class Rope{
    constructor(bodyA, bodyB, offSetX, offSetY){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{offSetX, offSetY},
            length:400,
            stiffness:1
        }
        this.offSetX = offSetX;
        this.offSetY = offSetY;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        var offset = this.rope.pointB;
        strokeWeight(4);
        stroke("black")
        line(posA.x, posA.y,posB.x + this.offSetX, posB.y + this.offSetY);
        console.log(posA.x)
        console.log(posA.y)
    }
}