class Ball{
    constructor(){
    this.x = 180;
    this.dx = 5;
    this.dy = 10;
    this.y = 600;
    this.radius = 15;
    }
    display(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x , this.y , this.radius, 0 , Math.PI * 2);
        ctx.fillStyle = "darkred"
        ctx.fill();
        ctx.closePath();
        }
}
 
