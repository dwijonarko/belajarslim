function getTasks(){
  $.ajax({
    type: "GET",
    url: "http://myapp.dev/v1/tasks",
    crossDomain: true,
    data: {'apiKey': Cookies.set('apiKey')},
    beforeSend: function (request) {
      // request.setRequestHeader ("Authorization", Cookies.set('apiKey'));
    },
    complete: function() {
        $(".progress").hide();
    },
    dataType: 'json',
    success: function(response) {
        if (response.error==true) {
            $("#response").html("<div class='alert alert-danger'><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>"+response.message+"</div>");
            $("#response").show();

        } else if(response.error==false){
             $.each(response.tasks, function(key,task) {
                 $("#response_row").append("<tr><td>"+task.id+"</td><td>"+task.task+"</td><td>"+task.status+"</td><td>"+task.createdAt+"</td></tr>");
              });
            $("#response").show();
        };

    },
    error: function(error) {
        //console.error("error");
        console.log(error.responseText)
    }
  });
}
jQuery(document).ready(function($){
  $(".progress").show();
    setTimeout(function(){
      getTasks();
    },1000);
});