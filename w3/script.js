var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");

            // Square
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";
            ctx.lineWidth = "5";
            ctx.fillRect(85,302,100,100);
            ctx.strokeRect(85,302,100,100);

            // Line
            ctx.strokeStyle = "rgb(255,0,0)";
            ctx.beginPath();
            ctx.moveTo(86,682);
            ctx.lineTo(279,550);
            ctx.stroke();

            // Circle
            ctx.fillStyle = "#ffff00";
            ctx.beginPath();
            ctx.arc(385,441,67,0,2*Math.PI,false);
            ctx.fill();
            ctx.stroke();

            // Pentagon
            ctx.fillStyle = "#ff00ff";
            ctx.strokeStyle = "#00ffff";
            ctx.beginPath();
            ctx.moveTo(557,308);
            ctx.lineTo(667,284);
            ctx.lineTo(724,380);
            ctx.lineTo(650,464);
            ctx.lineTo(548,420);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Star
            ctx.fillStyle = "#ffff00";
            ctx.strokeStyle = "rgb(32,32,32)";
            ctx.beginPath();
            ctx.moveTo(635,496);
            ctx.lineTo(668,554);
            ctx.lineTo(733,567);
            ctx.lineTo(687,615);
            ctx.lineTo(696,681);
            ctx.lineTo(635,653);
            ctx.lineTo(575,681);
            ctx.lineTo(583,614);
            ctx.lineTo(538,566);
            ctx.lineTo(603,554);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
