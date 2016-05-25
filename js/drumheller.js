$(document).ready(function(){
    $("#male, #resume").click(function(event){
        event.preventDefault();
        var height_pct = Math.round( 
            $('#bottom-bar').height() / 
            $('#bottom-bar').parent().height() * 100
            );  
        if (height_pct === 35){
            $('#bottom-bar').height("70%");
        }
        else{
            $('#bottom-bar').height("35%");
        }
        $("#rollup").toggle("slow");
     
    });
});
