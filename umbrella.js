class Umbrella{

    constructor(x,y){
        this.image=loadImage("images/Walking Frame/walking_1.png")
        var options={
            isStatic: true,
            restitution: 1.5,
            friction: 0.1,
            density: 1
        }
        this.x=x;
        this.y=y;
        this.r=200;
        this.body=Matter.Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }
    display(){

        var umbrellaPos = this.body.position;
        push();
        translate(umbrellaPos.x, umbrellaPos.y);
        strokeWeight(-1)
        fill("black")
        ellipse(0,0,this.r);
        image(this.image, -217, -140, 400, 400);
        imageMode(CENTER)
        pop();
    }
} 
