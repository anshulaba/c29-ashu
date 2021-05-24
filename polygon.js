class polygon{
    constructor(x, y,r) {
        var options = {
                     
        }
        this.image=loadImage("polygon.png");
        this.body = Bodies.circle(x, y,r,options);
        this.r=r;
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
        pop();
      }
}