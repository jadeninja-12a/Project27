class Roof{
    constructor(thickness){
        var property={
            isStatic:true
        }
        this.body = Bodies.rectangle(500,5 + thickness/2, 600, thickness, property);
        this.width = 800;
        this.height = thickness;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(165, 42, 42);
        rect(pos.x, pos.y, this.width, this.height);
    }
}
