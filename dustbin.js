class dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dustbinwidth=200;
        this.dustbinheight=100;
        this.wallthickness=20;
        this.angle=0;
        this.image=loadImage("dustbingreen.png");
        this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true});
        this.leftbody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
        Matter.Body.setAngle(this.leftbody,this.angle);
        this.rightbody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
        Matter.Body.setAngle(this.rightbody,(-1*this.angle));
        World.add(world,this.leftbody);
        World.add(world, this.bottombody);
        World.add(world, this.rightbody);
    }
display(){
    var bottompos =this.bottombody.position;
    var leftpos =this.leftbody.position;
    var rightpos =this.rightbody.position;
    push();
    translate(leftpos.x, leftpos.y);
    angleMode(RADIANS);
    rotate(this.angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("green");
    fill("red");
    //rect(0, 0, this.wallthickness, this.dustbinheight);
    pop();
    push();
    translate(rightpos.x, rightpos.y);
    angleMode(RADIANS);
    rotate((-1*this.angle));
    rectMode(CENTER);
    strokeWeight(3);
    stroke("green");
    fill("red");
    //rect(0, 0, this.wallthickness, this.dustbinheight);
    pop();
    push();
    translate(bottompos.x, bottompos.y);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("green");
    fill("red");
    //rect(0, 0, this.dustbinwidth, this.wallthickness);
    image(this.image,0,-this.dustbinheight/2,this.dustbinwidth,this.dustbinheight);
    pop();
  }
}