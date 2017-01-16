var dots = [];

var value = 50;  //starting value of earthquake

//var img;
    

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    //create objects
    for (var i = 0; i < value*10; i++){
        dots.push(new QuakeDots());
    }
    
   // image(img, 0, 0);
}

function draw(){
    background(204);
    
 // touches[random(width/1.9,width/2.1),random(height/1, height/1.2)];
    textSize(16);
    text('SEE RESULTS', width/2, height/1.1);
    
    
   //MAGNITUDE TEXT 
    //textFont('Inconsolata');
    textSize(8);
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Magnitude", width - width/6, height/3.5);
    textSize(12);
    textAlign(CENTER);
    textStyle(BOLD);
    text(value, width - width/6, height/3);
    
    
    //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = value*2; 
    
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (x, y, r, r);
    
    //draw dots and given methods (actions)
    noStroke();
    fill(0);
    for (var i = 0; i < value*10; i++){
        dots[i].move();
        dots[i]. display();
    }
    
}

/*
function deviceShaken(){
        
    value = (accelerationX * accelerationY * accelerationZ)/3;
    magnitude = map(value, 30, 1000, 0, 10);
    
    text(magnitude, width - width/6, height/2); //COME SOPRA IN DRAW()
}
*/

function QuakeDots(){
    
    var d = dist(width/2,height/2,width/2+value,height/2);
    
    this.xdot = random(width/2 - d, width/2 + d); //according to ellipse area
    this.ydot = random(height/2 - d, height/2 + d); //according to ellipse area
    this.diameter = 3;
    this.speed = 1.5; //magnitude


this.move = function(){
    this.xdot += random(-this.speed,this.speed);
    this.ydot += random(-this.speed,this.speed);
}

this.display = function(){
    ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
};

    
/*    
function touchStarted(){
    img = loadImage('images/prova2.jpg');
}
 
*/
    
}
