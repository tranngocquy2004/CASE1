class Ball{
    constructor(){
    this.x = 40;
    this.dx = 8;
    this.dy = 8;
    this.y = 40;
    this.radius = 20;
    }
    display(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x , this.y , this.radius, 0 , Math.PI * 2);
        ctx.fillStyle = "red"
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        }
}
 
