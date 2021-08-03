const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
   // console.log(hour);
    
    if(hour>12){

        console.log("if statement")
      console.log(hour);
        text("Time : "+ hour%12 + " PM", 50,100);

        // hour%12 gives you 0
        //12%12 is the reminder is 0,the same thing it is printing.
      //  but we want it to be 12 pm 
       // then change the code
       //how ?

    }

    else if(hour==12){
        //console.log("else if");
        text("Time : 12 PM",100,100);
    }

   
    else{
       // console.log("else");
        //console.log(hour);
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
  
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();
   // console.log(responseJSON);

 
    //change the data in JSON format and store it in variable responseJSON
    

    
    //fetch datetime from responseJSON
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
  // console.log(hour);

    // slice the datetime to extract hour
    

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg = "sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
