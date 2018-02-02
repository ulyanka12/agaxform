$('#submit-contact-form').click(function(ev){
    if ($('form')[0].checkValidity()){
        ev.preventDefault();
        $ajax({
            url:"http://formspree.io/uliana.boiarchuk@gmail.com",
            method:"POST",
            data:{
                clientName:$('#client-name').val(),
            cleintEmail:$('#client-email').val(),
           clientAnswer:$('#client-answer').val()
            },
            dataType:"json"
        }).done(function(){
            $('form')[0].reset();
            $('#form-msg').html('<p>Thanks for contacting me!!! </p>')
        }).fail(function(){
            $('#form-msg').html('<p>Sorry! Something went wrong.Please try again.</p>')
        });
        }
});