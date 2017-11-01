var context;
window.addEventListener('load', init, false);
function init() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}

var dogBarkingBuffer = null;
// Fix up prefixing
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

function loadFalseSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      falseBuffer = buffer;
    }, );
  }
  request.send();
}
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
loadFalseSound("false.mp3");

function loadGoSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      gameoverBuffer = buffer;
    }, );
  }
  request.send();
}
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
loadGoSound("gameover.mp3");

function playSound(buffer) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
}


var k=5;
if(window.innerWidth<350){
    k=0.857;
}
if(window.innerWidth>=350&&window.innerWidth<380){
    k=1;
}
if(window.innerWidth>=380&&window.innerWidth<415){
    k=380/350;
}
if(window.innerWidth>=415){
    k=415/350;
}

if(localStorage.dayonightS){
    localStorage.clear();
}
var nightColors=['rgb(245, 223, 0)','rgb(28, 223, 95)','rgb(56, 128, 245)','rgb(255, 47, 150)','rgb(255, 166, 47)'];
var dayColors=['rgb(245, 234, 118)','rgb(123, 223, 158)','rgb(121, 169, 245)','#FF89C4','rgb(255, 199, 124)'];
var colors=nightColors;
var color;
var random_color;

var punkt=1;

var score=0;
var points_right=5;
var points_false=2;
var scorebox=document.getElementById("scorebox");
var time=document.getElementById("time");
var time_width=time.offsetWidth;
var minus_time=10*k;
var plus_time=10*k;
var a=1500;
var e=1;
var timeout=0;
var timearray= [];
var volume=0;
var dayORnight=0;
var mitteEcke=0;
gOf=0;
var box1=document.getElementById("box1");
var box2=document.getElementById("box2");
var box3=document.getElementById("box3");
var box4=document.getElementById("box4");
var box5=document.getElementById("box5");
var box6=document.getElementById("box6");
var box7=document.getElementById("box7");
var box8=document.getElementById("box8");
var box9=document.getElementById("box9");
var box10=document.getElementById("box10");
var box11=document.getElementById("box11");
var box12=document.getElementById("box12");
var box13=document.getElementById("box13");
var box14=document.getElementById("box14");
var box15=document.getElementById("box15");
var box16=document.getElementById("box16");
var frontpage=document.getElementById("frontpage");
var playbutton=document.getElementById("playbutton");
var game=document.getElementById("game");
var score_f=document.getElementById("score_f");
var highscoreBox=document.getElementById("highscore");
var gameover=document.getElementById("gameover");
var descriptionpage=document.getElementById("descriptionpage");
var sound=document.getElementById("sound");
var daynight=document.getElementById("daynight");
var help=document.getElementById("help");
var description=document.getElementById("description");
var arrow=document.getElementById("arrow");
var soundgo=document.getElementById('soundgo');
var logo=document.getElementById('logo');
var languageF=document.getElementById('languageF');
var englishF=document.getElementById('englishF');
var deutschF=document.getElementById('deutschF');
var arrowF=document.getElementById('arrowF');
var languageBoxD=document.getElementById('languageBoxD');
var languageD=document.getElementById('languageD');
var languageNameD=document.getElementById('languagenameD');

var info=document.getElementById('info');
var minusI=document.getElementById('minus');
var plusI=document.getElementById('plus');
var leftI=document.getElementById('leftI');
var rightI=document.getElementById('rightI');

var highscore=0;

info.style.display="none";

plusI.addEventListener('click',function(){
    minusI.style.display="block";
    plusI.style.display="none";
})

minusI.addEventListener('click',function(){
    info.style.display="none";
    plusI.style.display="block";
    minusI.style.display="none";
    logo.style.display="block";
    frontpage.style.display="block";
    highscoreBox.style.display="block";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="block";
    } 
})

if(localStorage.dayORnightS){
    dayORnight=Number(localStorage.dayORnightS);
}else{
    localStorage.dayORnightS = dayORnight;
}
if(dayORnight==0){
    languageNameD.style.backgroundColor="rgb(83,72,80)";
    languageNameD.style.borderColor="rgb(160,124,149)";
if(window.innerWidth<350){
    logo.innerHTML="<img src='img/logoN.png' width='110' height='27'>";
}
if(window.innerWidth>=350&&window.innerWidth<380){
    logo.innerHTML="<img src='img/logoN.png' width='126' height='32'>";
}
if(window.innerWidth>=380&&window.innerWidth<415){
    logo.innerHTML="<img src='img/logoN.png' width='140' height='35'>";
}
if(window.innerWidth>=415){
    logo.innerHTML="<img src='img/logoN.png' width='152' height='38'>";
}
            colors=nightColors;
            document.body.style.background='rgba(95,82,91,1)';
            daynight.style.backgroundColor='rgb(111,151,237)';
        if(game.style.display=="block"){
            for (var x = dayColors.length - 1; x >= 0; x--) {
                if(time.style.backgroundColor==dayColors[x]){
                   time.style.backgroundColor=nightColors[x]; 
                }
            }
        }
        }else{
            languageNameD.style.backgroundColor="rgb(134,104,125)";
            languageNameD.style.borderColor="rgb(200,162,189)"
if(window.innerWidth<350){
    logo.innerHTML="<img src='img/logoD.png' width='110' height='27'>";
}
if(window.innerWidth>=350&&window.innerWidth<380){
    logo.innerHTML="<img src='img/logoD.png' width='126' height='32'>";
}
if(window.innerWidth>=380&&window.innerWidth<415){
    logo.innerHTML="<img src='img/logoD.png' width='140' height='35'>";
}
if(window.innerWidth>=415){
    logo.innerHTML="<img src='img/logoD.png' width='152' height='38'>";
}
            colors=dayColors;
            document.body.style.background='rgb(160,124,149)';
            daynight.style.backgroundColor='rgb(230,216,72)';
        if(game.style.display=="block"){
            for (var i = nightColors.length - 1; i >= 0; i--) {
                if(time.style.backgroundColor==nightColors[i]){
                   time.style.backgroundColor=dayColors[i]; 
                }
            }
        }
    }
if(localStorage.volumeS){
    volume=Number(localStorage.volumeS);
}else{
    localStorage.volumeS = volume;
}


var boxes=[box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16];
var option=[sound,daynight,help,description];

var posSx=300*k;
var posDNx=300*k;
var posHx=317*k;
var posDx=317*k;

var posx=[posSx,posDNx,posHx,posDx];

var posSy=10*k;
var posDNy=27*k;
var posHy=10*k;
var posDy=27*k;

var posy=[posSy,posDNy,posHy,posDy];

var posSxM=(window.innerWidth/2)-(105*k);
var posDNxM=(window.innerWidth/2)-(105*k);
var posHxM=(window.innerWidth/2)+(10*k);
var posDxM=(window.innerWidth/2)+(10*k);

var posxM=[posSxM,posDNxM,posHxM,posDxM];

var posSyM=(window.innerHeight/2)-(105*k);
var posDNyM=(window.innerHeight/2)+(10*k);
var posHyM=(window.innerHeight/2)-(105*k);
var posDyM=(window.innerHeight/2)+(10*k);


var posyM=[posSyM,posDNyM,posHyM,posDyM];

var x=[];
var y=[];
    
for (var i = option.length - 1; i >= 0; i--) {
    x.push((posxM[i]-posx[i])/50);
    y.push((posyM[i]-posy[i])/50);
}
game.style.display="none";
gameover.style.display="none";
descriptionpage.style.display="none";


    if(volume==0){
    soundgo.innerHTML='' ;
}

if(localStorage.languageS){
    languageF.style.display="none";
}else{
    frontpage.style.display="none";
    highscoreBox.style.display="none";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="none";
    } 
}

    englishF.addEventListener("click",function(){
        englishF.style.backgroundColor="rgb(255,207,0)";
        deutschF.style.backgroundColor="rgb(225,220,238)";
        localStorage.languageS="English";
    }) 
    deutschF.addEventListener("click",function(){
        deutschF.style.backgroundColor="rgb(255,207,0)";
        englishF.style.backgroundColor="rgb(225,220,238)";
        localStorage.languageS="Deutsch";
    })
arrowF.addEventListener("click",function(){
    if(localStorage.languageS){
        languagenameD.innerHTML=localStorage.languageS;
        if(localStorage.languageS=="English"){
            languageD.innerHTML="language:";
        plusI.innerHTML="<img src='img/plusEng.png' width=100%>";
        minusI.innerHTML="<img src='img/minusEng.png' width=100%>";
        }else{
            languageD.innerHTML="Sprache:"
        plusI.innerHTML="<img src='img/plusDeu.png' width=100%>";
        minusI.innerHTML="<img src='img/minusDeu.png' width=100%>";
        }
    if(localStorage.highscoreS){
     highscore=Number(localStorage.highscoreS);
        descriptionpage.style.display="block";
    highscoreBox.style.display="none";
        languageF.style.display="none";
        frontpage.style.display="none";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="none";
    } 
    }else{
     localStorage.highscoreS=0;
        languageF.style.display="none";
    info.style.display="block";
    minusI.style.display="none";
    logo.style.display="none";
    }
    }
})

    if(localStorage.languageS){
        languagenameD.innerHTML=localStorage.languageS;
        if(localStorage.languageS=="English"){
            languageD.innerHTML="Language:";
        plusI.innerHTML="<img src='img/plusEng.png' width=100%>";
        minusI.innerHTML="<img src='img/minusEng.png' width=100%>";
        }else{
            languageD.innerHTML="Sprache:";
        plusI.innerHTML="<img src='img/plusDeu.png' width=100%>";
        minusI.innerHTML="<img src='img/minusDeu.png' width=100%>";
        }
    if(localStorage.highscoreS){
     highscore=Number(localStorage.highscoreS);
        descriptionpage.style.display="none";
    highscoreBox.style.display="block";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="block";
    } 
    }else{
     localStorage.highscoreS=0;

        frontpage.style.display="block";
        languageF.style.display="none";
    highscoreBox.style.display="block";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="block";
    } 
    }
    }
    if(localStorage.highscoreS){
     highscore=Number(localStorage.highscoreS);
}
languagenameD.addEventListener("click",function(){
        frontpage.style.display="none";
        languageF.style.display="block";
    highscoreBox.style.display="none";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="none";
    } 
    descriptionpage.style.display="none";
    if(localStorage.languageS=="English"){
        englishF.style.backgroundColor="rgb(255,207,0)";
        deutschF.style.backgroundColor="rgb(225,220,238)";
        plusI.innerHTML="<img src='img/plusEng.png' width=100%>";
        minusI.innerHTML="<img src='img/minusEng.png' width=100%>";
     }else{
        deutschF.style.backgroundColor="rgb(255,207,0)";
        englishF.style.backgroundColor="rgb(225,220,238)";
        plusI.innerHTML="<img src='img/plusDeu.png' width=100%>";
        minusI.innerHTML="<img src='img/minusDeu.png' width=100%>";
    }
})
highscoreBox.innerHTML="<img src='img/crown.png' width='30' height='30'>"+"  "+highscore;


playbutton.style.backgroundColor="rgb(255,207,0)";
playbutton.addEventListener('click',function(){
    gOf=1;
    if(mitteEcke==0){
    time.style.width= (280*k)+"px";
    time_width=(280*k);
    game.style.display="block";
    frontpage.style.display="none";
    timeout=0;
    e=0;
    for (var i = 0; i <25; i++) {
        timearray.push(setTimeout(function(){
        if(game.style.display=="block"){
        color_change(a);
    }
        },timeout)
        )
        timeout=timeout+a;
        a=a-30;
        e++;
}
timearray.push(setTimeout(function(){
    e++;
},28500)
)
    a=1500;
    
color=colors[Math.floor(Math.random()*colors.length)];

box1.style.backgroundColor= color;
box2.style.backgroundColor= color;
box3.style.backgroundColor= color;
box4.style.backgroundColor= color;
box5.style.backgroundColor= color;
box6.style.backgroundColor= color;
box7.style.backgroundColor= color;
box8.style.backgroundColor= color;
box9.style.backgroundColor= color;
box10.style.backgroundColor= color;
box11.style.backgroundColor= color;
box12.style.backgroundColor= color;
box13.style.backgroundColor= color;
box14.style.backgroundColor= color;
box15.style.backgroundColor= color;
box16.style.backgroundColor= color;

scorebox.innerHTML=score;
time.style.backgroundColor=color;

}
});
var timeI =setInterval(function(){
    time.style.width=time_width-(0.1*k)+"px";
    time_width=time_width-(0.1*k);
    if(time_width<0 &&game.style.display=="block"){
        for (var i = timearray.length - 1; i >= 0; i--) {
            clearTimeout(timearray[i]);
        }
    game.style.display="none";
    highscoreBox.style.display="none";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="none";
    }
    logo.style.display="none";
    gameover.style.display="block"; 
    if(volume==0){
    
    playSound(gameoverBuffer);
}
    document.body.style.background = 'rgb(225,35,17)';
}
},5);

setInterval(function(){
        if(e>25){
        color_change(750);
e=e+1;
}
},750);

function Mitte(){
    setTimeout(function(){
    mitteEcke=1;
        option[0].style.display="none";
        setTimeout(function(){
            option[0].style.padding=15*k +"px";
            option[0].style.left=posxM[0]+'px';
            option[0].style.top=posyM[0]+'px';
            option[0].style.display="block";
            option[0].style.width=65*k+"px";
            option[0].style.height=65*k+"px";
            frontpage.style.opacity="0.7";
            highscoreBox.style.opacity="0.7";
        },600)
    },150)
    setTimeout(function(){
        option[2].style.display="none";
        setTimeout(function(){
            option[2].style.padding=15*k +"px";
            option[2].style.left=posxM[2]+'px';
            option[2].style.top=posyM[2]+'px';
            option[2].style.display="block";
            option[2].style.width=65*k+"px";
            option[2].style.height=65*k+"px";
        },600)
    },300)
    setTimeout(function(){
        option[3].style.display="none";
        setTimeout(function(){
            option[3].style.padding=15*k +"px";
            option[3].style.left=posxM[3]+'px';
            option[3].style.top=posyM[3]+'px';
            option[3].style.display="block";
            option[3].style.width=65*k+"px";
            option[3].style.height=65*k+"px";
        },600)
    },450)
    setTimeout(function(){
        option[1].style.display="none";
        setTimeout(function(){
            option[1].style.padding=15*k +"px";
            option[1].style.left=posxM[1]+'px';
            option[1].style.top=posyM[1]+'px';
            option[1].style.display="block";
            option[1].style.width=65*k+"px";
            option[1].style.height=65*k+"px";
        },600)
    },600)

    setTimeout(function(){

if(window.innerWidth<350){
        if(volume==0){
            option[0].innerHTML="<img src='img/volume-control.png' width='55' height='55'>";
        }else{
            option[0].innerHTML="<img src='img/volume-adjustment-mute.png' width='55' height='55'>";
        }
        option[2].innerHTML="<img src='img/question-mark.png' width='55' height='55'>";
        option[3].innerHTML="<img src='img/menu.png' width='55' height='55'>";
        if(dayORnight==0){
            daynight.innerHTML="<img src='img/half-moon.png' width='55' height='55'>";
        }else{
            daynight.innerHTML="<img src='img/sunny-day.png' width='55' height='55'>";
        }
}
if(window.innerWidth>=350&&window.innerWidth<380){
            if(volume==0){
            option[0].innerHTML="<img src='img/volume-control.png' width='65' height='65'>";
        }else{
            option[0].innerHTML="<img src='img/volume-adjustment-mute.png' width='65' height='65'>";
        }
        option[2].innerHTML="<img src='img/question-mark.png' width='65' height='65'>";
        option[3].innerHTML="<img src='img/menu.png' width='65' height='65'>";
        if(dayORnight==0){
            daynight.innerHTML="<img src='img/half-moon.png' width='65' height='65'>";
        }else{
            daynight.innerHTML="<img src='img/sunny-day.png' width='65' height='65'>";
        }
}
if(window.innerWidth>=380&&window.innerWidth<415){
            if(volume==0){
            option[0].innerHTML="<img src='img/volume-control.png' width='70' height='70'>";
        }else{
            option[0].innerHTML="<img src='img/volume-adjustment-mute.png' width='70' height='70'>";
        }
        option[2].innerHTML="<img src='img/question-mark.png' width='70' height='70'>";
        option[3].innerHTML="<img src='img/menu.png' width='70' height='70'>";
        if(dayORnight==0){
            daynight.innerHTML="<img src='img/half-moon.png' width='70' height='70'>";
        }else{
            daynight.innerHTML="<img src='img/sunny-day.png' width='70' height='70'>";
        }
}
if(window.innerWidth>=415){
            if(volume==0){
            option[0].innerHTML="<img src='img/volume-control.png' width='77' height='77'>";
        }else{
            option[0].innerHTML="<img src='img/volume-adjustment-mute.png' width='77' height='77'>";
        }
        option[2].innerHTML="<img src='img/question-mark.png' width='77' height='77'>";
        option[3].innerHTML="<img src='img/menu.png' width='77' height='77'>";
        if(dayORnight==0){
            daynight.innerHTML="<img src='img/half-moon.png' width='77' height='77'>";
        }else{
            daynight.innerHTML="<img src='img/sunny-day.png' width='77' height='77'>";
        }
}
    },600)
            if(gOf==0){
        frontpage.style.display="block";
    }else{
        game.style.display="block";
    }
}
function Ecke(){
    setTimeout(function(){
    mitteEcke=0;
        option[0].style.display="none";
        setTimeout(function(){
            option[0].style.padding="0px";
            option[0].innerHTML="";
            option[0].style.left=posx[0]+'px';
            option[0].style.top=posy[0]+'px';
            option[0].style.display="block";
            option[0].style.width=14*k+"px";
            option[0].style.height=14*k+"px";
            frontpage.style.opacity="1";
            highscoreBox.style.opacity="1";
            document.body.style.opacity="1";
        },600)
    },150)
    setTimeout(function(){
        option[2].style.display="none";
        setTimeout(function(){
            option[2].style.padding="0px";
            option[2].innerHTML="";
            option[2].style.left=posx[2]+'px';
            option[2].style.top=posy[2]+'px';
            option[2].style.display="block";
            option[2].style.width=14*k+"px";
            option[2].style.height=14*k+"px";
        },600)
    },300)
    setTimeout(function(){
        option[3].style.display="none";
        setTimeout(function(){
            option[3].style.padding="0px";
            option[3].innerHTML="";
            option[3].style.left=posx[3]+'px';
            option[3].style.top=posy[3]+'px';
            option[3].style.display="block";
            option[3].style.width=14*k+"px";
            option[3].style.height=14*k+"px";
        },600)
    },450)
    setTimeout(function(){
        option[1].style.display="none";
        setTimeout(function(){
            option[1].style.padding="0px";
            option[1].innerHTML="";
            option[1].style.left=posx[1]+'px';
            option[1].style.top=posy[1]+'px';
            option[1].style.display="block";
            option[1].style.width=14*k+"px";
            option[1].style.height=14*k+"px";
        },600)
    },600)

} 
document.addEventListener('click',function(){
        if(gameover.style.display=="block"){

    if(volume==0){
    soundgo.innerHTML='' ;
}
    if(dayORnight==0){
    document.body.style.background = "rgba(95,82,91,1)";
}else{
    document.body.style.background='rgb(160,124,149)';
}
    if(score>highscore){
        highscoreBox.innerHTML="<img src='img/crown.png' width='30' height='30'>" + score;
        highscore=score;
        localStorage.highscoreS=highscore;
    }
    gameover.style.display="none";
    logo.style.display="block ";
    gOf=0;
    frontpage.style.display="block";
    highscoreBox.style.display="block";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="block";
    }
    time_width=280;
    score_f.innerHTML=score;
    score=0;
    scorebox.innerHTML=score;
}
    if(option[0].style.display=="block"&&mitteEcke==1&&punkt==1&&frontpage.style.display=="block"){
        Ecke();
    }
        if(option[0].style.display=="block"&&mitteEcke==1&&punkt==1&&game.style.display=="block"){
            Ecke();
            timeI =setInterval(function(){
    time.style.width=time_width-0.1+"px";
    time_width=time_width-0.1;
    if(time_width<0 &&game.style.display=="block"){
        for (var i = timearray.length - 1; i >= 0; i--) {
            clearTimeout(timearray[i]);
        }
    game.style.display="none";
    highscoreBox.style.display="none";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="none";
    }
    logo.style.display="none";
    gameover.style.display="block";
    document.body.style.background = 'rgb(225,35,17)';
    document.addEventListener('click',function(){
        if(gameover.style.display=="block"){
    if(score>highscore){
        highscoreBox.innerHTML="<img src='img/crown.png' width='30' height='30'>" + score;
        highscore=score;
        localStorage.highscoreS=highscore;
    }
    document.body.style.background = "rgba(95,82,91,1)";
    gameover.style.display="none";
    frontpage.style.display="block";
    highscoreBox.style.display="block";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="block";
    }
    logo.style.display="block";
    time_width=280;
    score_f.innerHTML=score;
    score=0;
    scorebox.innerHTML=score;
}
});
}
},5);
        }
})
sound.addEventListener('click',function(){
    if(mitteEcke==0){
        Mitte();
        if(game.style.display=="block"){
            clearInterval(timeI);
        }
    }
    if(mitteEcke==1){
        punkt=2;
            if(gOf==0){
        frontpage.style.display="block";
    }else{
        game.style.display="block";
    }
if(window.innerWidth<350){
        if(volume==1){
            option[0].innerHTML="<img src='img/volume-control.png' width='55' height='55'>";
        }else{
            option[0].innerHTML="<img src='img/volume-adjustment-mute.png' width='55' height='55'>";
        }
}
if(window.innerWidth>=350&&window.innerWidth<380){
            if(volume==1){
            option[0].innerHTML="<img src='img/volume-control.png' width='65' height='65'>";
        }else{
            option[0].innerHTML="<img src='img/volume-adjustment-mute.png' width='65' height='65'>";
        }
}
if(window.innerWidth>=380&&window.innerWidth<415){
            if(volume==1){
            option[0].innerHTML="<img src='img/volume-control.png' width='70' height='70'>";
        }else{
            option[0].innerHTML="<img src='img/volume-adjustment-mute.png' width='70' height='70'>";
        }
}
if(window.innerWidth>=415){
            if(volume==1){
            option[0].innerHTML="<img src='img/volume-control.png' width='77' height='77'>";
        }else{
            option[0].innerHTML="<img src='img/volume-adjustment-mute.png' width='77' height='77'>";
        }
    }
            if(volume==0){
            volume=1;
    localStorage.volumeS = volume;
        }else{
            volume=0;
    localStorage.volumeS = volume;
        }
        setTimeout(function(){
        punkt=1;
    },10)
    }
})
daynight.addEventListener('click',function(){
    if(mitteEcke==0){
        Mitte();
        if(game.style.display=="block"){
            clearInterval(timeI);
        }
    }
    if(mitteEcke==1){
        punkt=2;
            if(gOf==0){
        frontpage.style.display="block";
    }else{
        game.style.display="block";
    }
        if(dayORnight==1){
            dayORnight=0;
            localStorage.dayORnightS = dayORnight;

if(window.innerWidth<350){
    logo.innerHTML="<img src='img/logoN.png' width='110' height='27'>";
}
if(window.innerWidth>=350&&window.innerWidth<380){
    logo.innerHTML="<img src='img/logoN.png' width='126' height='32'>";
}
if(window.innerWidth>=380&&window.innerWidth<415){
    logo.innerHTML="<img src='img/logoN.png' width='140' height='35'>";
}
if(window.innerWidth>=415){
    logo.innerHTML="<img src='img/logoN.png' width='152' height='38'>";
}
if(window.innerWidth<350){
            daynight.innerHTML="<img src='img/half-moon.png' width='55' height='55'>";
}
if(window.innerWidth>=350&&window.innerWidth<380){
            daynight.innerHTML="<img src='img/half-moon.png' width='65' height='65'>";
}
if(window.innerWidth>=380&&window.innerWidth<415){
            daynight.innerHTML="<img src='img/half-moon.png' width='70' height='70'>";
}
if(window.innerWidth>=415){
            daynight.innerHTML="<img src='img/half-moon.png' width='77' height='77'>";
}
            colors=nightColors;
            document.body.style.background='rgba(95,82,91,1)';
            languageNameD.style.borderColor="rgb(160,124,149)";
            languageNameD.style.backgroundColor="rgb(84,72,80)";
            daynight.style.backgroundColor='rgb(111,151,237)';
        if(game.style.display=="block"){
            for (var x = dayColors.length - 1; x >= 0; x--) {
                if(time.style.backgroundColor==dayColors[x]){
                   time.style.backgroundColor=nightColors[x]; 
                }
            }
        }
        }else{
            dayORnight=1;
    localStorage.dayORnightS = dayORnight;

if(window.innerWidth<350){
    logo.innerHTML="<img src='img/logoD.png' width='110' height='27'>";
}
if(window.innerWidth>=350&&window.innerWidth<380){
    logo.innerHTML="<img src='img/logoD.png' width='126' height='32'>";
}
if(window.innerWidth>=380&&window.innerWidth<415){
    logo.innerHTML="<img src='img/logoD.png' width='140' height='35'>";
}
if(window.innerWidth>=415){
    logo.innerHTML="<img src='img/logoD.png' width='152' height='38'>";
}
if(window.innerWidth<350){
            daynight.innerHTML="<img src='img/sunny-day.png' width='55' height='55'>";
}
if(window.innerWidth>=350&&window.innerWidth<380){
            daynight.innerHTML="<img src='img/sunny-day.png' width='65' height='65'>";
}
if(window.innerWidth>=380&&window.innerWidth<415){
            daynight.innerHTML="<img src='img/sunny-day.png' width='70' height='70'>";
}
if(window.innerWidth>=415){
            daynight.innerHTML="<img src='img/sunny-day.png' width='77' height='77'>";
}
            colors=dayColors;
            document.body.style.background='rgb(160,124,149)';
            languageNameD.style.borderColor="rgb(200,162,189)";
            languageNameD.style.backgroundColor="rgb(134,104,125)";
            daynight.style.backgroundColor='rgb(230,216,72)';
        if(game.style.display=="block"){
            for (var i = nightColors.length - 1; i >= 0; i--) {
                if(time.style.backgroundColor==nightColors[i]){
                   time.style.backgroundColor=dayColors[i]; 
                }
            }
        }
    }
        setTimeout(function(){
        punkt=1;
            },10)
    }
})
help.addEventListener('click',function(){
    if(mitteEcke==0){
        Mitte();
        if(game.style.display=="block"){
            clearInterval(timeI);
        }
    }
    if(mitteEcke==1){
        punkt=2;
            if(gOf==0){
        frontpage.style.display="block";
    }else{
        game.style.display="block";
    }
        
        frontpage.style.display="none";
    info.style.display="block";
    minusI.style.display="none";
    highscoreBox.style.display="none";
    for (var i = option.length - 1; i >= 0; i--) {
        option[i].style.display="none";
    }
    logo.style.display="none";
        setTimeout(function(){
        punkt=1;
    },10)
    }
})
description.addEventListener('click',function(){
    if(mitteEcke==0){
        Mitte();
        if(game.style.display=="block"){
            clearInterval(timeI);
        }
    }
    if(mitteEcke==1){
        punkt=2;
        frontpage.style.display="none";
        highscoreBox.style.display="none";
        game.style.display="none";
        descriptionpage.style.display="block";
        for (var i = option.length - 1; i >= 0; i--) {
            option[i].style.display="none";
        }
        arrow.addEventListener('click',function(){
            if(gOf==0){
        frontpage.style.display="block";
    }else{
        game.style.display="block";
    }
        highscoreBox.style.display="block";
        descriptionpage.style.display="none";
        for (var i = option.length - 1; i >= 0; i--) {
            option[i].style.display="block";
        }
        setTimeout(function(){
        punkt=1;
    },10)
        })
    }
})

box1.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box1.style.backgroundColor==color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box1.style.backgroundColor===random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box1.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box2.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box2.style.backgroundColor==color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box2.style.backgroundColor===random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box2.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score; 
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box3.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box3.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box3.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box3.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box4.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box4.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box4.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box4.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box5.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box5.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box5.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box5.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box6.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box6.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box6.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box6.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box7.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box7.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box7.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box7.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box8.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box8.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box8.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box8.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box9.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box9.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color9=colors[Math.floor(Math.random()*colors.length)];
    while(box9.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box9.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box10.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box10.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box10.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box10.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box11.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box11.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box11.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box11.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box12.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box12.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box12.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box12.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box13.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box13.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box13.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box13.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box14.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box14.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box14.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box14.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box15.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box15.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box15.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box15.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});

box16.addEventListener('click',function(){
    if(mitteEcke==0){
    color=time.style.backgroundColor;
    if(box16.style.backgroundColor===color){
        if(dayORnight==1){
            colors=dayColors;
        }else{
            colors=nightColors;
        }
	random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box16.style.backgroundColor==random_color){
    	random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box16.style.backgroundColor= random_color;
    score=score+points_right;
    scorebox.innerHTML=score;
    if(time_width>=280){
        time.style.width=280+"px";
        time_width=280;
    }else{
    time.style.width=time_width+plus_time+"px";
    time_width=time_width+plus_time;
}
}   else{
    if(volume==0){
    playSound(falseBuffer);
}
    score=score-points_false;
    scorebox.innerHTML=score;
    time.style.width=time_width-minus_time+"px";
    time_width=time_width-minus_time;
}
}
});
function color_change(i){

    delay=Math.floor(Math.random()*i);
    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box1.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box1.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box3.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box3.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);
    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box8.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box8.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box12.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box13.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box2.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box2.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box5.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box5.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box10.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box10.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box16.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box16.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box4.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box4.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box6.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box6.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box12.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box12.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box14.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box14.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box7.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box7.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box9.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box9.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box11.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box11.style.backgroundColor= random_color;
    },delay);

    delay=Math.floor(Math.random()*i);

    setTimeout(function(){
    random_color=colors[Math.floor(Math.random()*colors.length)];
    while(box15.style.backgroundColor===random_color){
        random_color=colors[Math.floor(Math.random()*colors.length)];
    }
    box15.style.backgroundColor= random_color;
    },delay);
}
