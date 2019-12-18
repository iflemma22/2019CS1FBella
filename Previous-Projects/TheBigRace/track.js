 init();

function init(){
    for(var r=0; r<12; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace1();
    startRace2(); 
}

 
function startRace1(){
    TweenMax.to("#car1",2,{x:540,ease:Sine.easeOut});
    TweenMax.to("#car1",2,{rotation:90,delay:1,ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{y:-310,delay:2, ease:Sine.easeOut});
    TweenMax.to("#car1",1,{rotation:-4,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",1,{x:-65, y:-300,delay:3.3, ease:Sine.easeOut});
    TweenMax.to("#car1",1,{rotation:-90,delay:4, ease:Sine.easeOut});
    TweenMax.to("#car1",1,{y:-300,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{y:-3,delay:4.3, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{rotation:-180, delay:5.2, ease:Sine.easeOut});
    TweenMax.to("#car1",.5,{x:110,y:0,delay:6, ease:Sine.easeOut});
    
}
 
 function startRace2(){
    TweenMax.to("#car2",3,{x:540,ease:Sine.easeOut});
    TweenMax.to("#car2",2,{rotation:-90,delay:1.9,ease:Sine.easeOut});
    TweenMax.to("#car2",2,{y:-310,delay:2.3, ease:Sine.easeOut});
    TweenMax.to("#car2",3,{rotation:-180,delay:2.7, ease:Sine.easeOut});
    TweenMax.to("#car2",1,{x:-65, y:-300,delay:4, ease:Sine.easeOut});
    TweenMax.to("#car2",3,{rotation:-270,delay:4.2, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{y:-3,delay:5, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{rotation:-360, delay:5.2, ease:Sine.easeOut});
    TweenMax.to("#car2",.5,{x:130,y:0,delay:6.5, ease:Sine.easeOut});
    
}
  
 