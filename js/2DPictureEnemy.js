import {player} from "player.js";
class enemy{
    constructor(x,y){
        var enemyBullets;
        var EnemyIsABossFight;
        var AttackDamage;
        var enemyBulletPosition; 
        var enemyIsShootingUp;
        var enemyIsShootingDown;
        var enemyIsShootingRight;
        var enemyIsShootingLeft;
        var enemyIsLeft;
        var enemyIsRight;
        var enemyIsDown;
        var enemyIsUp;
        function EnableBossMode(){
            if(!this.EnemyIsABossFight == true){
                this.EnemyIsABossFight = true;
                this.AttackDamage = ParseInt(Math.random() * player.playerLives);
                this.enemyBullets = ParseInt(Math.random() * 100);
            }
        }
        function animateEnemy(){
            if(this.enemyIsShootingUp == true){
                document.getElementById("enemy").src = 'imgs/enemy/enemyShootUp.jpg';    
            }
            if(this.enemyIsShootingDown == true){
                document.getElementById("enemy").src = "img/enemy/enemyShootDown.jpg";
            }
            if(this.enemyIsShootingLeft == true){
                document.getElementById("enemy").src = "imgs/enemy/enemyShootLeft.jpg";
            }
            if(this.enemyIsShootingRight == true){
                document.getElementById("enemy").src = "imgs/enemy/enemyShootRight.jpg";
            }
            if(this.enemyIsUp == true){
                document.getElementById("enemy").src = "imgs/enemy/enemyUp.jpg";
            }
            if(this.enemyIsDown == true){
                document.getElementById("enemy").src = "imgs/enemy/enemyDown.jpg";
            }
            if(this.enemyIsLeft == true){
                document.getElementById("enemy").src = "imgs/enemy/enemyLeft.jpg";
            }
            if(this.enemyIsRight == true){
                document.getElementById("enemy").src = "imgs/enemy/enemyRight.jpg";
            }
            if(this.EnemyLives == 0){
                document.getElementById("enemy").src = "imgs/enemy/enemyDead.jpg";
            }
        }
        function DisableBossMode(){
            if(this.EnemyIsBossFight == true){
                this.EnemyIsABossFight = false;
                this.AttackDamage = 5;
                this.enemyBullets = 5;
            }
        }
        function ShootBulletUp(){
            this.enemyIsShootingUp = true;
            if(this.enemyIsShootingDown == true || this.enemyIsShootingRight == true || this.enemyIsShootingLeft){
                this.enemyIsShootingDown = false;
                this.enemyIsShootingUp = false;
                this.enemyIsShootingLeft = false;
                this.enemyIsShootingRight = false;
            }
            this.animateEnemy();
                if(!player.GameOver == true){
                    if(this.enemyBullets > 0){
                        if(player.playerLives > 0){
                            var RandNum = ParseInt(Math.random() * 1);
                            if(this.RandNum == 0){
                                this.enemyBulletPoistion = document.getElementById("player").style.top;
                                document.getElementById("enemy").style.top = ParseInt(this.enemyBulletPosition);
                                if(player.player.playerLives > 0){
                                    player.player.playerLives = ParseInt(player.playerLives) - ParseInt(this.AttackDamage);
                                }else{
                                    player.player.GameOver();
                                }
                                this.enemyBullets = this.enemyBullets - 1;
                            }else{
                                var EnemyShipMalfunction = document.createElement("h1");
                                this.EnemyShipMalfunction.innerText = "The enemy's ship has malfunctioned!";
                                this.EnemyShipMalfunction.style.color = "white";
                                document.body.appendChild(EnemyShipMalfunction);
                            }
                        }
                    }else{
                        player.GameOver();
                    }
                }
            }
            function shootBulletDown(){               
                if(this.enemyIsShootingUp == true || this.enemyIsShootingLeft == true || this.enemyIsShootingRight == true){
                    this.enemyIsShootingUp = false;
                    this.enemyIsShootingLeft = false;
                    this.enemyIsShootingRight = false;
                }
                this.animateEnemy();
                if(this.enemyBullets > 0){
                    if(!player.GameOver == true){
                        var RandNum = ParseInt(Math.random() * 1);
                        if(this.RandNum == 0){
                            this.enemyBulletPosition = document.getElementById("player").style.top;
                            document.getElementById("enemy-bullet").style.top = ParseInt(this.enemyBulletPosition);
                            if(player.playerLives > 0){
                                player.playerLives = ParseInt(player.playerLives) - ParseInt(this.AttackDamage);
                            }else{
                                player.player.GameOver();
                            }
                        }else{
                            var EnemyShipMalfunction = document.createElement("h1");
                            this.EnemyShipMalfunction.innerText = "The enemy's ship has malfunctioned!";
                            this.EnemyShipMalfunction.style.color = "white";
                            document.body.appendChild(EnemyShipMalfunction);
                        }
                        this.enemyBullets = this.enemyBullets - 1;
                    }else{
                        player.player.GameOver();
                    }
                    this.enemyIsShootingDown = true;
                }
        }
        function shootBulletLeft(){
            if(!player.GameOver == true){
                this.enemyIsShootingLeft = true;
                if(this.enemyIsShootingUp == true || this.enemyIsShootingRight == true || this.enemyIsShootingDown){
                        this.enemyIsShootingUp = false;
                        this.enemyIsShootingDown = false;
                        this.enemyIsShootingRight = false;                                                                                                                                                                                                                                                                               this.enemyIsShootingRight = false;
                }
                this.animateEnemy();
                if(this.enemyBullets > 0){
                    var RandNum = ParseInt(Math.random() *1);
                    if(player.playerLives > 0){
                        if(this.RandNum == 0){
                            this.enemyBulletPosition = document.getElementById("player").style.left;
                            document.getElementById("enemy-bullet").style.left = ParseInt(this.enemyBulletPosition);
                        }else{
                            var EnemyShipMalfunction = document.createElement("h1");
                            this.EnemyShipMalfunction.innerText = "The enemy's ship has malfunctioned!";
                            this.EnemyShipMalfunction.style.color = "white";
                            document.body.appendChild(EnemyShipMalfunction);
                        }
                        this.enemyBullets = this.enemyBullets - 1;
                        
                    }else{
                        player.GameOver();
                    }
                }
            }else{
                player.GameOver();
            }
        }
        function shootBulletRight(){
            if(!player.GameOver == true){
                if(this.enemyBullets > 0 && player.playerLives > 0){
                    var RandNum = ParseInt(Math.random() * 1);
                    if(this.RandNum == 0){
                        this.enemyPosition = document.getElementById("player").style.left;
                        document.getElementById("enemy-bullet").style.left = this.enemyPosition;
                        player.playerLives = player.playerLives - this.AttackDamage;                       
                    }else{
                        var EnemyShipMalfunction = document.createElement("h1");
                        this.EnemyShipMalfunction.innerText = "The enemy's ship has malfunctioned!";
                        this.EnemyShipMalfunction.style.color = "white";
                        document.body.appendChild(this.EnemyShipMalFunction);
                    }
                    this.enemyIsShootingRight = true;
                    if(this.enemyIsShootingDown == true || this.enemyIsShootingLeft == true || this.enemyIsShootingUp == true){
                        this.enemyIsShootingDown = false;
                        this.enemyIsShootingUp = false;
                        this.enemyIsShootingLeft = false;
                    }
                    this.animateEnemy();
                }
            }else{
                player.GameOver();
            }
        }
        function CheckIfBulletHitEnemy(){
            var bullet = document.getElementById("player-bullet").style.position;
            var enemy = document.getElementById("enemy").style.position;
            if(!player.GameOver == true){
                if(this.bullet == this.enemy){
                    if(document.getElementById("player-bullet").src == "imgs/weapons/missile.jpg"){
                        this.EnemyLives = 0;
                        player.player.GameOver();
                        document.getElementById("enemy").src = "imgs/enemy/enemyDead.jpg";
                    }else{
                        if(this.EnemyLives > 0){
                            this.EnemyLives = this.EnemyLives - player.attackDamage;
                        }else{
                            player.GameOver();
                            this.animateEnemy();
                        }
                    }
                }
            }else{
                player.GameOver();
            }
        }
        function showPowerUp(){
            var powerup = ParseInt(Math.random() * 1);
            if(powerup == 0){
                var powerupImg = document.getElementById("powerup").src;
                powerUpImg = "imgs/powerups/extraDamage.jpg"; 
            }
            if(powerup == 1){
                var powerupImg = document.getElementById("powerups").src;
                powerupImg = "imgs/powerups/machineGun.jpg";
            }
            this.checkForPowerUpCollision();
        }
        function checkForPowerUpCollision(){
            var playerPos = document.getElementById("player").style.position;
            var powerUpPos = document.getElementById("powerup").style.position;
            if(playerPos == powerUpPos){
                var powerUp = document.getElementById("powerup").src;
                if(powerUp == "imgs/powerups/extraDamage.jpg"){
                    this.attackDamage = Math.random() * player.playerLives;  
                }
                if(powerUp == "imgs/powerups.machineGun.jpg"){
                    var weapon = document.getElementById("enemy-bullet").src;
                    weapon = powerUp;
                    this.attackDamage += 5;
                }
            }
        }
    }
}
