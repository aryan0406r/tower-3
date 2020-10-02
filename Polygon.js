class Polygon {
    constructor(x, y, r) {
        var options = {
            isStatic : false,
            restitution: 0,
            friction: 0, 
            density: 0.5
        }

        this.image = loadImage("images/polygon.png");
        
        this.body = Bodies.circle(x, y, r / 1.5, options);
        this.r = r;
        
        World.add(world, this.body);
        }
        
        display() {
            var pos = this.body.position;
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, this.r * 2, this.r * 2);
        }
    }