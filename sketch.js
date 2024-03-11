function setup() {
    createCanvas(1080, 720);
    background ('rgba(0,255,0, 0.25)');
    cor = color(random(254, 255), random(254, 255), random(254, 255));
    posicaoHorizontal = 200;
    posicaoVertical = 200;
  }
  
  function draw () {
    fill(cor);
    circle(posicaoHorizontal,posicaoVertical, 35);
   
    function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
  }
    
    if(mouseX < posicaoHorizontal) {
  posicaoHorizontal--;
  }
  if(mouseX > posicaoHorizontal) {
  posicaoHorizontal++;
  }
    if(mouseY < posicaoVertical) {
  posicaoVertical--;
  }
  if(mouseY > posicaoVertical) {
  posicaoVertical++;
  }
    if(mouseIsPressed) {
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    }
  }