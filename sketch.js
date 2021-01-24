const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rain, rainCount=40
var rains=[]
var umbrella
var lightning, lightning1, lightning2, lightning3, lightning4


function preload(){
    lightning1 = loadImage("Images/thunderbolt/1.png");
    lightning2 = loadImage("Images/thunderbolt/2.png");
    lightning3 = loadImage("Images/thunderbolt/3.png");
    lightning4 = loadImage("Images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500,900);

    engine = Engine.create();
    world = engine.world;

    lightning = createSprite(250,165,10,40);
    lightning.scale=0.65
    
    umbrella=new Umbrella(250,500)

    for(var i=0;i<rainCount;i++){
        rains[i] = new Drops(random(0,500), random(0,900))
        
    }
   

    Engine.run(engine);

}

function draw(){
    background("black"); 
    dropRain()
    
    spawnLightning()  
    
   
    umbrella.display()
    drawSprites();
}  

function dropRain(){
    if (frameCount%.5===0){
       
        for(var i=0;i<rainCount;i++){
            rains[i].display()
        }
        for(var i=0;i<rainCount;i++){
            rains[i] = new Drops(random(0,500), random(0,900))
            
        }
    }
}


function spawnLightning(){
    if(frameCount % 30 === 0) {
        
      
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: lightning.addImage(lightning1);
                break;
        case 2: lightning.addImage(lightning2);
                break;
        case 3: lightning.addImage(lightning3);
                break;
        case 4: lightning.addImage(lightning4);
                break;
        default: break;
      }
    }
   
}




