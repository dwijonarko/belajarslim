$(function() {
    $("#login").submit(function(e){
        $('.progress').show();
        setTimeout(function(){
            $.ajax({
                type: "POST",
                url: "http://myapp.dev/v1/login",
                crossDomain: true,
                beforeSend: function() {
                    
                },
                complete: function() {
                    $(".progress").hide();
                },
                data: {
                    email:$("#inputEmail").val(),
                    password:$("#inputPassword").val(),
                },
                dataType: 'json',
                success: function(response) {
                    //console.error(JSON.stringify(response));
                    if (response.error==true) {
                        $("#response").html("<div class='alert alert-danger'><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>"+response.message+"</div>");
                        $("#response").show();

                    } else if(response.error==false){
                        $("#response").html("<div class='alert alert-success'><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>"+response.message+"</div>");
                        $("#response").show();
                       Cookies.set('name', response.name, { expires: 7 });
                       Cookies.set('email', response.email, { expires: 7 });
                       Cookies.set('apiKey', response.apiKey, { expires: 7 });
                       setTimeout(function(){window.location.replace("/tasks");},1000);
                    };

                },
                error: function(error) {
                    //console.error("error");
                    console.log(error)
                }
            });
        },1000)
        e.preventDefault();
    });

    if($("#response").is('visible')){
        setTimeout(function() {
            $("#response").hide()
        }, 5000);        
    }

});