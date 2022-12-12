class Player {
  constructor(ctx, x, y, width,height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.gravity = 2.5;
    this.img = new Image();
    this.height = height;
    this.isReady = false;
    this.img.onload = () => {
      this.isReady = true;
    };
    this.isSquare = true;
    this.horizontalFrames = 8;
    this.verticalFrames = 1;
    this.xFrame = 0;
    this.yFrame = 0;
    this.speed = 0;
    this.tick = 0;
    this.isJumping = false;
    this.prevY = this.y;
    this.isDead = false;
    this.isLookingUp = true;
    this.isNoneGrav = false;

    this.maxY = this.ctx.canvas.height - 180 - this.height;
    this.minY = 173;
    this.timeoutId = null;
    this.isActiveCollision = false;
  }

  draw() {
    if (this.isReady && this.isSquare) {
      this.img.src = "/images/Square (10).png";
      this.ctx.drawImage(
        this.img,
				this.img.width / this.horizontalFrames * this.xFrame,
				this.img.height / this.verticalFrames * this.yFrame,
				this.img.width / this.horizontalFrames,
				this.img.height / this.verticalFrames,
				this.x,
				this.y,
				this.width,
				this.height
      );
      this.tick++;
    } else {
      this.img.src ="/images/ship.png";
      this.ctx.drawImage(
        this.img,
				this.x,
				this.y, 
				this.width,
				this.height
      )
    }
  }

  move() {
    console.log(this.isNoneGrav);
    if (!this.isSquare){  //NAVE
      this.speed += 0.8;
      this.y += this.speed;
      if (this.y >= this.maxY) {
        this.y = this.maxY; 
      }
      if (this.y <= this.minY){
        this.y = this.minY + 1;
      }
    } else if (this.isSquare && !this.isNoneGrav){ //CUBO NORMAL
      this.speed += this.gravity;
      this.prevY = this.y;
      this.y += this.speed;
      if (this.y <= this.minY){
        this.y = this.minY + 1;
      }
      if (this.y >= this.maxY) {
        if (this.isJumping) {
          this.isLookingUp = !this.isLookingUp;
        }
        this.y = this.maxY;
        this.isJumping = false;
      }
  
      if (!this.isJumping){
        if (this.isLookingUp) {
          this.xFrame = 0;
        } else {
          this.xFrame = 4;
        }
      } else {
        if (this.tick % 6 === 0) {
          this.xFrame++;
          if (this.xFrame >= this.horizontalFrames) {
            this.xFrame = 0;
          }
        }
      }
    } else if (this.isSquare && this.isNoneGrav){ 
      //console.log(this.isActiveCollision);
      //console.log("hay colision")//CUBO SIN GRAVEDAD
      this.speed -= this.gravity;
      this.prevY = this.y;
      this.y += this.speed;
      if (this.y <= this.minY) {
        if (this.isJumping) {
          this.isLookingUp = !this.isLookingUp;
        }
        this.y = this.minY;
        this.isJumping = false;
      }
  
      if (!this.isJumping){
        if (this.isLookingUp) {
          this.xFrame = 0;
        } else {
          this.xFrame = 4;
        }
      } else {
        if (this.tick % 6 === 0) {
          this.xFrame++;
          if (this.xFrame >= this.horizontalFrames) {
            this.xFrame = 0;
          }
        }
      }
    }
    
  }

  onKeyDown(event) {
    if(event.keyCode === 32 && !this.isSquare){
      this.speed = -12;
      // this.prevY = 0;
      // this.y -= 1;
    } else if (event.keyCode === 32 && !this.isJumping && !this.isNoneGrav) {
      this.y -= 1;
      this.isJumping = true;
      this.speed = -30;
    }else if (event.keyCode === 32 && !this.isJumping && this.isNoneGrav) {
      this.y += 1;
      this.isJumping = true;
      this.speed = +30;
    }
  }

  isColliding(obstacle) {
    // //console.log(this.isActiveCollision);
    const treshold = 100;
    const tresholdCol = 10;
    if (this.x + this.width - tresholdCol >= obstacle.x
      && this.x  +tresholdCol<= obstacle.x + obstacle.width
      && this.y + this.height >= obstacle.y +tresholdCol
      && this.y - tresholdCol<= obstacle.y + obstacle.height) {
        if((obstacle.type === "pusher" && this.x + this.width >= obstacle.x + treshold)) {
          this.y -= 1;
        this.isJumping = true;
        this.speed = -40;
        } else if ((obstacle.type === "jumperNeonBlue" || obstacle.type === "jumper" || obstacle.type ==="jumperNeonViolet" )  && this.prevY + this.height <= obstacle.y +tresholdCol && !this.isNoneGrav) {
          // hay top collision
          this.speed = 0; //esto es para que no se acelere con la gravedad siempre que estés subido a un obstaculo jumper
          this.maxY = obstacle.y - this.height +tresholdCol;
          this.y = this.maxY;
          this.isActiveCollision = true;
          clearTimeout(this.timeoutId);
          this.timeoutId = setTimeout(() => {
            this.isActiveCollision = false;
          }, 0);
          //NONEGRAV----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        } else if (this.prevY - this.height >= obstacle.y - tresholdCol && this.isNoneGrav && (obstacle.type === "jumperNeonBlue" || obstacle.type === "jumper" || obstacle.type ==="jumperNeonViolet" )) {
          this.speed = 0; 
          this.minY = obstacle.y + obstacle.height -tresholdCol;
          this.y = this.minY;
          this.isActiveCollision = true;
          clearTimeout(this.timeoutId);
          this.timeoutId = setTimeout(() => {
            this.isActiveCollision = false;
          }, 0);

        } else if ((obstacle.type !== "pusher" && obstacle.type !== "portal" && obstacle.type !== "arrowUp" && obstacle.type !== "arrowDown")){
          // no hay top collision pero hay collision
          this.isDead = true;
         

        } else if ((obstacle.type === "arrowUp")){
         
          this.speed = -20;
          this.isNoneGrav = true;
          
        } else if ((obstacle.type === "arrowDown")){
          this.speed = +20;
          this.isNoneGrav = false;
        }
    }
    if (!this.isActiveCollision) {
      this.maxY = this.ctx.canvas.height - 180 - this.height;
      this.minY = 173;
    }
 }
  }
