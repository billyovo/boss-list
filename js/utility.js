function bossColor(boss,id){
    switch(boss){
        case "A":
            $(id).css("background-color","rgb(204, 253, 255)");
            break;
        case "B":
            $(id).css("background-color","rgb(50, 179, 108)");
            break;
        case "C":
            $(id).css("background-color","rgb(130, 29, 130)");
            break;
        case "D":
            $(id).css("background-color","blue");
            break;
        case "E":
            $(id).css("background-color","lightgreen");
            break;
        case "F":
            $(id).css("background-color","rgb(38, 179, 222)");
            break; 
        case "G":
            $(id).css("background-color","rgb(240, 229, 26)");
            break;   
    }
}

function bossColorAll(){
    $(".boss01").each(function(){
        bossColor($(this).html(),this); 
    })

    $(".boss02").each(function(){
        bossColor($(this).html(),this); 
    })
}