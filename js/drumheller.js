function getHeightPercent(id){
    return Math.round( 
        $(id).height() / 
        $(id).parent().height() * 100
    );       
}

var last_clicked = '';

function moveBars(event, reset){
    event.preventDefault();
    var height_pct = getHeightPercent('#bottom-bar'); 
    if (height_pct === 35 || !reset){
        $('#bottom-bar').height("auto"); 
        $('.red-bar-pad').css('display','block');
    } else if (reset){
        $('.red-bar-pad').css('display','none');
        $('#bottom-bar').height("35%");
        $('#rollup').height("35%");
    }
    $('html').css('overflow','hidden');
    $('#resume-pdf').css('display','none');
    $('#bio').css('display','none');
    return height_pct;
}

function bioStuff(height_pct,reset){
    $('html').css('overflow','auto');
    if (height_pct === 35 || !reset){
        $('#bio').css('display','block');
    } else{
        $('#bio').css('display','none');
        $('#male').css('color','white');
    } 
}

$(document).ready(function(){
     $("#male").click(function(event){
        var reset = (last_clicked === 'male' || last_clicked === '');
        var height_pct = moveBars(event, reset);
        last_clicked = (last_clicked === 'male') ? '' : 'male';
        $('#resume').css('color','white');
        $('#male').css('color','#ffffb3');
        if(reset){
            $("#rollup").toggle("slow").promise().done(function(){
                bioStuff(height_pct,reset);
            });
        }else{
            bioStuff(height_pct,reset);
        }
    });
});

function resumeStuff(height_pct,reset){
    $('html').css('overflow','auto');
    if (height_pct === 35 || !reset){
        $('#resume-pdf').css('display','block');
    } else{
        $('#resume-pdf').css('display','none');
        $('#resume').css('color','white');
    } 
}

$(document).ready(function(){
    $("#resume").click(function(event){
        var reset = (last_clicked === 'resume' || last_clicked === '');
        var height_pct = moveBars(event, reset);
        last_clicked = (last_clicked === 'resume') ? '' : 'resume';;
        $('#resume').css('color','#ff4d4d');
        $('#male').css('color','white');
        if(reset){
            $("#rollup").toggle("slow").promise().done(function(){
                resumeStuff(height_pct,reset);
            });
        } else{
            resumeStuff(height_pct,reset);
        }
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(
    function(){
        var i =-1;
        $('#heart').hover(function(){
            i=0;
            function myLoop (beat) {           
               setTimeout(function () {    
                  if (beat){
                    $('#heart').css('font-size', '130%');
                  } else{
                    $('#heart').css('font-size', '100%');  
                  }
                  if (i!=-1) {            
                     myLoop(!beat);             
                  }                        
               }, getRandomInt(300,500))
            }
            myLoop(true);
        },  function(){
                i=-1;
                setTimeout(function(){ 
                    $('#heart').css('font-size','100%'); 
                }, 700);
        });
    }
);
