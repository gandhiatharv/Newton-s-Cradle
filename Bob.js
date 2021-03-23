class Bob {
    constructor (x, y){
        var options = {
            restitution:0.9, 
            friction:0.9, 
            density:0.3
        }
    this.radius = 12; 
    this.body = Bodies.circle(x, y, this.radius, options); 
    this.x = x; 
    this.y = y;

    World.add(world, this.body)
    }

    display() {
        push(); 
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS); 
        fill("hotpink"); 
        ellipse(0, 0, this.radius*3.2, this.radius*3); 
        pop(); 
    }

}