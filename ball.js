class Ball
{
    constructor(x,y)
    {
        var options={
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,25,options);
              
        World.add(myworld,this.body);
    }

    display()
     {
         ellipseMode(RADIUS);
         ellipse(this.body.position.x,this.body.position.y,25,25);
     }   
    
}