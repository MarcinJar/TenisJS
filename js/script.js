const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500; 

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddelHeight = 100;
const paddelWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 3;
let ballSpeedY = 3;

function player() {
    ctx.fillStyle = '#7FFF00';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}

function ai() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);    
}

function ball() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(ballX, ballY, ballSize, ballSize)
    
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    
    if (ballY <= 0 || ballY + ballSize >= ch) {
        if (ballSpeedY < 0) {
            ballSpeedY = ballSpeedY - 0.1;
        }
        else {
            ballSpeedY = ballSpeedY  + 0.1;
        }
        
        ballSpeedY = -ballSpeedY;
        
        console.log(ballSpeedY);
    }
    
    if (ballX <= 0 || ballX + ballSize >= cw) {
        if (ballSpeedY < 0) {
            ballSpeedX = ballSpeedX - 0.1;
        }
        else {
            ballSpeedX = ballSpeedX + 0.1;
        }
        
        ballSpeedX = -ballSpeedX;
    }
}

function table() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
    
    for (let linePositio = 20; linePositio < ch; linePositio += 30) {
        ctx.fillStyle = "gray";
        ctx.fillRect(cw / 2 - lineWidth / 2, linePositio, lineWidth, lineHeight);
    }
}

function game() {
    table()
    ball()
    player()
    ai()
}

setInterval(game, 1000 / 60);