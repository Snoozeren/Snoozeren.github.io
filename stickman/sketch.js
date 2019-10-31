function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('red');
  circle(250,150,50)
  line(250,175, 250, 300)
  line(250,220,210,160)
  line(250,220,290,190)
  line(250,300,160,350)
   line(250,300,290,355)
  circle(260,145,0.04 * mouseY)
   circle(240,145,0.04 * mouseX)
  line(240,160,260,165)
  
}