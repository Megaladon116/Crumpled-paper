class Paper
{
	constructor(x,y, r)
	{
        var options={
            isStatic : false,
            restitution : 0,
            friction : 0,
            density : 1.2
        }
		this.x=x;
		this.y=y;
		this.r=r;
		
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options);		
        
		World.add(world, this.body)
	

	}
	display()
	{
			var paperpos=this.body.position;
			push();
			translate(paperpos.x,paperpos.y);
			//var angle=this.body.angle;
			fill(255)
			//rotate(angle);
			imageMode(CENTER);
			image(this.image, 0, 0,this.r)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}