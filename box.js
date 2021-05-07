class Box
{
    constructor(x,y,width,height)
    {
      var options={
        isStatic:false,
        friction:1,
        restitution:0.5,
        density:1,
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.w=width;
      this.h=height;
      World.add(myworld,this.body);
    }

    display()
    {
      rectMode(CENTER);
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      
      rect(0,0,this.w,this.h);
      pop();

    }



}