

window.onload = generateNumContainers();

// global variables
score = 0;


// instructions button & dialog modal
var instructBtn = document.getElementById('instructions-button');
var instructModal = document.getElementById('instructions-modal');
var closeInstructBtn = document.getElementById('close-instructions-modal')
instructBtn.addEventListener('click', function(){
    instructModal.showModal();
})
closeInstructBtn.addEventListener('click', function(){
    instructModal.close();
})



// changing DOM elements left an right rndGen numbs
var rndNumLeft = document.getElementById('color-box-left-number')
var rndNumRight = document.getElementById('color-box-right-number')
function changeRndNumHtml(rndNum){ 
    rndNumLeft.innerHTML = rndNum[0];
    rndNumRight.innerHTML = rndNum[1];
}


// THIS HAS MAJOR PROBLEMS.... NEEDS REWORK
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
}

function scoreCounterUpdate(){
    scoreNum = document.getElementById("score-counter");
    scoreNum.innerHTML = score;
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



function checkAnswer(key,rndNum) { // 'key' is a string input from onkeydown function | 'rndNum' is input from same function stored: rndNum=generateRndNum();

    if(rndNum[0]>=rndNum[1] && key == "left"){
        if(score != 0){
            score +=1;
        }
        
    } else if(rndNum[0]<=rndNum[1] && key == "left"){
        if(score != 0){
            score -=1;
        }

    } else if(rndNum[0]<=rndNum[1] && key == "right"){
        score +=1;

    } else if(rndNum[0]>=rndNum[1] && key == "right"){
        if(score != 0){
            score -=1;
        }

    }
}

function timer(){

}

// TODO onkeydown function
// on the event that 2 numbers are equal, player must press down their respective arrow keys simaltaneously


// {bug:a1} when i press key it registers checkAnswer based on the NEW generatedNums
// {bug: a2} when holding down it adds or subs from score and doesnt rndGen new numbs
document.onkeydown = function(event){ 
    if (event.which == 37){             
        checkAnswer("left",rndNum);
    } else if (event.which == 39) {
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