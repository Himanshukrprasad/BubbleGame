var timer = 60;
var score = 0;
var hitrn = 0;

function decreaseScore(){
    score -= 10 ;
    document.querySelector("#scoreval").textContent = score;
}

function increseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i=1;i<=75;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML=clutter
}

function runTimer(){
    var timerint = setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
       }
       else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER <br><span id="score">${score}</span></h1>`;

       }
    },1000)
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increseScore();
        makeBubble();
        getNewHit();
    }
    else if(timer!=0){
        decreaseScore();
    }
})

runTimer();
makeBubble();
getNewHit();
