let canvas =document.querySelector("#myCanvas");
let ctx= canvas.getContext("2d")
class Personaje{
    constructor(x,y,angle,r){
        this.x=x
        this.y=y
        this.angle=angle
        this.r=r
    }
    dibujarse(){
ctx.translate(this.x,this.y);
ctx.rotate(this.angle*Math.PI)
ctx.beginPath();
ctx.arc(0,0,this.r,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(0,0,this.r/2,0.25*Math.PI,0.75*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(-15,-11,this.r/6,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(15,-11,this.r/6,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(-15,-11,this.r/15,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(15,-11,this.r/15,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(-6,0)
ctx.lineTo(7,6)
ctx.lineTo(-6,10)
ctx.stroke()
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(-18,0)
ctx.lineTo(-18,1)
ctx.stroke()
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(18,0)
ctx.lineTo(18,1)
ctx.stroke()
ctx.translate(-this.x,-this.y)
ctx.rotate(-this.angle*Math.PI/180)
    }
}
let Jeoirginha = new Personaje(200,100,0,50)
Jeoirginha.dibujarse();
let Pablito = new Personaje(200,300,45,30)
Pablito.dibujarse();
let Pablo = new Personaje(200,100,-45,90)
Jeoirginha.dibujarse();
let Josu = new Personaje(200,300,180,70)
Pablito.dibujarse();

let contenedor =  document.querySelector("#contenedor")
contenedor.innerHTML = "Jiorginha, Pablito, Josu, El Sam :D";
