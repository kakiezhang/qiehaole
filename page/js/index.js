$(document).ready(function(){
    var vegetable = $("#vegetable"), meat = $("#meat"), soup = $("#soup"), spec = $("#speciality");
    vegetable.click(function(){
	window.location.href = "http://www.qiehaole.com/list/?type=2";
        $("#home-header li").each(function(){
            $(this).removeClass("active");
        });
        vegetable.addClass("active");
        $("#content-items .items").each(function(){
            $(this).hide();
        });
        $("#items-0").show();
        
    });
    meat.click(function(){
	window.location.href = "http://www.qiehaole.com/list/?type=1";
        $("#home-header li").each(function(){
            $(this).removeClass("active");
        });
        meat.addClass("active");
        $("#content-items .items").each(function(){
            $(this).hide();
        });
        $("#items-1").show();
                                  
    });
    soup.click(function(){
	window.location.href = "http://www.qiehaole.com/list/?type=3";
        $("#home-header li").each(function(){
            $(this).removeClass("active");
        });
        soup.addClass("active");
        $("#content-items .items").each(function(){
            $(this).hide();
        });
        $("#items-2").show();
                             
    });
    /*spec.click(function(){
        $("#home-header li").each(function(){
            $(this).removeClass("active");
        });
        spec.addClass("active");
        $("#content-items .items").each(function(){
            $(this).hide();
        });
        $("#items-3").show();
                             
    });*/
//        $("#home-header li").each(function(){
//        $(this).click(function(){
//            $("#home-header li").each(function(){
//                $(this).removeClass("active");
//            });
//            $(this).addClass("active");
//        });
//    });


    $("#items-0 .item").each(function(){
        $(this).click(function(){
		window.open($(this).attr("href"));
        });
    });


});
