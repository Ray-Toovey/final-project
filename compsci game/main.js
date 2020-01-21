//setup canvas and graphics context
let cnv = document.getElementById('mycanvas');
let ctx = cnv.getContext("2d");
cnv.width = 900;
cnv.height = 600;

document.getElementById("mycanvas").addEventListener('click', restart);

ctx.fillStyle = "#eccca2";
ctx.fillRect(0, 0, 900, 700);
ctx.font = "42px Arial";
ctx.fillStyle = "black";
ctx.fillText('CLICK TO BEGIN', 300, 300);
ctx.fillStyle = "black";


function restart() {
    //variables
    //Global vars
    let hasPowerup1 = false;
    let hasPowerup2 = false;
    let powerupImage1;
    let powerupImage2;
    let powerNum1;
    let powerNum2;

    //misc.
    let redWin = document.getElementById('pic1');
    let blueWin = document.getElementById('pic2');
    let healthImg = document.getElementById('pic3');
    let laserImg = document.getElementById('pic4');
    let speedImg = document.getElementById('pic5');
    let scatterImg = document.getElementById('pic6');
    let laser1active = false;
    let laser1Animate = false;
    let laser2active = false;
    let laser2Animate = false;
    let scatter1active = false;
    let scatter2active = false;
    let speed1active = false;
    let speed2active = false;
    //player 1
    let player1 = {
        x: 255,
        y: 300,
        L: 200,
        P: 0,
    }

    //bullet 1
    let Bul1X = player1.x;
    let Bul1aX = player1.x;
    let Bul1bX = player1.x;
    let Bul1Y = player1.y;
    let Bul1aY = player1.y;
    let Bul1bY = player1.y;
    let bullet1Animate = false;
    let bullet1aAnimate = false;
    let bullet1bAnimate = false;

    //player 2
    let player2 = {
        x: 675,
        y: 300,
        L: 200,
        P: 0,
    }

    //bullet 2 
    let Bul2X = player2.x;
    let Bul2aX = player2.x;
    let Bul2bX = player2.x;
    let Bul2Y = player2.y;
    let Bul2aY = player2.y;
    let Bul2bY = player2.y;
    let bullet2Animate = false;
    let bullet2aAnimate = false;
    let bullet2bAnimate = false;

    //animation
    requestAnimationFrame(loop);
    function loop() {

        //update variables
        //bullet 1
        if (Bul1X >= 900) {
            bullet1Animate = false;
        }
        if (Bul1aX >= 900) {
            bullet1aAnimate = false;
        }
        if (Bul1bX >= 900) {
            bullet1bAnimate = false;
        }
        //bullet 2
        if (Bul2X <= 0) {
            bullet2Animate = false;
        }
        if (Bul2aX <=0) {
            bullet2aAnimate = false;
        }
        if (Bul2bX <=0) {
            bullet2bAnimate = false;
        }
        //draw background
        ctx.fillStyle = "#eccca2";
        ctx.fillRect(0, 0, 900, 700);

        //draw border
        ctx.fillStyle = "black";
        for (let o = -4; o <= 2000; o += 45) {
            ctx.fillRect(445, 0 + o, 10, 30);
        }
        if (laser1Animate) {
            ctx.fillStyle = "red";
            ctx.fillRect(player1.x - 30, player1.y, 900, 7)
        }
        if (laser2Animate) {
            ctx.fillStyle = "red";
            ctx.fillRect(player2.x - 30, player2.y, -900, 7)
        }
        if (bullet1Animate) {

            //draw a bullet
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(Bul1X += 8, Bul1Y, 10, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            Bul1X = player1.x;
            Bul1Y = player1.y;
        }
        if (bullet1aAnimate) {
            //draw bullet 1a
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(Bul1aX += 8, Bul1aY += 1, 10, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            Bul1aX = player1.x;
            Bul1aY = player1.y;
        }
        if (bullet1bAnimate) {
            //draw bullet 1b
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(Bul1bX += 8, Bul1bY -= 1, 10, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            Bul1bX = player1.x;
            Bul1bY = player1.y;
        }

        if (bullet2Animate) {

            //draw a bullet
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(Bul2X -= 8, Bul2Y, 10, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            Bul2X = player2.x;
            Bul2Y = player2.y;
        }
        if (bullet2aAnimate) {
            //draw bullet 2a
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(Bul2aX -= 8, Bul2aY += 1, 10, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            Bul2aX = player2.x;
            Bul2aY = player2.y;
        }
        if (bullet2bAnimate) {
            //draw bullet 2b
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(Bul2bX -= 8, Bul2bY -= 1, 10, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            Bul2bX = player2.x;
            Bul2bY = player2.y;
        }
        //draw player 1 balck hole
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(50, 550, 40, 0, 2 * Math.PI);
        ctx.fill();

        //draw player 2 black hole
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(850, 550, 40, 0, 2 * Math.PI);
        ctx.fill();

        if (hasPowerup1 == true) {
            ctx.drawImage(powerupImage1, 26, 526, 50, 50);
        }
        if (hasPowerup2 == true) {
            ctx.drawImage(powerupImage2, 826, 526, 50, 50)
        }
        //draw player 1
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.beginPath();
        ctx.arc(player1.x, player1.y, 30, 0, 2 * Math.PI);
        ctx.fill();
        //player 1 life bar
        ctx.fillStyle = "gray";
        ctx.fillRect(10, 10, 225, 75);
        ctx.fillStyle = "black";
        ctx.fillRect(23, 48, 204, 34);
        ctx.fillStyle = "gray";
        ctx.fillRect(25, 50, 200, 30);
        if (player1.L >= 150) {
            ctx.fillStyle = "green";
        } else if (player1.L >= 100) {
            ctx.fillStyle = "yellow";
        } else if (player1.L >= 50) {
            ctx.fillStyle = "orange";
        } else {
            ctx.fillStyle = "red"
        }
        if (player1.L >= 200) {
            player1.L = 200;
        }
        ctx.fillRect(25, 50, player1.L, 30);

        //draw player 2
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.beginPath();
        ctx.arc(player2.x, player2.y, 30, 0, 2 * Math.PI);
        ctx.fill();
        //player 2 health bar
        ctx.fillStyle = "gray";
        ctx.fillRect(665, 10, 225, 75);
        ctx.fillStyle = "black";
        ctx.fillRect(677, 48, 204, 34);
        ctx.fillStyle = "gray";
        ctx.fillRect(679, 50, 200, 30);
        if (player2.L >= 150) {
            ctx.fillStyle = "green";
        } else if (player2.L >= 100) {
            ctx.fillStyle = "yellow";
        } else if (player2.L >= 50) {
            ctx.fillStyle = "orange";
        } else {
            ctx.fillStyle = "red"
        }
        if (player2.L >= 200) {
            player2.L = 200;
        }
        ctx.fillRect(679, 50, player2.L, 30);

        //draw text
        ctx.font = "42px Arial";
        ctx.fillStyle = "black";
        ctx.fillText('HEALTH', 45, 50);
        ctx.fillText('HEALTH', 695, 50);
        ctx.fillText('POINTS:', 7, 120);
        ctx.fillText('POINTS:', 630, 120);

        //draw points
        for (let i = 1; i <= player1.P; i += 10) {
            ctx.fillRect(180 + i, 90, 5, 35);
        }
        for (let i = 1; i <= player2.P; i += 10) {
            ctx.fillRect(800 + i, 90, 5, 35);
        }

        //hit scores for player 1
        if (Bul1X >= player2.x - 15 && Bul1X <= player2.x + 15 && Bul1Y >= player2.y - 10 && Bul1Y <= player2.y + 10) {
            console.log("player 1 Bullseye!");
            bullet1Animate = false;
            player2.L = player2.L - 40;
            player1.P += 60;

        } else if (Bul1X >= player2.x - 15 && Bul1X <= player2.x + 15 && Bul1Y >= player2.y - 20 && Bul1Y <= player2.y + 20) {
            console.log("player 1 hit");
            bullet1Animate = false;
            player2.L = player2.L - 20;
            player1.P += 30;
        } else if (Bul1X >= player2.x - 15 && Bul1X <= player2.x + 15 && Bul1Y >= player2.y - 30 && Bul1Y <= player2.y + 30) {
            console.log("player 1 scratch");
            bullet1Animate = false;
            player2.L = player2.L - 10;
            player1.P += 10;
        }
        //bullet 1 a hits
        if (Bul1aX >= player2.x - 15 && Bul1aX <= player2.x + 15 && Bul1aY >= player2.y - 10 && Bul1aY <= player2.y + 10) {
            console.log("player 1 Bullseye!");
            bullet1aAnimate = false;
            player2.L = player2.L - 40;
            player1.P += 60;

        } else if (Bul1aX >= player2.x - 15 && Bul1aX <= player2.x + 15 && Bul1aY >= player2.y - 20 && Bul1aY <= player2.y + 20) {
            console.log("player 1 hit");
            bullet1aAnimate = false;
            player2.L = player2.L - 20;
            player1.P += 30;

        } else if (Bul1aX >= player2.x - 15 && Bul1aX <= player2.x + 15 && Bul1aY >= player2.y - 30 && Bul1aY <= player2.y + 30) {
            console.log("player 1 scratch");
            bullet1aAnimate = false;
            player2.L = player2.L - 10;
            player1.P += 10;
        }

        //bullet 1b hits
        if (Bul1bX >= player2.x - 15 && Bul1bX <= player2.x + 15 && Bul1bY >= player2.y - 10 && Bul1bY <= player2.y + 10) {
            console.log("player 1 Bullseye!");
            bullet1bAnimate = false;
            player2.L = player2.L - 40;
            player1.P += 60;

        } else if (Bul1bX >= player2.x - 15 && Bul1bX <= player2.x + 15 && Bul1bY >= player2.y - 20 && Bul1bY <= player2.y + 20) {
            console.log("player 1 hit");
            bullet1bAnimate = false;
            player2.L = player2.L - 20;
            player1.P += 30;

        } else if (Bul1bX >= player2.x - 15 && Bul1bX <= player2.x + 15 && Bul1bY >= player2.y - 30 && Bul1bY <= player2.y + 30) {
            console.log("player 1 scratch");
            bullet1bAnimate = false;
            player2.L = player2.L - 10;
            player1.P += 10;

        }

        //if laser 1 hits
        if (laser1Animate && player1.y >= player2.y - 30 && player1.y <= player2.y + 30 && player2.L >=10) {
            console.log('yeowch')
            player2.L = player2.L - 0.5;
        }

        //hit scores for player 2
        if (Bul2X >= player1.x - 15 && Bul2X <= player1.x + 15 && Bul2Y >= player1.y - 10 && Bul2Y <= player1.y + 10) {
            console.log("player 2 Bullseye!");
            bullet2Animate = false;
            player1.L = player1.L - 40;
            player2.P += 60;

        } else if (Bul2X >= player1.x - 15 && Bul2X <= player1.x + 15 && Bul2Y >= player1.y - 20 && Bul2Y <= player1.y + 20) {
            console.log("player 2 hit");
            bullet2Animate = false;
            player1.L = player1.L - 20;
            player2.P += 30;

        } else if (Bul2X >= player1.x - 15 && Bul2X <= player1.x + 15 && Bul2Y >= player1.y - 30 && Bul2Y <= player1.y + 30) {
            console.log("player 2 scratch");
            bullet2Animate = false;
            player1.L = player1.L - 10;
            player2.P += 10;

        }

        //bullet 2 a hits
        if (Bul2aX >= player1.x - 15 && Bul2aX <= player1.x + 15 && Bul2aY >= player1.y - 10 && Bul2aY <= player1.y + 10) {
            console.log("player 2 Bullseye!");
            bullet2aAnimate = false;
            player1.L = player1.L - 40;
            player2.P += 60;

        } else if (Bul2aX >= player1.x - 15 && Bul2aX <= player1.x + 15 && Bul2aY >= player1.y - 20 && Bul2aY <= player1.y + 20) {
            console.log("player 2 hit");
            bullet2aAnimate = false;
            player1.L = player1.L - 20;
            player2.P += 30;

        } else if (Bul2aX >= player1.x - 15 && Bul2aX <= player1.x + 15 && Bul2aY >= player1.y - 30 && Bul2aY <= player1.y + 30) {
            console.log("player 2 scratch");
            bullet2aAnimate = false;
            player1.L = player1.L - 10;
            player2.P += 10;

        }
        //bullet 1 b hits
        if (Bul2bX >= player1.x - 15 && Bul2bX <= player1.x + 15 && Bul2bY >= player1.y - 10 && Bul2bY <= player1.y + 10) {
            console.log("player 2 Bullseye!");
            bullet2bAnimate = false;
            player1.L = player1.L - 40;
            player2.P += 60;

        } else if (Bul2bX >= player1.x - 15 && Bul2bX <= player1.x + 15 && Bul2bY >= player1.y - 20 && Bul2bY <= player1.y + 20) {
            console.log("player 2 hit");
            bullet2bAnimate = false;
            player1.L = player1.L - 20;
            player2.P += 30;

        } else if (Bul2bX >= player1.x - 15 && Bul2bX <= player1.x + 15 && Bul2bY >= player1.y - 30 && Bul2bY <= player1.y + 30) {
            console.log("player 2 scratch");
            bullet2bAnimate = false;
            player1.L = player1.L - 10;
            player2.P += 10;
        }

        //if laser 2 hits
        if (laser2Animate && player2.y >= player1.y - 30 && player2.y <= player1.y + 30 && player1.L >=10) {
            console.log('yeowch')
            player1.L = player1.L - 0.5;
        }

        //max points reached
        if (player1.P >= 100) {
            player1.P = 100;
        }
        if (player2.P >= 100) {
            player2.P = 100;
        }

        //player 1 powerup

        // when you get 100 points, choose an image
        if (player1.P >= 100 && hasPowerup1 == false) {
            player1.P = player1.P - 100;
            hasPowerup1 = true;
            console.log("player 1 powerup");
            powerNum1 = Math.random();

            // if state to select an image (but not draw it)
            if (powerNum1 < .25) {
                console.log("health");
                powerupImage1 = healthImg;

            } else if (powerNum1 < .50) {
                console.log("laser");
                powerupImage1 = laserImg;

            } else if (powerNum1 < .75) {
                console.log("speed");
                powerupImage1 = speedImg;

            } else {
                console.log("scatter");
                powerupImage1 = scatterImg;
            }
            console.log(powerupImage1);
        }

        //getting your powerup
        if (player1.x <= 100 && player1.y >= 500) {

            //determine what powerup to give
            if (powerNum1 < .25 && hasPowerup1 == true) {
                console.log("player1health");
                player1.L = player1.L + 50;
                hasPowerup1 = false;

            } else if (powerNum1 < .50 && hasPowerup1 == true) {
                console.log("player1laser");
                document.addEventListener("keydown", laser1handler);
                laser1active = true;
                hasPowerup1 = false;

            } else if (powerNum1 < .75 && hasPowerup1 == true) {
                console.log("player1speed");
                speed1active = true;
                hasPowerup1 = false;

            } else if (powerNum1 < 1.00 && hasPowerup1 == true) {
                console.log("player1scatter");
                scatter1active = true;
                hasPowerup1 = false;
            }
        }

        //player 2 powerup

        // when you get 100 points, choose an image
        if (player2.P >= 100 && hasPowerup2 == false) {
            player2.P = player2.P - 100;
            hasPowerup2 = true;
            console.log("player 2 powerup");
            powerNum2 = Math.random();

            // if state to select an image (but not draw it)
            if (powerNum2 < .25) {
                console.log("health");
                powerupImage2 = healthImg;

            } else if (powerNum2 < .50) {
                console.log("laser");
                powerupImage2 = laserImg;

            } else if (powerNum2 < .75) {
                console.log("speed");
                powerupImage2 = speedImg;

            } else {
                console.log("scatter");
                powerupImage2 = scatterImg;
            }
            console.log(powerupImage2);


        }
        //getting your powerup
        if (player2.x >= 800 && player2.y >= 500) {

            //determine what powerup to give
            if (powerNum2 < .25 && hasPowerup2 == true) {
                console.log("player2health");
                player2.L = player2.L + 50;
                hasPowerup2 = false;

            } else if (powerNum2 < .50 && hasPowerup2 == true) {
                console.log("player2laser");
                document.addEventListener("keydown", laser2handler);
                laser2active = true;
                hasPowerup2 = false;

            } else if (powerNum2 < .75 && hasPowerup2 == true) {
                console.log("player2speed");
                speed2active = true;
                hasPowerup2 = false;

            } else if (powerNum2 < 1.00 && hasPowerup2 == true) {
                console.log("player2scatter");
                scatter2active = true;
                hasPowerup2 = false;
            }
        }

        //player 1 loses
        if (player1.L <= 0) {
            ctx.drawImage(blueWin, 50, 30);
            //draw reset button
            ctx.fillStyle = "black";
            ctx.fillRect(545, 465, 270, 40);
            ctx.font = "42px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Click to Reset", 550, 500);
            //delete bullets
            bullet1bAnimate = false;
            bullet1aAnimate = false;
            bullet1Animate = false;
            bullet2Animate = false;
            bullet2aAnimate = false;
            bullet2bAnimate = false;
            //freeze keys
            if (event.code == "KeyW") {
                player1.y -= 0;
            } else if (event.code == "KeyS") {
                player1.y += 0;
            } else if (event.code == "KeyA") {
                player1.x -= 0;
            } else if (event.code == "KeyD") {
                player1.x += 0;
            } else if (event.code == "ArrowUp") {
                player2.y -= 0;
            } else if (event.code == "ArrowDown") {
                player2.y += 0;
            } else if (event.code == "ArrowLeft") {
                player2.x -= 0;
            } else if (event.code == "ArrowRight") {
                player2.x += 0;
            } else if (event.code == "Numpad0") {
                console.log("no cheating");
            } else if (event.code == "ShiftLeft") {
                console.log("no cheating");
            }
        }
        
        //player 2 loses
        if (player2.L <= 0) {
            ctx.drawImage(redWin, 50, 30);
            //draw reset button
            ctx.fillStyle = "black";
            ctx.fillRect(545, 465, 270, 40);
            ctx.font = "42px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Click to Reset", 550, 500);
            //delete bullets
            bullet1bAnimate = false;
            bullet1aAnimate = false;
            bullet1Animate = false;
            bullet2Animate = false;
            bullet2aAnimate = false;
            bullet2bAnimate = false;
            //freeze keys
            if (event.code == "KeyW") {
                player1.y -= 0;
            } else if (event.code == "KeyS") {
                player1.y += 0;
            } else if (event.code == "KeyA") {
                player1.x -= 0;
            } else if (event.code == "KeyD") {
                player1.x += 0;
            } else if (event.code == "ArrowUp") {
                player2.y -= 0;
            } else if (event.code == "ArrowDown") {
                player2.y += 0;
            } else if (event.code == "ArrowLeft") {
                player2.x -= 0;
            } else if (event.code == "ArrowRight") {
                player2.x += 0;
            } else if (event.code == "Numpad0") {
                console.log("no cheating");
            } else if (event.code == "ShiftLeft") {
                console.log("no cheating");
            }
        }

        requestAnimationFrame(loop);
    }


    //events
    document.addEventListener("keydown", p1Handler);
    document.addEventListener("keydown", p2Handler);
    document.addEventListener("keydown", shoot);
    if (laser1active = true) {
        document.addEventListener("keydown", laser1handler);
    }
    if (laser2active = true) {
        document.addEventListener("keydown", laser2handler);
    }

    function p1Handler(event) {
        if (speed1active) {
            if (event.code == "KeyW") {
                player1.y -= 15;
            } else if (event.code == "KeyS") {
                player1.y += 15;
            } else if (event.code == "KeyA") {
                player1.x -= 15;
            } else if (event.code == "KeyD") {
                player1.x += 15;
            }
        }
        if (event.code == "KeyW") {
            player1.y -= 10;
        } else if (event.code == "KeyS") {
            player1.y += 10;
        } else if (event.code == "KeyA") {
            player1.x -= 10;
        } else if (event.code == "KeyD") {
            player1.x += 10;
        }
        if (player1.x > 415) {
            player1.x = 415;
        } else if (player1.x < 30) {
            player1.x = 30;
        } else if (player1.y > 570) {
            player1.y = 570;
        } else if (player1.y < 30) {
            player1.y = 30;
        }
    }

    function p2Handler(event) {
        if (speed2active){
            if (event.code == "ArrowUp") {
                player2.y -= 15;
            } else if (event.code == "ArrowDown") {
                player2.y += 15;
            } else if (event.code == "ArrowLeft") {
                player2.x -= 15;
            } else if (event.code == "ArrowRight") {
                player2.x += 15;
            }
        }
        if (event.code == "ArrowUp") {
            player2.y -= 10;
        } else if (event.code == "ArrowDown") {
            player2.y += 10;
        } else if (event.code == "ArrowLeft") {
            player2.x -= 10;
        } else if (event.code == "ArrowRight") {
            player2.x += 10;
        }
        if (player2.x < 485) {
            player2.x = 485;
        } else if (player2.x > 870) {
            player2.x = 870;
        } else if (player2.y > 570) {
            player2.y = 570;
        } else if (player2.y < 30) {
            player2.y = 30;
        }
    }
    if (laser1active) {
        function laser1handler(event) {
            if (event.code == "CapsLock") {
                laser1Animate = true;
            } else if (event.code != "CapsLock") {
                laser1Animate = false;
            }
        }
    }
    if (laser2active) {
        function laser2handler(event) {
            if (event.code == "Numpad1") {
                laser2Animate = true;
            } else if (event.code != "Numpad1") {
                laser2Animate = false;
            }
        }
    }


    function shoot(event) {
        if (event.code == "ShiftLeft") {
            bullet1Animate = true;
            if (scatter1active) {
                bullet1aAnimate = true;
                bullet1bAnimate = true;
            }
        } else if (event.code == "Numpad0") {
            bullet2Animate = true;
            if (scatter2active) {
                bullet2aAnimate = true;
                bullet2bAnimate = true;
            }
        }
    }

    //          _
    //      .__(.)< (Meow)
    //~~~~~~~\___)~~~~~~~~
    // , ` _____  . ` ' , 
    //  }>{__,_*}< . ` ' *
    //   `  *  ., - '  ~  `
    // \___/\___/\___/\___/   
}