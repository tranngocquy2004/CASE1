class Ball{
    constructor(){
    this.x = 40;
    this.y = 40;
    this.radius = 20
    }
    display(canvas) {
        // let canvas = document.getElementById("game");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x , this.y , this.radius, 0 , Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        function diChuyenbong(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            x += 2;
            y += 2;
            requestAnimationFrame(diChuyenbong);
        }
    }
   
}
 
