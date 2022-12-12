class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    this.img = new Image();
    this.img.src = "/images/fondo-neon-2.jpg";
    this.isReady = false;
    this.img.onload = () => {
      this.isReady = true;
    };
    this.isMoving = true;
    this.vx = -12;
  }

  draw() {
    if (this.isReady) {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      this.ctx.drawImage(
        this.img,
        this.x + this.ctx.canvas.width,
        this.y,
        this.width,
        this.height
      );
    }
  }

  move(){
    this.x += this.vx;
    if (this.x + this.ctx.canvas.width <= 0) {
        this.x = 0;
    }
 
  }

  }

