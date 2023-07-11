let canvas = document.getElementById("game");
let context = canvas.getContext('2d')
let ball = {
    x: 15,
    y: 15,
    dx: 5,
    dy: 3,
    radius: 15,
}
let paddle = {
    width: 150,
    height: 10,
    x: 150,
    y: canvas.height - 10,
    speed : 35
}
let gameOver = false;
// sự kiện gọi tới phím trái phải của bàn phím trái = 39 phải = 37
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) {
            paddle.x -= paddle.speed;
        }else if(event.keyCode == 39) {
            paddle.x += paddle.speed;
        }
    });
 
   function veBong(){
    context.beginPath();
    context.arc(ball.x , ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = "#007457"
    context.stroke()
    context.fill()
    context.closePath();
   }
   function drawPaddle(){
    context.beginPath()
    context.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    context.fill()
    context.stroke()
    context.closePath()
   }
   function vaCham(){
    if(ball.x + ball.radius >= paddle.x && ball.x + ball.radius <= paddle.x + paddle.width && ball.y + ball.radius >= canvas.height - paddle.height) {
        ball.dy = -ball.dy
    }
    // Nếu toạ độ x của bóng + bán kính bóng >= 
}
   function xuliBong(){
    if(ball.x < ball.radius || ball.x > canvas.width - ball.radius){
        ball.dx = -ball.dx
    }
    if(ball.y < ball.radius ){
        ball.dy = -ball.dy
    }
   }
   function chuyenDong(){
    ball.x += ball.dx;
    ball.y += ball.dy;
   }
   function draw(){
    if(!gameOver) {
        context.clearRect(0 , 0 , canvas.width , canvas.height);
        veBong()
        xuliBong()
        if( ball.y > canvas.height - ball.radius){
            gameOver = true
        }
        chuyenDong()
        vaCham()
        drawPaddle()
        if(paddle.x < 0 ) {
            paddle.x = 0
        } else if(paddle.x > canvas.width - paddle.width) {
            paddle.x = canvas.width - paddle.width
        }
        requestAnimationFrame(draw);
} else {
    alert('BẠN NHƯ CÁI LỐP XE VẬY!! HƠIII NON')
}
}      
draw()

