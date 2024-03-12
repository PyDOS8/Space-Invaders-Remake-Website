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
            var attackDamage = 1;
            var ammoLabel = document.getElementById("AmmoLeftLabel");
            ammoLabel.innerText = this.ammo;
            function PlayerAnimation(){
                if(this.playerRight == true){
                    var player = document.getElementById("player").src;
                    this.player = "imgs/player/playerRight.jpg";
                }
                if(this.playerLeft == true){
                    var player = document.getElementById("player").src;
                    this.player = "imgs/player/playerLeft.jpg";
                }
                if(this.playerTop == true){
                    var player = document.getElementById("player").src;
                    this.player = "imgs/player/playerUp.jpg";
                }
                if(this.playerBottom == true){
                    var player = document.getElementById("player").src;
                    this.player = "imgs/player/playerDown.jpg";
                }
                if(this.GameOver == true){
                    var player = document.getElementById("player").src;
                    this.player = "imgs/player/playerDead.jpg";
                    this.GameOver = false;
                }   
            }
            function MovePlayerLeft(){
                if(!this.GameOver == true){
                    var playerX = parseInt(document.getElementById("player").style.left);
                    this.playerX -= 1
                    this.playerLeft = true;
                    if(this.playerRight == true || this.playerBottom == true || this.playerTop == true){
                        this.playerRight = false;
                        this.playerBottom = false;
                        this.playerTop = false;
                    }
                    this.playerAnimation();
                }else{
                    alert("You cannot move until the game has been reseted!");
                }
            }
            function MovePlayerRight(){
                if(!this.GameOver == true){
                    var playerX = parseInt(document.getElementById("player").style.left);
                    this.playerX += 1;
                    this.playerRight = true;
                    if(this.playerLeft == true || this.playerBottom == true || this.playerTop == true){
                        this.playerLeft = false;
                        this.playerBottom = false;
                        this.playerTop = false;
                    }
                    this.playerAnimation();
                }else{
                    alert("You cannot move because the game is over!");
                }
            }
            function MovePlayerUp(){
                if(!this.GameOver == true){
                    var playerY = parseInt(document.getElementById("player").style.top);
                    this.playerY -= 1;
                    this.playerTop = true;
                    if(this.playerLeft == true || this.playerBottom == true || this.playerRight == true){
                        this.playerLeft = false;
                        this.playerBottom = false;
                        this.playerRight = false;
                    }
                    this.PlayerAnimation();
                }else{
                    alert("You cannot move until the game has reset!");
                }
            }
            function MovePlayerDown(){
                if(!this.GameOver == true){
                    var playerY = parseInt(document.getElementById("player").style.bottom);
                    this.playerY += 1;
                    if(this.playerLeft == true || this.playerRight == true || this.playerTop == true){
                        this.playerLeft = false;
                        this.playerTop = false;
                        this.playerRight = false;
                    }
                    this.playerBottom = true;
                    this.playerAnimation();
                }else{
                    alert("You cannot move until the game has reset!");
                }
            }
            function GameOver(){
                    document.getElementById("player").style.display = "none";
                    document.getElementById("enemy").style.display = "none";
                    var GameOverHeader1 = document.createElement("h1");
                    this.GameOverHeader1.innerText = "Game Over";
                    this.GameOverHeader1.style.margin = "50%";
                    this.GameOverHeader1.style.color = "white";
                    document.body.appendChild(GameOverHeader1);
                    var GameOverButton = document.createElement("button");
                    this.GameOverButton.innerText = "Restart the Game";
                    this.GameOverButton.onclick = function(){
                        document.getElementById("enemy").style.display = "block";
                        document.getElementById("player").style.display = "block";
                        this.style.display = "none";
                        document.body.getElementById("GameOverHeader1").style.display = "none"; 
                        if(this.playerLeft == true || this.playerRight == true || this.playerUp == true || this.playerDown == true){
                            this.playerLeft = false;
                            this.playerRight = false;
                            this.playerDown = false;
                            this.playerUp = false;
                        } 
                        this.playerAnimation(); 
                    }
                    document.body.appendChild(GameOverButton);
            }
            function ShootUp(){
                if(!this.GameOver == true){
                    if(this.ammo > 0){
                        var bulletY = document.getElementById("player-bullet").top;
                        this.bulletY = "100%";
                        this.ammo = this.ammo -1;
                    }else{
                        var bullet = document.getElementById("player-bullet");
                        this.bullet.src = "imgs/weapons/missile";
                        this.bullet.top = "100%";
                    }
                    var ammoLabel = document.getElementById("AmmoLeftLabel");
                    this.ammoLabel.innerText = this.ammo;
                    this.checkIfBulletHitEnemy();
                }else{
                    this.GameOver();
                }
            }
            function shootDown(){
                if(this.ammo > 0){
                    var bulletY = document.getElementById("player-bullet").top;
                    this.bulletY = "-100%";
                    this.ammo = this.ammo-1;
                    this.checkIfBulletHitEnemy();
                }else{
                    var bullet = document.getElementById("player-bullet");
                    this.bullet.src = "imgs/weapons/missile.jpg";
                    this.bullet = "-100%";
                }
                var ammoLabel = document.getElementById("AmmoLeftLabel");
                this.ammoLabel.innerText = this.ammo;
                this.checkIfBulletHitEnemy();
            }
            function checkIfBulletHitPlayer(){
                var player = document.getElementById("player");
                var bullet = document.getElementById("player-bullet");
                if(!this.GameOver == true){
                    if(this.player.style.position == this.bullet.style.position){
                        if(this.bullet.src == "imgs/weapons/missile.jpg"){
                            this.player.src = "imgs/player/playerDead.jpg";
                        }else{
                            if(this.playerLives > 0){

                                this.playerLives = this.playerLives - enemy.attackDamage;
                            }else{
                                this.GameOver = true;
                                this.GameOver();
                                alert("Enemy won!");
                            }
                        }
                    }
                }else{
                    this.GameOver();
                }
            }
            function showPowerUp(){
                var powerup = ParseInt(Math.random() * 2);
                if(powerup == 0){
                    var powerupImg = document.getElementById("powerup").src;
                    powerupImg = "imgs/powerups/extraHealth.jpg";
                }
                if(powerup == 1){
                    var powerUpImg = document.getElementById("powerup").src;
                    powerUpImg = "imgs/powerups/extraDamage.jpg";
                }
                if(powerup == 2){
                    var powerUpImg = document.getElementById("powerup").src;
                    powerUpImg = "imgs/powerups/machineGun.jpg";
                }
                this.checkForPowerUpCollision();
            }
            function checkForPowerUpCollision(){
                var playerPos = document.getElementById("player").style.position;
                var powerUpPos = document.getElementById("powerup").style.position;
                if(playerPos == powerUpPos){
                    var powerUpImg = document.getElementById("powerup").src;
                    if(powerUpImg == "imgs/powerups/extraDamage.jpg"){
                        this.attackDamage += Math.random() * 12;
                    }
                    if(powerUpImg == "imgs/powerups/extraHealth.jpg"){
                        this.playerLives += Math.random() * 12;
                    }
                    if(powerUpImg == "imgs/powerups/machineGun.jpg"){
                        var playerWeapon = document.getElementById("player-bullet").src;
                        playerWeapon = powerUpImg;
                        this.attackDamage += 5;
                    }
                }
            }
        }
}
