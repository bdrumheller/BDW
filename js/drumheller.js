function getHeightPercent(id){
    return Math.round( 
        $(id).height() / 
        $(id).parent().height() * 100
    );       
}

$(document).ready(function(){
    $("#male, #resume").click(function(event){
        console.log();
        event.preventDefault();
        var height_pct = getHeightPercent('#bottom-bar'); 
        if (height_pct === 35){
            $('#bottom-bar').height("70%");
        } else{
            $('#bottom-bar').height("35%");
        }
        $('html').css('overflow','hidden');
        $("#rollup").toggle("slow").promise().done(function(){
            $('html').css('overflow','auto');
            if (height_pct === 35){
                $('#'+event.toElement.id).css('-webkit-text-stroke', '2px #ff4d4d');
            } else{
                $('#'+event.toElement.id).css('-webkit-text-stroke', '0px #ffffff');
            } 
        });
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
)