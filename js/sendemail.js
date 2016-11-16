// para enviar email
$(document).ready(function(){
    $('#myBtn').click(function() {

        var emailCapturado = $('#email').val();

        if($.validateEmail(emailCapturado)){
            $.ajax({
              url: 'salvar.php',
              type: "POST",
              data: {email: emailCapturado},
              dataType: 'json',
              complete: function() {
                  $("#myModal").show();
                  $('#email').val('');
              }
            });
       }



   });





$.validateEmail = function (email){
  er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-])/;
 	if(er.exec(email))
 		return true;
 	else
 		return false;
};



});
