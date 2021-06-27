class SlingShot{
    constructor(bodyA, pB){ //pB={x:100,y:50} --> pB.x/pB.y
        var options = {
            bodyA: bodyA,
            pointB: pB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);

        this.POINTB = pB //this.POINTB.x --> pB.x =100
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }

    display(){

        if(this.sling.bodyA){
        
            var pointA = this.sling.bodyA.position;
        
            strokeWeight(4); //thickness to the line
            line(pointA.x, pointA.y , this.POINTB.x , this.POINTB.y );
        }
    }
    
}

//if(false)-> if doesn't execute
//if(null)--> if(false)