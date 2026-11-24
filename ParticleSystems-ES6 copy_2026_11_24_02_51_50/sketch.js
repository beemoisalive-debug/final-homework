let gravity;
let systems = [];


function setup() {
  createCanvas(400, 400);
  gravity = createVector(0, 0.05);
}


function draw() {
  background(51);
  
  for (let s of systems) {
    s.addParticle();
    s.add(gravity);
    s.run();
  }

}


function mouseClicked() {
  let mpos = createVector(mouseX, mouseY);
  let s = new ParticleSystem(mpos);
  systems.push(s);
}
