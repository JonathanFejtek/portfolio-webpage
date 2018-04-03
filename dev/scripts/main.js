import {Test} from "./testmod";
import p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import {ParticleSystem, Particle} from "./particle-system";

let t = new Test(10);


$(function() {
    $('a').smoothScroll({
    });    
});

window.addEventListener("load", function(){
    new p5(sketch);  
    console.log("load");
})


const sketch3 = (p5) => {
    window.p5c = p5;

    let animate = true;
    let iter = 0;
    let container;
    let canvas;

    p5.setup = () => {
        container = document.getElementById("dynamic-backgroundC");
        let containerWidth = container.getBoundingClientRect().width;
        let containerHeight = container.getBoundingClientRect().height/4;   
        canvas = p5.createCanvas(containerWidth,containerHeight);
        canvas.parent('dynamic-backgroundC');
        canvas.id('p5-bg3')
        p5.frameRate(60);
        p5.colorMode(p5.HSB,360,100,100);

        window.addEventListener("resize",function(){
            let containerWidth = container.getBoundingClientRect().width;
            let containerHeight = container.getBoundingClientRect().height/4;
            p5.resizeCanvas(containerWidth,containerHeight);
        })

        window.addEventListener("scroll",function(){
            let containerTop = container.getBoundingClientRect().top;
            let containerBottom = container.getBoundingClientRect().bottom;

            let cH = container.getBoundingClientRect().height;
            let cW = container.getBoundingClientRect().width;
            animate = (containerBottom > 0 || containerTop > 0);
            //iter = window.scrollY/200;
            if(canvas.height !== cH ){
                p5.resizeCanvas(cW,cH);
            }
        }) 
        return true;
    }

    p5.draw = () => {
        if(animate){
            p5.colorMode(p5.RGB,255,255,255);
            p5.background(0,0,0);

            // for(let i = 0; i <= 1; i+= 1/(canvas.width/10)){
            //     let h = p5.map(p5.noise((iter)-i*20),0,1,0,100);
            //     p5.fill(h, h, h);
            //     p5.stroke(h,h,h);
            //     p5.rect(i*canvas.width,0,4,1*canvas.height);
            // }

            
            p5.noStroke();
            for(let i = 0; i <= 1; i+= 1/(canvas.width/25)){
                let h = p5.map(p5.noise((iter/2)-i),0,1,0,50);
                let f = p5.map(p5.noise((iter/2+1000)-i),0,1,0,255);
                p5.fill(230,230,230,f);
                p5.rect(i*canvas.width,0,25,h);
            }

            //p5.fill(241,0,200,50);
            p5.noStroke();
            for(let i = 0; i <= 1; i+= 1/(canvas.width/25)){
                let h = p5.map(p5.noise((iter/2)-i),0,1,0,80);
                let f = p5.map(p5.noise((iter/2+4000)-i),0,1,0,255);
                p5.fill(230,230,230,f);
                p5.rect(i*canvas.width,0,25,h);
            }
           
            p5.fill(255, 255, 255);
            p5.stroke(255,255,255);
            for(let i = 0; i <= 1; i+= 1/(canvas.width/25)){
                let h = p5.map(p5.noise((iter/2)-i),0,1,0,35);
                p5.rect(i*canvas.width,0,25,h);
            }


            p5.fill(255, 255, 255);
            p5.noStroke();
            for(let i = 0; i <= 1; i+= 1/(canvas.width/25)){
                let h = p5.map(p5.noise((iter/2)-i),0,1,0,35);
                p5.rect(i*canvas.width,1*canvas.height-h,25,1*canvas.height);
            }



            
        iter += 0.01;
        }

    }

}




const sketch2 = (p5) => {
    window.p5b = p5;

    let animate = true;
    let initResize = true;
    let iter = 0;
    let container;

    p5.hardResize = () => {
        let cH = container.getBoundingClientRect().height;
        let cW = container.getBoundingClientRect().width;

        if(canvas2.height !== cH && cW !== canvas.width){
            p5.resizeCanvas(cW,cH);
        }
    }

    p5.setup = () => {
        container = document.getElementById("dynamic-backgroundB");
        let containerWidth = container.getBoundingClientRect().width;
        let containerHeight = container.getBoundingClientRect().height;   
        window.canvas2 = p5.createCanvas(containerWidth,containerHeight);
        window.canvas2.parent('dynamic-backgroundB');
        window.canvas2.id('p5-bg2')
        p5.frameRate(60);
        p5.colorMode(p5.HSB,360,100,100);



        window.addEventListener("resize",function(){
            let containerWidth = container.getBoundingClientRect().width;
            let containerHeight = container.getBoundingClientRect().height;
            p5.resizeCanvas(containerWidth,containerHeight);
        })

        window.addEventListener("scroll",function(){
            let containerTop = container.getBoundingClientRect().top;
            let containerBottom = container.getBoundingClientRect().bottom;

            let cH = container.getBoundingClientRect().height;
            let cW = container.getBoundingClientRect().width;
            animate = (containerBottom > 0 || containerTop > 0);
            //iter = window.scrollY/400;
            if(canvas2.height !== cH ){
                p5.resizeCanvas(cW,cH);
            }
        }) 
        return true;
    }

    p5.draw = () => {
        if(animate){
            p5.colorMode(p5.RGB,255,255,255);
           // p5.background(255,255,255);
           p5.clear();
           
            p5.fill(24, 24, 24);
            p5.stroke(24, 24, 24);
            for(let i = 0; i <= 1; i+= 1/(canvas2.width/25)){
                let h = p5.map(Math.sin(5*(iter/2-i))+Math.sin(9*(iter/2-i*2)),-1,1,0,25);
                p5.rect(i*canvas2.width,0,25,h);
            }

            p5.fill(24, 24, 24,50);
            p5.noStroke();
            for(let i = 0; i <= 1; i+= 1/(canvas2.width/25)){
                let h = p5.map(Math.sin(5*(iter/2-i))+Math.sin(9*(iter/2-i*2)),-1,1,0,35);
                p5.rect(i*canvas2.width,0,25,h);
            }

            p5.fill(24, 24, 24,25);
            p5.noStroke();
            for(let i = 0; i <= 1; i+= 1/(canvas2.width/25)){
                let h = p5.map(Math.sin(5*(iter/2-i))+Math.sin(9*(iter/2-i*2)),-1,1,0,45);
                p5.rect(i*canvas2.width,0,25,h);
            }
    
            p5.fill(230, 230, 230);
            p5.stroke(230,230,230);
            //p5.bottom();
           // iter+= Math.PI/500;
        }

    }

    p5.bottom = () => {
        for(let i = 0; i <= 1; i+= 1/(canvas2.width/28)){
            p5.ellipse(i*canvas2.width,1*canvas2.height,60*Math.sin(iter*2-i),60*Math.sin(iter-i));

            let h = p5.map(Math.sin(1.5*(iter-i)),-1,1,1,45);
            p5.ellipse(i*canvas2.width,canvas2.height - h,30*Math.sin(iter*2-i),30*Math.sin(iter-i));

            h = p5.map(Math.sin(2*(iter-i)),-1,1,1,70);
            p5.ellipse(i*canvas2.width,canvas2.height - h,15*Math.sin(iter*5-i),15*Math.sin(iter-i));

            h = p5.map(Math.sin(2.5*(iter-i)),-1,1,1,85);
            p5.ellipse(i*canvas2.width,canvas2.height - h,10*Math.sin(iter*3-i),10*Math.sin(iter-i));
        }        
    }


}

const sketch = (p5) => {
    const canvasWidth = p5.windowWidth;
    const canvasHeight = p5.windowHeight;
    
    let particleSystem = new ParticleSystem(50);
    let T = 0;
    let rate = 32;

    let animate = true;
    let iter = 0;

    // make library globally available
    window.p5 = p5;
    window.p5.disableFriendlyErrors = true;
    // Setup function
    // ======================================
    p5.setup = () => {
        let container = document.getElementById("dynamic-background");
        let containerWidth = container.getBoundingClientRect().width;
        let containerHeight = container.getBoundingClientRect().height/3;
      window.canvas = p5.createCanvas(containerWidth, containerHeight,p5.P2D);
      window.canvas.parent('dynamic-background');
      window.canvas.id('p5-bg')
      //p5.frameRate(60);
      p5.colorMode(p5.HSB,360,100,100);

      window.addEventListener("resize",function(){
            let containerWidth = container.getBoundingClientRect().width;
            let containerHeight = container.getBoundingClientRect().height/3;
            console.log(containerWidth);
             p5.resizeCanvas(containerWidth,containerHeight);
      })

      window.addEventListener("scroll",function(){
        let containerHeight = container.getBoundingClientRect().height;
       animate = window.scrollY < containerHeight;
    })
  
    }
  
    // Draw function
    // ======================================
    p5.draw = function() {
        p5.background(250,0.2);
        p5.clear();

        if(animate){
            
            T+= Math.PI/rate;
            if(Math.random()>0.9){
                particleSystem.breed();
            }

            p5.noStroke();
            for(let i = 0; i < 8; i++){
                p5.push();
                p5.fill(210,40,p5.map(i,0,10,255,0),0.2);
                let w = p5.map(i,0,10,600,0);
                p5.ellipse(0.5*canvas.width,1.3*canvas.height,w-20*Math.sin((T/3)-i),w-20*Math.sin((T/3)-i));
                p5.pop();
            }

            particleSystem.display();
            particleSystem.setGlobalIterator(T);
                       
            p5.stroke('black');
            p5.fill('black');
            for(let i = 0; i < 1; i+= 1/(canvas.width/25)){
                let h = p5.map(p5.noise((i+1)*((T+1000)/40)),0,1,1,0.5)*canvas.height;
                p5.rect(i*canvas.width,h,25,h);
            }

            p5.noStroke();
            p5.fill(0,0.3);
            for(let i = 0; i < 1; i+= 1/(canvas.width/34)){
                let h = p5.map(p5.noise((i+1)*((T+1000)/45)),0,1,1,0.4)*canvas.height;
                p5.rect(i*canvas.width,h,34,h);
            }

            p5.noStroke();
            p5.fill(0,0.2);
            for(let i = 0; i < 1; i+= 1/(canvas.width/82)){
                let h = p5.map(p5.noise((i+1)*((T+1000)/50)),0,1,1,0.3)*canvas.height;
                p5.rect(i*canvas.width,h,82,h);
            }
        }

    }
}





