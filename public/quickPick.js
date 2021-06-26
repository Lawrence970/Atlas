window.onload = generateNumContainers();
window.onload = 

// global variables
score = 0;


function changeRndNumHtml(rndNum){
    var rndNumLeft = document.querySelector('#color-box-left-number')
    var rndNumRight = document.querySelector('#color-box-right-number')
    rndNumLeft.innerHTML = rndNum[0];
    rndNumRight.innerHTML = rndNum[1];
}

function generateNumContainers(){
    // create left number container
    var numContainerLeft = document.querySelector('.color-box-left');
    var rndNumLeft = document.createElement('p');
    rndNumLeft.setAttribute("id", "color-box-left-number");
    numContainerLeft.appendChild(rndNumLeft);

    // create right number container
    var numContainerRight = document.querySelector('.color-box-right');
    var rndNumRight = document.createElement('p');
    rndNumRight.setAttribute("id", "color-box-right-number");
    numContainerRight.appendChild(rndNumRight);

    //create score number container
    
}

// generates a random number and pushes it to an array. only loops 2 times
function generateRndNum(){ //did this better than the last time :)
    rndNum = [];
    for(i=0; i<2; i++){
        var rndNumGen = Math.floor(Math.random()*100);
        rndNum.push(rndNumGen);
    }
    changeRndNumHtml(rndNum); // change inner html
    return rndNum;            // return the rndNum Array
}

function scoreCounterUpdate(){
    scoreNum = document.querySelector("#score-counter");
    scoreNum.innerHTML = score;
}

function checkAnswer(key,rndNum) { // 'key' is a string input from onkeydown function | 'rndNum' is input from same function stored: rndNum=generateRndNum();

    if(rndNum[0]>=rndNum[1] && key == "left"){
        if(score != 0){
            score +=1;
        }
        scoreCounterUpdater(); 
        
    } else if(rndNum[0]<=rndNum[1] && key == "left"){
        if(score != 0){
            score -=1;
        }
        scoreCounterUpdate(); 

    } else if(rndNum[0]<=rndNum[1] && key == "right"){
        score +=1;
        scoreCounterUpdate(); 

    } else if(rndNum[0]>=rndNum[1] && key == "right"){
        if(score != 0){
            score -=1;
        }
        scoreCounterUpdate(); 

    }
}

function timer(){

}

// when i press key it registers checkAnswer based on the NEW generatedNums {SOLVED:a1}
// not the displayed generatedNums {SOLVED:a1}
document.onkeydown = function(event){ 
    if (event.which == 37){             
        checkAnswer("left",rndNum);
    } else if (event.which == 39) {
        Window.open();
        checkAnswer("right",rndNum);
// spacebar action
    } else if (event.which == 32 ){ 
        generateRndNum();
        score = 0;
        scoreCounterUpdate();
    }
};
// {SOLVED:a1} fixed this by changing innerHTML of rnd numbers inside generateRndNum() function

document.onkeyup = function(event){
    if (event.which == 37){             
        generateRndNum();
    } else if (event.which == 39) {
        generateRndNum();
    }
}