class Drops{

    constructor(x,y){

        var options={
            isStatic: false,
            restitution: 1.9,
            friction: 0.1,
            density: 0.1
        }
        this.x=x;
        this.y=y;
        this.r=3;
        this.body=Matter.Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }
    display(){
        var dropsPos = this.body.position;
        if(dropsPos.y<(height*0.95)){
            push();
            translate(dropsPos.x, dropsPos.y);
            fill("aqua")
            ellipse(0,0,this.r,this.r);     
            pop();
        } else {
            World.remove(world, this.body);
        }
       
    }
} 