

var time=60;
var score=0;
var rnHit=0;;


function increaseScore (){
    score +=10;
    document.querySelector("#sRec").textContent=score;
}

function makebubble(){
    var cutler="";
    for(var i=1;i<66;i++){
       var a=Math.floor(Math.random()*10);
       cutler += `<div class="bubble">${a}</div>`;
    }
    document.querySelector("#pbottom").innerHTML=cutler
}

function runTimer(){
    var timer= setInterval(function(){
        if(time > 0){
            time--;
            document.querySelector("#tval").textContent=time;
        }else{
            clearInterval(timer);
            document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1>`;
        
        }
    },1000)
}

function getNewhit(){
    rnHit = Math.floor(Math.random()*10);
    document.querySelector("#hval").textContent=rnHit;
}

document.querySelector("#pbottom").addEventListener("click",function(info){
    var clicknum =Number(info.target.textContent);
    if(clicknum === rnHit){
        increaseScore();
        getNewhit();
        makebubble();
    }
})

runTimer();
makebubble();
getNewhit();
