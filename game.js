class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.bg = new Background(this.ctx);
    this.intervalId = null;
    this.player = new Player(this.ctx, 400, this.canvas.height - 180, 80, 80);
    this.obs = [];
    this.isPaused = false;
    this.scoreboard = 0;
    this.counter = 0;
  }

  start() {
    if (this.obs.length === 0) {
      this.obs = obstacles.map((obsData) => {
        const { x, y, width, height, type } = obsData;
        return new Obstacle(
          this.ctx,
          this.ctx.canvas.width + x,
          y,
          width,
          height,
          type
        );
      });
    }
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.score();
      this.move();
      this.checkCollisions();
      if (this.scoreboard >= 100) {
        this.win();
      }
      this.counter++;
      if (this.scoreboard === 28) {
        this.player.isSquare = false;
      }
      if (this.scoreboard === 46) {
        this.player.isSquare = true;
      }
      if (this.counter % 46 === 0) {
        this.scoreboard++;
      }
    }, 1000 / 60);
  }

  draw() {
    this.bg.draw();
    this.player.draw();
    this.obs.forEach((obstacle) => obstacle.draw());
  }

  move() {
    this.bg.move();
    this.player.move();
    this.obs.forEach((obstacle) => obstacle.move());
  }

  onKeyDown(event) {
    this.player.onKeyDown(event);
    if (this.isPaused === false && event.keyCode === 18) {
      clearInterval(this.intervalId);
      this.ctx.fillStyle = "rgba(172, 10, 238, 0.4)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.textAlign = "center";
      this.ctx.font = "40px 'Rubik Distressed', cursive";
      this.ctx.fillText(
        `---PAUSED.---`,
        this.canvas.width / 2,
        this.canvas.height / 2
      );
      gameMusic.pause();
      this.isPaused = true;
    }
    if (event.keyCode === 88 && this.isPaused === true) {
      gameMusic.play();
      this.start();
      this.isPaused = false;
    }
  }

  checkCollisions() {
    this.obs.forEach((obstacle) => {
      this.player.isColliding(obstacle);
      if (this.player.isDead) {
        this.gameOver();
      }
    });
  }

  gameOver() {
    clearInterval(this.intervalId);
    this.counter = 0;
    gameMusic.pause();
    gameMusic.currentTime = 0;
    instructions.classList.add("hidden");
    startBtn.classList.remove("hidden");
    startBtn.classList.add("again");
    again.classList.remove("hidden");
    this.ctx.fillStyle = "rgba(0, 0, 0)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgb(255, 255, 255)";
    this.ctx.font = "40px 'Rubik Distressed', cursive";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      `GAME OVER.`,
      this.canvas.width / 2,
      this.canvas.height / 2
    );
    this.ctx.fillText(
      `SCORE:  ${this.scoreboard}` + ` %`,
      this.canvas.width / 2,
      this.canvas.height / 2 + 200
    );
    this.obs = [];
    this.player.isDead = false;
    this.player.isNoneGrav = false;
    this.player.isSquare = true;
    this.player.isJumping = false;
    this.player.y = this.canvas.height - 180;
    this.player.x = 400;
  }

  score() {
    this.ctx.font = "50px 'Rubik Distressed', cursive";
    this.ctx.fillStyle = "#0AEEB0";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Progress: " + `${this.scoreboard}` + "%", 800, 100);
  }

  win() {
    this.ctx.fillStyle = "rgba(0, 0, 0)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgb(255, 255, 255)";
    this.ctx.font = "40px 'Rubik Distressed', cursive";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      `OMG! YOU ARE A F**KING PRO`,
      this.canvas.width / 2,
      this.canvas.height / 2
    );
    instructions.classList.add("hidden");
  }

  clear() {
    this.obs = this.obs.filter((obstacle) => obstacle.x + obstacle.width > 0);
  }
}
