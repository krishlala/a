var capture;

function setup() {
  createCanvas(displayWidth, displayHeight);
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }    
    //video: {
      //facingMode: "user"
    //} 
  };
  capture = createCapture(constraints);
  
  capture.hide();
}


function draw() {
 image(capture, 0, 0);
  filter(INVERT);
}

function take_snapshot() {
    save("myImg.png");
}
