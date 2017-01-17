var dots = [];

var value = 400;  
 
function setup(){
    createCanvas(windowWidth, windowHeight);
  
    //create objects
    for (var i = 0; i < value*10; i++){
        dots.push(new QuakeDots());
    }   
   
}

function draw(){
    background(204);
    angleMode(DEGREES);
 
    textSize(height/30);
    text('SEE RESULTS', width/2, height - height/12);
    
    
   //MAGNITUDE TEXT 
    
    textSize(height/40);
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Magnitude", width/2, height - height/5);
    
    textSize(height/20);
    textAlign(CENTER);
    textStyle(BOLD);
    text(value,width/2, height - height/6.7);  
    
    //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = value; 
    
    noFill();
    stroke(0);
    strokeWeight(0.5);
    ellipse (x, y, r, r);
    
    //draw dots and given methods (actions)
    noStroke();
    fill(0);
    for (var i = 0; i < value*10; i++){
        dots[i].move();
        dots[i]. display();
  
    }  
    
}

function QuakeDots(){
    
    
    var a = random(0,360);
    var b = random(0,value);//r = value = 30
    var x = sin(a) * b; // mi dà un numero che va da -b a b
    var y = cos(a) * b; // mi dà un numero che va da -b a b
    var d = dist(width/2,height/2, width/2, height/2 + x/2);
    
    //var d = dist(width/2,height/2,width/2+value,height/2);
    
    this.xdot = random(width/2 - d, width/2 + d); //according to ellipse area
    this.ydot = random(height/2 - d, height/2 + d); //according to ellipse area
    this.diameter = 4;
    this.speed = 2; //according to magnitude
        

this.move = function(){
    this.xdot += random(-this.speed,this.speed);
    this.ydot += random(-this.speed,this.speed);
 
}

this.display = function(){
    if(this.xdot > width/2 + d || this.xdot < width/2 - d || this.ydot > height/2 + d || this.ydot < height/2 - d){
       this.xdot = random(width/2 - d, width/2 + d);
       this.ydot = random(height/2 - d, height/2 + d); 
       }
    ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
};
 
}
