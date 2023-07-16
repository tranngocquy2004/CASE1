class Paddle{
    constructor(){
        this.width = 200;
        this.height =  20;
        this.x = 200;
        this.y = 770;
        this.speed = 30;
    }
    display(canvas){
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath()
    }
}
