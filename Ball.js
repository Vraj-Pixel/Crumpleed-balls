class Ball{
    constructor(x,y,radius){
           var ball_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
          }
          this.body=Bodies.circle(x,y,radius,ball_options);
          this.radius=radius;
          this.image=loadImage('Crumpled Paper.png');
          World.add(world,this.body);
         
    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
        
    }
}