var bgcolor;

function setup() {
    createCanvas(600, 600);
  bgcolor = color (0,206,209);
  createButton("click me!")
  }

function changeColor(){
  bgcolor = color(random(225));
}

function mousePressed(){
  changeColor();
}
  
  function draw() {
    background(bgcolor);
  
    
    //New York clock
    
    //title
let FirstTime = "New York" 
  stroke(162,205,90)
  strokeWeight(4);
  fill(0,100,0)  
  text(FirstTime, 390, 160)
  textStyle(BOLD);
  textSize(38);
    
    x1 = width / 3;
    y1 = height / 3;


    let radius = min(width, height) / 3;
    secondsRadius = radius * 0.6;
    minutesRadius = radius * 0.4;
    hoursRadius = radius * 0.2;
    clockDiameter = radius * 1.5;
    
  
    // color background
    noStroke();
    fill(238, 229, 248);
    ellipse(x1, y1, clockDiameter + 30, clockDiameter + 30);
    fill(201, 192, 211);
    ellipse(x1, y1, clockDiameter, clockDiameter);
  
    // Angles for sin() and cos() start at the horizontal spot;
    // subtract HALF_PI to make them start at the top
    let s = map(second(), 0, 60, 0, TWO_PI)-HALF_PI;
    let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    let h = map(hour() + norm(minute(), 0, 60), 0, 12, 0, TWO_PI) - HALF_PI;
  
    // Draw the hands of the clock
    stroke(123,139,111);
    strokeWeight(2);
    line(x1, y1, x1 + cos(s) * secondsRadius, y1 + sin(s) * secondsRadius)
    stroke(205,92,92)
    strokeWeight(3);
    line(x1, y1, x1 + cos(m) * minutesRadius, y1 + sin(m) * minutesRadius)
    stroke(139,101,8)
    strokeWeight(5);
    line(x1, y1, x1 + cos(h) * hoursRadius, y1 + sin(h) * hoursRadius)
  
    // Draw the minute ticks
    stroke(240,130,71)
    strokeWeight(7);
    beginShape(POINTS);
    for (let a = 0; a < 360; a += 30) {
      let angle = radians(a)
      let x = x1 + cos(angle) * secondsRadius
      let y = y1 + sin(angle) * secondsRadius
      vertex(x, y);
    }
    endShape();

    
    //Seattle clock
    
    //title
let OtherTime = "Seattle" 
  stroke(139,69,19)
  strokeWeight(4);
  fill(255,106,106)  
  text(OtherTime, 80, 460)
  textStyle(BOLD);
  textSize(38);
    
    x2 = 430;
    y2 = 430;


    let radius2 = min(width, height) / 4;
    secondsRadius = radius2 * 0.7;
    minutesRadius = radius2 * 0.5;
    hoursRadius = radius2 * 0.2;
    clockDiameter = radius2 * 1.6;
    
  
    // color background
    noStroke();
    fill(106,90,205);
    ellipse(x2, y2, clockDiameter + 20, clockDiameter + 20);
    fill(123,104,238);
    ellipse(x2, y2, clockDiameter, clockDiameter);
  
    // Angles for sin() and cos() start at the horizontal spot;
    let s2 = map(second(), 0, 60, 0, TWO_PI)-HALF_PI;
    let m2 = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI)-HALF_PI;
    let h2 = map(hour() + norm(minute(), 0, 60), 0, 12, 0, TWO_PI)-PI;
  
    // Draw the hands of the clock
    stroke(165,42,42);
    strokeWeight(2);
    line(x2, y2, x2 + cos(s2) * secondsRadius, y2 + sin(s2) * secondsRadius)
    stroke(244,164,96);
    strokeWeight(3);
    line(x2, y2, x2 + cos(m2) * minutesRadius, y2 + sin(m2) * minutesRadius)
    stroke(255,0,255)
    strokeWeight(5);
    line(x2, y2, x2 + cos(h2) * hoursRadius, y2 + sin(h2) * hoursRadius)
  
    // Draw the minute ticks
    stroke(255,222,173);
    strokeWeight(7);
    beginShape(POINTS);
    for (let a = 0; a < 360; a += 30) {
      let angle = radians(a)
      let x = x2 + cos(angle) * secondsRadius
      let y = y2 + sin(angle) * secondsRadius
      vertex(x, y);
    }
 endShape();

    
  }