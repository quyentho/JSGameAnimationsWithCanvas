const canvas = document.getElementById("canvas1");
const select = document.getElementById("animations");
let playerState = "idle";
select.addEventListener("change", (e) => {
  playerState = e.target.value;
});
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrame = 5;
const frames = {
  idle: { max: 6, row: 0 },
  jump: { max: 6, row: 1 },
  fall: { max: 8, row: 2 },
  run: { max: 8, row: 3 },
  dizzy: { max: 10, row: 4 },
  sit: { max: 4, row: 5 },
  roll: { max: 6, row: 6 },
  bite: { max: 6, row: 7 },
  ko: { max: 11, row: 8 },
  getHit: { max: 3, row: 9 },
};

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  const frameRunner =
    Math.floor(gameFrame / staggerFrame) % frames[playerState].max;
  //   if (gameFrame % staggerFrame === 0) {
  //     frameX = (frameX + 1) % 6;
  //   }
  const currentFrameX = frameRunner * spriteWidth;
  const currentFrameY = frames[playerState].row * spriteHeight;
  ctx.drawImage(
    playerImage,
    currentFrameX,
    currentFrameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
