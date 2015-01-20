
var canvas = document.getElementById("mazecanvas");
var context = canvas.getContext("2d");
var myRectX = 840;
var myRectY = 380;




var score = 0;
var scoreMultiplier= 1;
var mazeWidth = 856;
var mazeHeight = 542;
var intervalVar;
var timer = 300;
var gameState = true;

window.onload = function() {		
    
    var monsters = document.getElementById('monsterNum');
    monsters.onchange = startMaze; 
};
function startMaze() {
   drawMaze();
   document.getElementById('monsterNum').style.display = 'none';
   document.getElementById('monster-title').style.display = 'none';
    var monsters = document.getElementById('monsterNum').value;
    if(monsters > 4 && monsters < 11) scoreMultiplier = 2;
    if(monsters > 10 && monsters < 14) scoreMultiplier = 3;
    if(monsters == 14) scoreMultiplier = 5;
    document.getElementById("scoreMulti").innerHTML = scoreMultiplier;
    for(var i = 0; i < monsters; i++ ) {
        buildMonster(i);
    }
    var prizes = 16;
    for(var i = 0; i < prizes; i++ ) {
        buildPrize(i);
    }
    document.getElementById('mazecanvas').style.display = 'block';
    window.addEventListener("keydown", moveMyRect, true);
    createTimer(timer); //5 min timer  
}
function buildMonster(num) {
	//monsters's pixel position
    switch(num) {
        case 0:
        	var monsterX1 = 40;
        	var monsterY1 = 430;
            runAI(monsterX1, monsterY1, 3, true);
            break;
        case 1:
        	var monsterX2 = 110;
        	var monsterY2 = 294;
            runAI(monsterX2, monsterY2, 4, true);
            break;        
        case 2:
        	var monsterX3 = 585;
        	var monsterY3 = 73;
            runAI(monsterX3, monsterY3, 4, true);
            break;        
        case 3:
        	var monsterX4 = 340;
        	var monsterY4 = 447;
            runAI(monsterX4, monsterY4, 3, true);
            break;        
        case 4:
        	var monsterX5 = 660;
        	var monsterY5 = 481;
            runAI(monsterX5, monsterY5, 4, true);
            break;        
        case 5:
        	var monsterX6 = 415;
        	var monsterY6 = 243;
            runAI(monsterX6, monsterY6, 4, true);
            break;        
        case 6:
        	var monsterX7 = 100;
        	var monsterY7 = 447;
            runAI(monsterX7, monsterY7, 3, true);
            break;        
        case 7:
        	var monsterX8 = 310;
        	var monsterY8 = 100;
            runAI(monsterX8, monsterY8, 4, true);
            break;  
        case 8:
        	var monsterX9 = 548;
        	var monsterY9 = 345;
            runAI(monsterX9, monsterY9, 4, true);
            break;  
        case 9:
        	var monsterX10 = 548;
        	var monsterY10 = 192;
            runAI(monsterX10, monsterY10, 4, true);
            break;  
        case 10:
        	var monsterX11 = 90;
        	var monsterY11 = 464;
            runAI(monsterX11, monsterY11, 3, true);
            break;  
        case 11:
        	var monsterX12 = 90;
        	var monsterY12 = 498;
            runAI(monsterX12, monsterY12, 4, true);
            break;  
        case 12:
        	var monsterX13 = 701;
        	var monsterY13 = 125;
            runAI(monsterX13, monsterY13, 2, true);
            break;  
        case 13:
        	var monsterX14 = 837;
        	var monsterY14 = 400;
            runAI(monsterX14, monsterY14, 2, true);
            break;              
        default:
            alert('you did not select a positive monster count');
    }   
}
function buildPrize(num) {
	//monsters's pixel position
    switch(num) {
        case 0:
        	var prizeX = 839;
        	var prizeY = 360;
            drawPrize(-1, -1, prizeX, prizeY);
            break;
        case 1:
        	var prizeX = 839;
        	var prizeY = 120;
            drawPrize(-1, -1, prizeX, prizeY);
            break;        
        case 2:
        	var prizeX = 675;
        	var prizeY = 228;
            drawPrize(-1, -1, prizeX, prizeY);
            break;        
        case 3:

        	var prizeX = 360;
        	var prizeY = 449;
            drawPrize(-1, -1, prizeX, prizeY);
            break;        
        case 4:
        	var prizeX = 105;
        	var prizeY = 25;
            drawPrize(-1, -1, prizeX, prizeY);
            break;        
        case 5:
        	var prizeX = 516;
        	var prizeY = 350;
            drawPrize(-1, -1, prizeX, prizeY);
            break;        
        case 6:
        	var prizeX = 57;
        	var prizeY = 295;
            drawPrize(-1, -1, prizeX, prizeY);
            break;        
        case 7:
        	var prizeX = 227;
        	var prizeY = 180;
            drawPrize(-1, -1, prizeX, prizeY);
            break;  
        case 8:
        	var prizeX = 365;
        	var prizeY = 160;
            drawPrize(-1, -1, prizeX, prizeY);
            break;  
        case 9:
        	var prizeX = 315;
        	var prizeY = 347;
            drawPrize(-1, -1, prizeX, prizeY);
            break;  
        case 10:
        	var prizeX = 40;
        	var prizeY = 95;
            drawPrize(-1, -1, prizeX, prizeY);
            break;  
        case 11:
        	var prizeX = 278;
        	var prizeY = 170;
            drawPrize(-1, -1, prizeX, prizeY);
            break;  
        case 12:
        	var prizeX = 390;
        	var prizeY = 160;
            drawPrize(-1, -1, prizeX, prizeY);
            break;  
        case 13:
        	var prizeX = 547;
        	var prizeY = 160;
            drawPrize(-1, -1, prizeX, prizeY);
            break;       
        case 14:
        	var prizeX = 40;
        	var prizeY = 382;
            drawPrize(-1, -1, prizeX, prizeY);
            break;         
        case 15:
        	var prizeX = 40;
        	var prizeY = 415;
            drawPrize(-1, -1, prizeX, prizeY);
            break;              
        default:
           
    }   
}


function drawMaze() {
    makeWhite(0, 0, canvas.width, canvas.height);
    var mazeImg = new Image();
    mazeImg.onload = function () {
        context.drawImage(mazeImg, 0, 0);
        drawMe(-1, -1, myRectX, myRectY);
    };
    mazeImg.src = "img/maze6.gif";
}
function runAI(X, Y, key, firsttime) {
	var result;
	var keyUsed = "";
	var possibleKey;
	var isDeadendPoint;
	if(firsttime) {
		possibleKey = false;
		isDeadendPoint = false;
		moveRect(X, Y, key, true);
		var delay=200;
	
		setTimeout(function(){	
				runAI(X, Y, key, false);
		},delay);

	} else {
		var delay=1;
		possibleKey = checkOtherDirections(X, Y, key);
		isDeadendPoint = isDeadend(X, Y, key);		
		
		if(isDeadendPoint) {
			if(key == 1) {
				result = moveRect(X, Y, 2, false);
				keyUsed = 2;		
			}
			else if (key == 2) {
				result = moveRect(X, Y, 1, false);
				keyUsed = 1;
	
			}
			else if (key == 3) {
				result = moveRect(X, Y, 4, false);
				keyUsed = 4;
			}
			else if (key == 4) {
				result = moveRect(X, Y, 3, false);
				keyUsed = 3;
			}								
		}
		else {
			if(checkDirection(X, Y, key) == 1) {
				if(possibleKey != false){				
					possibleKeyArray = [key, possibleKey];
					var i = Math.floor((Math.random() * 2) + 0);
					result = moveRect(X, Y, possibleKeyArray[i], false);
					keyUsed = possibleKeyArray[i];
				}else {
					keyUsed = key;
					result = moveRect(X, Y, key, false);
				}
			}
			else {
				result = moveRect(X, Y, possibleKey, false);
				keyUsed = possibleKey;
			}				
		}
		if(gameState) {
			setTimeout(function(){	
				if(result[0] == -1 || result[1] == -1) {
					runAI(X, Y, keyUsed, false);
				} else {
					runAI(result[0], result[1], keyUsed, false);
				}
			},delay);			
		}

	}//end first if that checks if ran for first time
	
}

function drawMonster(X, Y, newX, newY) {
    var monsterImg = new Image();
    monsterImg.onload = function () {
    	makeWhite(X, Y, 15, 15);
        context.drawImage(monsterImg, newX, newY);
        
    };
    monsterImg.src = "img/monster1.gif";
}
function drawMe(X, Y, newX, newY) {
    var monsterImg = new Image();
    monsterImg.onload = function () {
    	if(newX != -1 && newY != -1) makeWhite(X, Y, 10, 10);
        context.drawImage(monsterImg, newX, newY);
        
    };
    monsterImg.src = "img/bear.gif";
} 
function drawPrize(X, Y, newX, newY) {
    var cakeImg = new Image();
    cakeImg.onload = function () {
    	//if(X != -1 && Y != -1) makeWhite(newX, newY, 11, 11);
        context.drawImage(cakeImg, newX, newY);
        
    };
    cakeImg.src = "img/cake.gif";
}
function moveRect(X, Y, key) {
    var newX;
    var newY;
    var movingAllowed;
    //e = e || window.event;
    switch (key) {
        case 1: // up
            newX = X;
            newY = Y - 1;
            break;
        case 3: // left
            newX = X - 1;
            newY = Y;
            break;
        case 2: // down
            newX = X;
            newY = Y + 1;
            break;
        case 4: // right
            newX = X + 1;
            newY = Y;
            break;
    }
    movingAllowed = canMoveTo(newX, newY);
    
    if (movingAllowed === 1) {      // 1 means 'the rectangle can move'
    	drawMonster(X, Y, newX, newY);
        var result = [newX, newY];
        return result;
    }
    else if (movingAllowed === 3) {
//        makeWhite(X, Y, 11, 11);
//    	drawPrize(-1, -1, X, Y);
    	drawMonster(X, Y, newX, newY);
        var result = [newX, newY];
        return result;
    }

    else {
    	return [-1, -1];
    }
	
}
function canMoveTo(destX, destY, firsttime) {
	
	if(firsttime) {
		return 1;
	}
	else {
	    var imgData = context.getImageData(destX, destY, 15, 15);
	    var data = imgData.data;
	    var canMove = 1; // 1 means: the rectangle can move
	    if (destX >= 0 && destX <= mazeWidth - 15 && destY >= 0 && destY <= mazeHeight - 15) {
	        for (var i = 0; i < 4 * 15 * 15; i += 4) {
	            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { // black
	                canMove = 0; // 0 means: the rectangle can't move
	                break;
	            }
	            else if (data[i] === 255 && data[i + 1] === 0 && data[i + 2] === 0) { // red
	                canMove = 0; // 0 means: the rectangle can't move
	                break;
	            }                
	            else if (data[i] === 200 && data[i + 1] === 136 && data[i + 2] === 75) { // #00FF00
	                canMove = 2; // 2 means: monster killed you
	                yourDead();
	                break;
	            }
	            else if (data[i] === 247 && data[i + 1] === 145 && data[i + 2] === 30) { // #00FF00
	                canMove = 1; // 1 keep moving
	            	
	               // break;
	            }   
	            else if (data[i] === 90 && data[i + 1] === 204 && data[i + 2] === 200) { // #00FF00
	                canMove = 1; // 1 keep moving
	               // break;
	            }  	            

	        }
	    }
	    else {
	        canMove = 0;
	    }
	    return canMove;		
	}
}
function canMoveToPlayer(destX, destY) {
	
    var imgData = context.getImageData(destX, destY, 10, 10);
    var data = imgData.data;
    var canMove = 1; // 1 means: the rectangle can move
    if (destX >= 0 && destX <= mazeWidth - 15 && destY >= 0 && destY <= mazeHeight - 15) {
        for (var i = 0; i < 4 * 15 * 15; i += 4) {
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { // black
                canMove = 0; // 0 means: the rectangle can't move
                break;
            }
            else if (data[i] === 37 && data[i + 1] === 99 && data[i + 2] === 175) { // #00FF00
                canMove = 2; // 2 means: monster killed you
                break;
            }
            else if (data[i] === 247 && data[i + 1] === 145 && data[i + 2] === 30) { // #00FF00
                canMove = 1; // 1 keep moving
                youScored();
                break;
            }            
            else if (data[i] === 255 && data[i + 1] === 0 && data[i + 2] === 0) { // #FF0000
            	canMove = 3; // 2 means: you won
            	youWon();
            	break;
            }
        }
    }
    else {
        canMove = 0;
    }
    return canMove;
}        
function createTimer(seconds) {
    intervalVar = setInterval(function () {
        if (seconds === 0) {
        	yourDead();
            return;
        }
        var minutes = Math.floor(seconds / 60);
        var secondsToShow = (seconds - minutes * 60).toString();
        if (secondsToShow.length === 1) {
            secondsToShow = "0" + secondsToShow; // if the number of seconds is '5' for example, make sure that it is shown as '05'
        }
        
        if(minutes < 3 ) document.getElementById("timer").style.color = "orange";
        if(minutes < 1 ) document.getElementById("timer").style.color = "red";
		document.getElementById("timer").innerHTML = minutes.toString() + ":" + secondsToShow;
        seconds--;
    }, 1000);
}
function checkDirection (X, Y, key) {
	var testX, testY;
	
	switch (key) {
        case 1: // up
            testX = X;
            testY = Y - 1;
            break;
        case 3: // A key
            testX = X - 1;
            testY = Y;
            break;
        case 2: // S key
            testX = X;
            testY = Y + 1;
            break;
        case 4: // arrow right key
            testX = X + 1;
            testY = Y;
            break;
    }
    var movingAllowed = canMoveTo(testX, testY);
	return movingAllowed;
}

function checkOtherDirections(X, Y, dir) {
	if(dir == 4) {
		if(checkDirection(X, Y, 1) == 1) {
			return 1;
		}
		if(checkDirection(X, Y, 2) == 1) {
			return 2;
		}
	}
	if(dir == 3) {
		if(checkDirection(X, Y, 1) == 1) {
			return 1;
		}
		if(checkDirection(X, Y, 2) == 1) {
			return 2;
		}
	
	}
	 if(dir == 2) {

		if(checkDirection(X, Y, 3) == 1) {
			return 3;
		}
		if(checkDirection(X, Y, 4) == 1) {
			return 4;
		}
		
	}
	if(dir == 1) {
		if(checkDirection(X, Y, 4) == 1) {
			return 4;
		}

		if(checkDirection(X, Y, 3) == 1) {
			return 3;
		}
	}
	return false;
}
function isDeadend(X, Y, dir){
	if(dir == 1) {
		if(checkDirection(X, Y, 1) != 1 && checkDirection(X, Y, 3) != 1  && checkDirection(X, Y, 4) != 1) {
			return true;
		}
	}
	if(dir == 2) {
		if(checkDirection(X, Y, 2) != 1 && checkDirection(X, Y, 3) != 1  && checkDirection(X, Y, 4) != 1) {
			return true;
		}
	}
	if(dir == 3) {
		if(checkDirection(X, Y, 1) != 1 && checkDirection(X, Y, 2) != 1  && checkDirection(X, Y, 3) != 1) {
			return true;
		}
	}
	if(dir == 4) {
		if(checkDirection(X, Y, 1) != 1 && checkDirection(X, Y, 2) != 1  && checkDirection(X, Y, 4) != 1) {
			return true;
		}
	}			
	return false;
	
}

function moveFirstTime(X, Y, key) {
	result = moveRect(X, Y, key);
	keyUsed = key;
	setTimeout(function(){
		if(result[0] == -1 || result[1] == -1) {
			runAI(X, Y, keyUsed);
		} else {
			runAI(result[0], result[1], keyUsed);
		}
		
	},delay);
}
function moveMyRect (e) {
	e = e || window.event;
	switch (e.keyCode) {
        case 38:   // arrow up key
        case 87: // W key
            newX = myRectX;
            newY = myRectY - 4;
            break;
        case 37: // arrow left key
        case 65: // A key
            newX = myRectX - 4;
            newY = myRectY;
            break;
        case 40: // arrow down key
        case 83: // S key
            newX = myRectX;
            newY = myRectY + 4;
            break;
        case 39: // arrow right key
        case 68: // D key
            newX = myRectX +4;
            newY = myRectY;
            break;
    }
    movingAllowed = canMoveToPlayer(newX, newY);
    if (movingAllowed === 1) {      // 1 means 'the rectangle can move'
        drawMe(myRectX, myRectY, newX, newY);
        myRectX = newX;
        myRectY = newY;
    }
    else if (movingAllowed === 2) { 
        yourDead();
        window.removeEventListener("keydown", moveMyRect, true);
    }
}
function yourDead() {
	gameState = false;
	score = 0;
	showScore();
    makeBlack(0, 0, canvas.width, canvas.height);
    context.font = "40px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("You're Dead!", canvas.width / 2, canvas.height / 2);
    clearInterval(intervalVar);
}
function youWon() {
	gameState = false;
	score += scoreMultiplier * 100;
	showScore();
    clearInterval(intervalVar);
    makeBlack(0, 0, canvas.width, canvas.height);
    context.font = "40px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("You Won!", canvas.width / 2, canvas.height / 2);
}
function youScored() {
	score += scoreMultiplier * 5;
	showScore();
}
function showScore() {
	document.getElementById("score").innerHTML = score;
}
function makeWhite(x, y, w, h) {
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    context.fillStyle = "#FFFFFF";
    context.fill();
}
function makeBlack(x, y, w, h) {
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    context.fillStyle = "#000000";
    context.fill();
}

function drawRectangle(X, Y, style) {
    context.beginPath();
    context.rect(X, Y, 15, 15);
    context.closePath();
    context.fillStyle = style;
    context.fill();
}		
		
