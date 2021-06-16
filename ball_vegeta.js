//Main functions

//call an event when clicking the red dot moving randomly the red dot
document.getElementById('red-ball').addEventListener('click',redBallMovement);

//call an event when clicking the red dot adding a score
document.getElementById('red-ball').addEventListener('click',sumScorePoints);

//call an event remaining the time while clicking the red dot
document.getElementById('red-ball').addEventListener('click',remainingTime);



//Randomly move of the red dot
function redBallMovement() {

    randNum = Math.round(Math.random()*400);

    document.getElementById('red-ball').style.margin = randNum + "px";

    console.log(randNum);
}

//Scoring the player for every click
points = 0;
goal = 25;

function sumScorePoints(){

    points++;

    document.getElementById('score').innerHTML = 'Score: ' + points + "/" + goal;

    if(points == 25){
        alert('you won, that is great!');
    }
}

//Remaining the time during the game

time = 60;
function remainingTime(){
    time--;
    document.getElementById('time').innerHTML = 'Time: ' + time;

    if(time == 0){
        alert('You lose, try it again');
        time = 60;
        points = 0;
 
}
}

//to reduce the time we have to setInterval

setInterval(remainingTime,1000);

//bouncing black-ball

