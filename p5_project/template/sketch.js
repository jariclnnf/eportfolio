// JinFeng Lin
// add a custom variable: i.e. var diam1 = 10 or textx = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,117,162);
  fill(90,50,0);
  ellipse(200,300,600,200);//land
  fill(100,100,100);
  //house
  rect(200,190,100,100);
  fill(190,50,0)
  //roof
  rect(180,180,140,15);
  rect(190,170,120,15);
  rect(200,160,100,15);
  rect(210,150,80,15);
  fill(70,120,10);
  rect(260,240,30,50);//door
  fill(83,83,194);
  rect(210,210,30,30);//window
  fill(252,248,248);
  rect(random(width),random(height),1,10);
  strokeWeight(0);  
  fill(163,162,162);
  ellipse(50,50,30,30);//cloud
  ellipse(65,48,30,30);
  ellipse(80,50,30,30);
  ellipse(95,48,30,30);
  
  ellipse(150,60,30,30);//cloud
  ellipse(165,58,30,30);
  ellipse(180,60,30,30);
  ellipse(195,58,30,30);
  
  ellipse(250,50,30,30);//cloud
  ellipse(265,48,30,30);
  ellipse(280,50,30,30);
  ellipse(295,48,30,30);
  
  text("It's a raining day...🌧", 100, 330);
  //Add interactivity,red circle follow mouse
  fill(255, 0, 0, 100);       
  ellipse(mouseX, mouseY, 50, 50);    
}
  
