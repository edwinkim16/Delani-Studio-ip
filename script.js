$(document).ready(function(){
    $("#icon1").click(function(event){
    event.preventDefault();
    $("#icon1").toggle();
    $("#design").toggle();
    $("#designtitle").show();
    });

    //hiding
    $("p#design").click(function(event){
        event.preventDefault();
        $("#icon1").toggle();
        $("#design").toggle();
        $("#design").hide();
        });

                     //icon2
    $("#icon2").click(function(){
        $("#icon2").toggle();
        $("#develop").toggle();
        $("#developtitle").show();
    });
        //hiding
    $("p#develop").click(function(){
            $("#icon2").toggle();
            $("#develop").toggle();
            $("#develop").hide();
        });
                      //icon3
    $("#icon3").click(function(){
        $("#icon3").toggle();
        $("#product").toggle();
        $("#producttitle").show();
    });
    //hiding
    $("p#product").click(function(){
        $("#icon3").toggle();
        $("#product").toggle();
        $("#product").hide();
    });
});

// image hover
$(document).ready(function(){
    $("#img1").mouseenter(function(){
        $("#txt1").show();
        
    });
    $("#img1").mouseleave(function(){
        $("#txt1").hide();
        
    })

    $("#img2").mouseenter(function(){
        $("#txt2").show();
    });
    $("#img2").mouseleave(function(){
        $("#txt2").hide();
    })

    $("#img3").mouseenter(function(){
        $("#txt3").show();
    });
    $("#img3").mouseleave(function(){
        $("#txt3").hide();
    })

    $("#img4").mouseenter(function(){
        $("#txt4").show();
    });
    $("#img4").mouseleave(function(){
        $("#txt4").hide();
    })

    $("#img5").mouseenter(function(){
        $("#txt5").show();
    });
    $("#img5").mouseleave(function(){
        $("#txt5").hide();
    })

    $("#img6").mouseenter(function(){
        $("#txt6").show();
    });
    $("#img6").mouseleave(function(){
        $("#txt6").hide();
    })

    $("#img7").mouseenter(function(){
        $("#txt7").show();
    });
    $("#img7").mouseleave(function(){
        $("#txt7").hide();
    })

    $("#img8").mouseenter(function(){
        $("#txt8").show();
    });
    $("#img8").mouseleave(function(){
        $("#txt8").hide();
    })
});

//form validation
function validate(){
    var username=document.getElementById("name1").value;
    var email=document.getElementById("email1").value;
    var message=document.getElementById("messo").value;

    if(username==''){
        alert('enter your name');
        username.focus();
        return false;
        
    }else if(email==''){
        alert('enter your email address');
        email.focus();
        return false
    }else if(message==''){
        alert('enter your message')
        message.focus()
        return false;
        
    }else
    alert('Dear '+username+'\n  your message has been received.')
}