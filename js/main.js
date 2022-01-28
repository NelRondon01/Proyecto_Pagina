$(document).ready(function () {
    $("header .icons").click(function (e) { 
        if($(this).hasClass("open")){
            $("#close").hide();
            $("#menu").show();
        }else{
            $("#close").show();
            $("#menu").hide();
        }

        $(this).toggleClass("open")
        $(".menu").toggleClass("open")
    });
    
    $(".descript-wrap > li").hide();
    $(".tarjetas-wrap > .tarjeta").click(function () {  
        let pos = $(this).index()+1;
        $(".descript-wrap > li").hide();
        $(".descript-wrap > li:nth-child("+pos+")").fadeIn();
    });
});