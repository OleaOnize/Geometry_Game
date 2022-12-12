class Obstacle {
  constructor(ctx, x, y, width, height, type) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.imgSrc = {
      jumperNeonBlue: "/images/NEONBLUE.webp",
      jumperNeonViolet: "/images/NEONVIOLET.webp",
      jumper: "/images/BloqueMorado.jpg",
      killerSpikesTecho1: "/images/spike-techo.png",
      killerSpikesIce: "/images/Ice_Spikes.webp",
      killerFire: "/images/blue-fire-png-43392.png",
      pusher: "/images/light-push.png",
      portal: "/images/portal.png",
      arrowUp: "/images/arrowup.png",
      arrowDown: "/images/arrowDown.png",
      killerSpikesIceTecho: "/images/Ice_Spikes_techo.png",
      killerFireTecho: "/images/blue-fire-techo.png"
    }
    this.img.src = this.imgSrc[this.type];
    this.isReady = false;
    this.img.onload = () => {
      this.isReady = true;
    };
    this.vx = -12;
  }

  draw() {
    if (this.isReady) {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

  move(){
    this.x += this.vx;
  }

}
