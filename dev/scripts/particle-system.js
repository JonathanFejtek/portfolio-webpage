export class ParticleSystem{
    constructor(maxParticles){
        this.particles = [];
        this.maxParticles = maxParticles;
        this.globalIterator = 0;
    }

    display(){
        for(let i = 0; i < this.particles.length; i++){
            // if(this.particles[i]){
                this.particles[i].setIterator(this.globalIterator);
                this.particles[i].computeA();
                this.particles[i].display();
                for(let j = i; j < this.particles.length; j++){
                    var distance = p5.dist(this.particles[i].x,this.particles[i].y,this.particles[j].x,this.particles[j].y);
                    if(distance < 0.09){
                        p5.push();
                        p5.stroke(0,p5.map(distance,0,0.09,5,0)*p5.map((this.particles[i].age),400,0,1,0));
                        p5.line(this.particles[i].x*canvas.width,this.particles[i].y*canvas.height,
                        this.particles[j].x*canvas.width,this.particles[j].y*canvas.height);
                        p5.pop();
                    }
                }
            // }

            
            
        }
    }
    
    setGlobalIterator(i){
        this.globalIterator = i;
    }

    remove(particle){
        const index = this.particles.indexOf(particle);
        if (index !== -1) {
            this.particles.splice(index, 1);
        }
    }

    breed(){
        let p = new Particle(Math.random(),1,10);
        p.setForce(0,-0.001);
        p.parentSystem = this;
        this.particles.push(p);
    }

    addParticle(p){
        this.particles.push(p);
    }

}

export class Particle{
    constructor(x,y,r){
        this.x = x;
        this.y = y;

        this.velX;
        this.velY;

        this.accX;
        this.accY;
        this.iterator = 0;

        this.r = r;
        this.initR = r;
        this.age = 400;
        this.breedAge = Math.floor(Math.random()*250);
        
        this.breed = Math.random() > 0.90;

        this.amp = Math.random()*6;
        this.freq = Math.random()*3;
        this.phase = Math.random()*Math.PI;

        this.parentSystem;
    }

    setIterator(i){
        this.iterator = i;
    }

    burst(){
        if(this.parentSystem){
            for(let i = 0; i < 6;i++){
                let p = new Particle(this.x,this.y,this.r+2);
                p.age = this.age - 10;
                p.setForce(Math.sin(i*((Math.PI*2)/8))/1000,Math.cos(i*((Math.PI*2)/8))/1000);
                p.parentSystem = this.parentSystem;
                p.breed = false;
                this.parentSystem.addParticle(p);
            }
        }

    }

    computeA(){
        this.x+= p5.map(Math.sin(this.freq*(this.iterator-this.phase)),-1,1,-0.0009,0.0009);
        this.y+= this.velY;
        this.age--;

        // if(this.breed && this.breedAge == this.age){
        //     this.burst();
        // }


        if(this.age <= 0){
            if(this.parentSystem){
                this.parentSystem.remove(this);
            }
        }
        this.r = p5.map(this.age,400,0,this.initR,0.1);
    }

    computeB(){

    }

    display(){

        p5.push();
        p5.fill(0,p5.map(this.age,400,0,1.5,0.0));
        p5.noStroke();
        p5.ellipse(this.x*canvas.width,this.y*canvas.height,this.r,this.r);
        p5.pop();       
    }

    setForce(x,y){
        this.velX = x;
        this.velY = y;
    }
}