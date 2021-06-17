//Main functions

//call an event when clicking the red dot moving randomly the red dot
document.getElementById('red-ball').addEventListener('click',redBallMovement);

//call an event when clicking the red dot adding a score
document.getElementById('red-ball').addEventListener('click',sumScorePoints);

//call an event remaining the time while clicking the red dot
document.getElementById('red-ball').addEventListener('click',remainingTime);

//Styling background black dots

//call an event when clicking the black dot you loose 2 points
document.getElementById('pelota').addEventListener('click',decreasingScoring);

//call an event when clicking the black dot you loose 2 points
document.getElementById('pelota1').addEventListener('click',decreasingBlack1);

//call an event when clicking the black dot you loose 2 points
document.getElementById('pelota2').addEventListener('click',decreasingBlack2);


//Styling background yellow dots

//call an event when clicking the black dot you loose 1 points
document.getElementById('pelota3').addEventListener('click',decreasingYellow1);

//call an event when clicking the black dot you loose 1 points
document.getElementById('pelota4').addEventListener('click',decreasingYellow2);

//call an event when clicking the black dot you loose 1 points
document.getElementById('pelota5').addEventListener('click',decreasingYellow3);

//call an event when clicking the black dot you loose 1 points
document.getElementById('pelota6').addEventListener('click',decreasingYellow4);



//Randomly move of the red dot
function redBallMovement() {

    randNum = Math.round(Math.random()*580);

    document.getElementById('red-ball').style.margin = randNum + "px";

    console.log(randNum);
}

//Scoring the player for every click
points = 0;
goal = 25;

function sumScorePoints(){

    points++;

    var score = document.getElementById('score').innerHTML = 'Score: ' + points + "/" + goal;
    if(points == 25){
        alert('you won, that is great!');
        alert('Keep WALKING');
        points*2;
        document.getElementById('score').innerHTML = 'Score: ' + points + "/" + goal*3;
        time =60;
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
        document.getElementById('score').innerHTML = 'Score: ' + points + "/" + goal;

}
}

//to reduce the time we have to setInterval

setInterval(remainingTime,1000);

//fuction decreasingScoring if click on the first black dot

function decreasingScoring(){
    document.getElementById('score').innerHTML = 'Score: ' + points-- + "/" + goal;
    var ball = document.getElementById('pelota');
    ball.style.backgroundColor = 'red';

}
//fuction decreasingBlack1 if click on the second black dot

function decreasingBlack1(){
    document.getElementById('score').innerHTML = 'Score: ' + points-- + "/" + goal;
    var ball = document.getElementById('pelota1');
    ball.style.backgroundColor = 'red';

}

//fuction decreasingBlack2 if click on the third black dot

function decreasingBlack2(){
    document.getElementById('score').innerHTML = 'Score: ' + points-- + "/" + goal;
    var ball = document.getElementById('pelota2');
    ball.style.backgroundColor = 'red';

}

//fuction decreasingBlack2 if click on the third black dot

function decreasingYellow1(){
    document.getElementById('score').innerHTML = 'Score: ' + points-- + "/" + goal;
    var ball = document.getElementById('pelota3');
    ball.style.backgroundColor = 'red';

}

//fuction decreasingBlack2 if click on the third black dot

function decreasingYellow2(){
    document.getElementById('score').innerHTML = 'Score: ' + points-- + "/" + goal;
    var ball = document.getElementById('pelota4');
    ball.style.backgroundColor = 'red';

}

//fuction decreasingBlack2 if click on the third black dot

function decreasingYellow3(){
    document.getElementById('score').innerHTML = 'Score: ' + points-- + "/" + goal;
    var ball = document.getElementById('pelota5');
    ball.style.backgroundColor = 'red';

}

//fuction decreasingBlack2 if click on the third black dot

function decreasingYellow4(){
    document.getElementById('score').innerHTML = 'Score: ' + points-- + "/" + goal;
    var ball = document.getElementById('pelota6');
    ball.style.backgroundColor = 'red';
    

}



