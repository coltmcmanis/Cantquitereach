var sel;
var slider;
var colorPicker;
var colorPicker2;

let x = 0
let y = 0
let z = 750

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  stroke(0, 0, 0, 15);
  
  sel = createSelect();
  sel.position(10,20);
  sel.option("Avenir");
  sel.option("Comic Sans MS");
  sel.option("Courier New");
  sel.option("Futura");
  sel.option("Rockwell");
  sel.option("Times New Roman");
  sel.style("width", "100px");
  
  slider = createSlider(1, 600, 15, 1);
  slider.position(10, 45);
  slider.style("width", "98px");
  
  colorPicker = createColorPicker("#EE8175");
  colorPicker.position(10, 65);
  colorPicker.style("width", "100px");

  colorPicker2 = createColorPicker("#793C3C");
  colorPicker2.position(10, 85);
  colorPicker2.style("width", "100px");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(colorPicker.color());
  fill(colorPicker2.color());
  
   let val = slider.value();
   textFont(sel.value());
   textSize(val);
  
  x = lerp(x, mouseX, 0.2);
  y = lerp(y, mouseY, 0.2);

  text("You can't", x *.125+z, y *.125);
  text("You can't reach", x *.25-30+z, y *.25);
  text("You can't reach me", x *.375-60+z, y *.375);
  text("You can't reach me here", x * .50-90+z, y *.5);
  text("You can't reach me here nor there", x *.625-120+z, y *.625);
  text("You can't reach me here nor there I declare", x *.75-150+z, y *.75);
  text("You can't reach me that nor there I declare as fair", x *.875-180+z, y *.875);
  // (Mouse line)
  text("You also can't", x *1.125-240+z, y *1.125);
  text("You also can't reach", x *1.25-270+z, y *1.25);
  text("You also can't reach me", x *1.375-300+z, y *1.375);
  text("You also can't reach me here", x *1.50-330+z, y *1.50);
  text("You also can't reach me here nor there", x *1.625-360+z, y *1.625);
  text("You also can't reach me here nor there I declare", x *1.75-390+z, y *1.75);
  text("You also can't reach me here nor there I declare as fair", x *1.875-420+z, y *1.875);
  


  
}

function myInputEvent() {
  textin = this.value();
}


function mouseMoved() {
  value = mouseX % 200;
  value = mouseY % 200;
}

//Consider adding:
//Color picker for text and BG
//Text box for adding custom text
//Click/press (key) to save 
//Make entire vert text be centered on the X axis instead of top left crnr