const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    getTime();
}

function setup(){
    createCanvas(1280, 610);

    engine = Engine.create();
    world = engine.world;

    bg = 0;

    score = 0;

    //level 1 of the first pyramid
    block1 = new Block(460, 412, color(134, 205, 233));
    block2 = new Block(500, 412, color(134, 205, 233));
    block3 = new Block(540, 412, color(134, 205, 233));
    block4 = new Block(580, 412, color(134, 205, 233));
    block5 = new Block(620, 412, color(134, 205, 233));
    block6 = new Block(660, 412, color(134, 205, 233));
    block7 = new Block(700, 412, color(134, 205, 233));
    block8 = new Block(740, 412, color(134, 205, 233));

    //level 2 of the first pyramid
    block9 = new Block(500, 362, "pink");
    block10 = new Block(540, 362, "pink");
    block11 = new Block(580, 362, "pink");
    block12 = new Block(620, 362, "pink");
    block13 = new Block(660, 362, "pink");
    block14 = new Block(700, 362, "pink");

    //level 3 of the first pyramid
    block15 = new Block(540, 312, color(61, 222, 206));
    block16 = new Block(580, 312, color(61, 222, 206));
    block17 = new Block(620, 312, color(61, 222, 206));
    block18 = new Block(660, 312, color(61, 222, 206));

    //level 4 of the first pyramid
    block19 = new Block(580, 262, color(127, 127, 127));
    block20 = new Block(620, 262, color(127, 127, 127));

    //level 1 of the second pyramid
    block21 = new Block(950, 188, color(134, 205, 233));
    block22 = new Block(990, 188, color(134, 205, 233));
    block23 = new Block(1030, 188, color(134, 205, 233));
    block24 = new Block(1070, 188, color(134, 205, 233));
    block25 = new Block(1110, 188, color(134, 205, 233));
    block26 = new Block(1150, 188, color(134, 205, 233));

    //level 2 of the second pyramid
    block27 = new Block(990, 138, color(61, 222, 206));
    block28 = new Block(1030, 138, color(61, 222, 206));
    block29 = new Block(1070, 138, color(61, 222, 206));
    block30 = new Block(1110, 138, color(61, 222, 206));

    //level 3 of the second pyramid
    block31 = new Block(1030, 88, "pink");
    block32 = new Block(1070, 88, "pink");

    ground = new Ground(640, 660, 1400, 200);

    polygon = new Polygon(200, 200, 40);

    slingshot = new SlingShot(polygon.body, {x: 150, y: 200});

    stand1 = new Ground(600, 450, 400, 25);
    stand2 = new Ground(1050, 225, 300, 25);
}

function draw(){
    background(bg);

    Engine.update(engine);
    textSize(25);
    fill("white");
    text("--MADE BY ARYAN--", 1000,500);
    textSize(30);
    fill("white");
    text("Score: " + score, 5, 110);

    if (score === 32) {
        push();
        textSize(100);
        fill("white");
        textAlign(CENTER);
        text("You Win!", 640, 305);
        pop();
    }

    textSize(30);
    fill("white");
    text("Drag the hexagonal stone and release it to launch it towards the tower...", 5, 30);

    textSize(30);
    fill("white");
    text("Press 'space' for a second chance to play...", 5, 60);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();
    block31.score();
    block32.score();

    ground.display();

    polygon.display();

    stand1.display();
    stand2.display();

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(polygon.body, {x: 200, y: 50});
        slingshot.attach(polygon.body);
    }
}

async function getTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dt = responseJSON.datetime;
    var hr = dt.slice(11, 13);

    if (hr >= 06 && hr <= 18) { 
        bg = color(88, 142, 223);  
    } else {
        bg = color(26, 48, 81);  
    }
}