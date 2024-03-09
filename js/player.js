class player{
        constructor(x="", y=""){
            var playerLives = 10;
            var GameOver = false;
            var playerLeft = false;
            var playerRight = false;
            var playerBottom = false;
            var playerTop = false;
            var ammo = 10;
            var playerWon = false;
            var ammoLabel = document.getElementById("AmmoLeftLabel");
            ammoLabel.innerText = this.ammo;
            function MovePlayerLeft(){
                var playerX = parseInt(document.getElementById("player").style.left);
                playerX -= 1
                this.playerLeft = true;
                if(this.playerRight == true || this.playerBottom == true || this.playerTop == true){
                    this.playerRight = false;
                    this.playerBottom = false;
                    this.playerTop = false;
                }
            }
            function MovePlayerRight(){
                var playerX = parseInt(document.getElementById("player").style.left);
                playerX += 1;
                this.playerRight = true;
                if(this.playerLeft == true || this.playerBottom == true || this.playerTop == true){
                    this.playerLeft = false;
                    this.playerBottom = false;
                    this.playerTop = false;
                }
            }
            function MovePlayerUp(){
                var playerY = parseInt(document.getElementById("player").style.top);
                playerY -= 1;
                this.playerTop = true;
                if(this.playerLeft == true || this.playerBottom == true || this.playerRight == true){
                    this.playerLeft = false;
                    this.playerBottom = false;
                    this.playerRight = false;
                }
            }
            function MovePlayerDown(){
                var playerY = parseInt(document.getElementById("player").style.bottom);
                playerY += 1;
                if(this.playerLeft == true || this.playerRight == true || this.playerBottom == true){
                    this.playerLeft = false;
                    this.playerRight = false;
                    this.playerBottom = false;
                }
            }
            function GameOver(){
                    document.getElementById("player").style.display = "none";
                    document.getElementById("enemy").style.display = "none";
                    var GameOverHeader1 = document.createElement("h1");
                    GameOverHeader1.innerText = "Game Over";
                    GameOverHeader1.style.margin = "50%";
                    GameOverHeader1.style.color = "white";
                    document.body.appendChild(GameOverHeader1);
                    var GameOverButton = document.createElement("button");
                    GameOverButton.innerText = "Restart Game";
                    GameOverButton.onclick = function(){
                        document.getElementById("enemy").style.display = "block";
                        document.getElementById("player").style.display = "block";
                        this.style.display = "none";
                        document.body.getElementById("GameOverHeader1").style.display = "none";   
                    }
                    document.body.appendChild(GameOverButton);
            }
            function ShootUp(){
               if(this.ammo > 0){
                    var bulletY = document.getElementById("player-bullet").top;
                    bulletY = "100%";
                    this.ammo = this.ammo -1;
               }else{
                    var bullet = document.getElementById("player-bullet");
                    bullet.src = "imgs/weapons/missile";
                    bullet.top = "100%";
               }
               var ammoLabel = document.getElementById("AmmoLeftLabel");
               ammoLabel.innerText = this.ammo;
               this.checkIfBulletHitEnemy();
            }
            function shootDown(){
                if(this.ammo > 0){
                    var bulletY = document.getElementById("player-bullet").top;
                    bulletY = "-100%";
                    this.ammo = ammo-1;
                    this.checkIfBulletHitEnemy()
                }else{
                    var bullet = document.getElementById("player-bullet");
                    bullet.src = "imgs/weapons/missile.jpg";
                    bullet = "-100%";
                }
                var ammoLabel = document.getElementById("AmmoLeftLabel");
                ammoLabel.innerText = this.ammo;
                this.checkIfBulletHitEnemy();
            }
            function checkIfBulletHitPlayer(){
                var player = document.getElementById("player");
                var bullet = document.getElementById("player-bullet");
                if(player.style.left == bullet.style.left || player.style.right == bullet.style.right || player.style.top == bullet.style.top || player.style.bottom == bullet.style.bottom){
                    if(bullet.src == "imgs/weapons/missile.jpg"){
                        player.src = "imgs/player/playerDead.jpg";
                    }else{
                        if(this.playerLives > 0){
                            this.playerLives = playerLives - 1;
                        }else{
                            player.src = "imgs/player/playerDead.jpg";
                            alert("Enemy won!");
                            this.GameOver();
                        }
                    }
                }
            }
        }
    }
