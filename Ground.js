class Ground
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=width;
        this.h=height;
        World.add(myworld,this.body);
    }

    display()
    {
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}