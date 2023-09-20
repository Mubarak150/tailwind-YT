$(document).ready(function() {
   var stop = false;
   var appeared = false;
   var appeared2=true;
   var confirmPassword = 0 ;
   var password = 0;
   var message2; 
   

    $(".name").on("input", function() {
      var one = $(this).val(); 
      console.log(one);
      console.log(one.length)
        
        if(one === "" && !appeared ) { 
        appeared = true;
        var message = $(this).after("<p class='fill-alert text-yellow-200 font-bold text-sm'>* please fill this portion...</p>");
        $("#sign-up").prop("disabled", true);
        $("#sign-up").css("backgroundColor", "red")
        $("#sign-up").css("color", "white")
        $(this).css("border", "2px solid red")
        
        }
        else {
          appeared = false;
          message = $(this).next(".fill-alert").remove();
          $("#sign-up").prop("disabled", false);
          $("#sign-up").css("backgroundColor", "")
          $("#sign-up").css("color", "")
          $(this).css("border", "")
        }
      
    }) // up to this line the code is fine for me.

    ////////// pass word justification 
    $("#password").on("input", function() {
      password = $("#password").val(); 

    })
    
    $("#confirm-password").on("input", function() {
      confirmPassword = $("#confirm-password").val(); 
      // console.log(confirmPassword);
      // console.log(confirmPassword.length)
      // console.log(password);
      // console.log(password.length)
      appeared2=true;

      // if(password.length === confirmPassword.length ) {
        if(password !== confirmPassword && appeared2)  {
            appeared2 = true;
            message2 = $(".match-alert").remove();
            message2 = $("#confirm-password").before("<p class='match-alert text-yellow-200 font-bold text-sm'>** passwords must match...</p>");
            $("#sign-up").prop("disabled", true);
            $("#sign-up").css("backgroundColor", "red")
            $("#sign-up").css("color", "white")
            $("#password").css("border", "2px solid red")
            $("#confirm-password").css("border", "2px solid red")
            console.log("ture")

            }
      else {
        message2 = $(".match-alert").remove();
        $("#sign-up").prop("disabled", false);
        $("#sign-up").css("backgroundColor", "")
        $("#sign-up").css("color", "")
        $("#password").css("border", "")
        $("#confirm-password").css("border", "")
        appeared2 = false;
        console.log("falsss")
            
          }
    })
 
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////

 