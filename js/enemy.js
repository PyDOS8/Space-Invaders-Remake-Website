import {player} from "player.js";
class enemy{
    constructor(x,y){
        var enemyBullets;
        var EnemyIsABossFight;
        var AttackDamage = 1;
        var enemyBulletPosition; 
        function EnableBossMode(){
            if(!this.EnemyIsABossFight == true){
                this.EnemyIsABossFight = true;
                this.AttackDamage = 10;
                this.enemyBullets = 10;
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
            if(this.enemyBullets > 0){
                if(player.playerLives > 0){
                    var RandNum = ParseInt(Math.random() * 1);
                    if(RandNum == 0){
                        enemyBulletPoistion = document.getElementById("player").style.top;
                        document.getElementById("enemy").style.top = ParseInt(this.enemyBulletPosition);
                        if(player.player.playerLives > 0){
                            player.player.playerLives = ParseInt(player.playerLives) - ParseInt(this.AttackDamage);
                        }else{
                            player.player.GameOver();
                        }
                        this.enemyBullets = this.enemyBullets - 1;
                    }else{
                        var EnemyShipMalfunction = document.createElement("h1");
                        EnemyShipMalfunction.innerText = "The enemy's ship has malfunctioned!";
                        EnemyShipMalfunction.style.color = "white";
                        document.body.appendChild(EnemyShipMalfunction);
                    }
                }
        }
        function shootBulletDown(){
            if(this.enemyBullets > 0){
                if(player.playerLives > 0){
                    var RandNum = ParseInt(Math.random() * 1);
                    if(RandNum == 0){
                        this.enemyBulletPosition = document.getElementById("player").style.top;
                        document.getElementById("enemy-bullet").style.top = ParseInt(this.enemyBulletPosition);
                        if(player.playerLives > 0){
                            player.playerLives = ParseInt(player.playerLives) - ParseInt(this.AttackDamage);
                        }else{
                            player.player.GameOver();
                        }
                    }else{
                        var EnemyShipMalfunction = document.createElement("h1");
                        EnemyShipMalfunction.innerText = "The enemy's ship has malfunctioned!";
                        EnemyShipMalfunction.style.color = "white";
                        document.body.appendChild(EnemyShipMalfunction);
                    }
                    this.enemyBullets = this.enemyBullets - 1;
                }else{
                    player.player.GameOver();
                }
            }
        }
        function shootBulletLeft(){
            if(this.enemyBullets > 0){
                var RandNum = Math.Random() * 1;
                if(player.playerLives > 0){
                    if(RandNum == 0){
                        this.enemyBulletPosition = document.getElementById("player").style.left;
                        document.getElementById("enemy-bullet").style.left = ParseInt(this.enemyBulletPosition);
                    }else{
                        var EnemyShipMalfunction = document.createElement("h1");
                        EnemyShipMalfunction.innerText = "The enemy's ship has malfunctioned!";
                        EnemyShipMalfunction.style.color = "white";
                        document.body.appendChild(EnemyShipMalfunction);
                    }
                    this.enemyBullets = this.enemyBullets - 1;
                }else{
                    player.player.GameOver();
                }
        }
        function shootBulletRight(){
            if(this.enemyBullets > 0 && player.playerLives > 0){
                var RandNum = ParseInt(Math.random() * 1);
                if(RandNum == 0){
                    this.enemyPosition = document.getElementById("player").style.left;
                    document.getElementById("enemy-bullet").style.left = this.enemyPosition;
                    player.playerLives = player.playerLives - this.AttackDamage;                       
                }else{
                    var EnemyShipMalfunction = document.createElement("h1");
                    EnemyShipMalfunction.innerText = "The enemy's ship has malfunctioned!";
                    EnemyShipMalfunction.style.color = "white";
                    document.body.appendChild(EnemyShipMalFunction);
                }
            }
        }
        function CheckIfBulletHitEnemy(){
            var bullet = document.getElementById("player-bullet").style.position;
            var enemy = document.getElementById("enemy").style.position;
            var EnemyLives = ParseInt(Math.random() * 10);
            if(bullet == enemy){
                if(bullet.src == "imgs/weapons/missile.jpg"){
                    player.player.GameOver();
                    document.getElementById("enemy").src = "imgs/enemy/enemyDead.jpg";
                }else{
                    EnemyLives = EnemyLives - 1;
                }
            }
        }
     }
   } 
 } 
}
