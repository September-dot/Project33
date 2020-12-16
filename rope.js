class Rope {
    constructor(bodyA , pointB , length , stiffness){
    
        var options={
            
    bodyA:bodyA,
    pointB:pointB,
    length:length,
    stiffness:stiffness,
    
        }
    this.rope = Constraint.create(options)
    this.pointB = pointB
    
    
    World.add(world , this.rope);
    
    }
    display(){
        if(this.rope.bodyA){
    var posA = this.rope.bodyA.position;
    var posb = this.pointB
    strokeWeight(3)
    stroke(48,23,8)
    line(posA.x , posA.y,posb.x , posb.y)
    line(posA.x , posA.y , posb.x , posb.y)
            }
    }
    fly(){
    this.rope.bodyA = null
    
    }
    
    }