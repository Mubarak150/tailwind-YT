$(document).ready(function(){
  var name = 0;
  var box = 0; 
  var alert = 0; 
  var password = 0; 
  var confirmPassword = 0; 

  $(".name").on("input", function(){
    name = $(this).val();
    box  = $(this);
    alert = box.next();
    validateName (name, box, alert);
  })

  $("#emailAddr").on("input", function(){
    mail = $(this).val();
    validateEmail(mail);
  })

  $("#password").on("input", function(){
    password = $(this).val();
    box  = $(this);
    alert = box.next();
    lengthPassword (password, box, alert);
  })

  $("#confirm-password").on("input", function(){
    confirmPassword = $(this).val();
    box  = $(this);
    alert = box.next();
    matchPassword (confirmPassword, box, alert);
  })



/////////////////////////////////////////////////////// functions //
function lengthPassword(password, box, alert) {

  if (password === "") {
    alert.text("* this field is mandatory.");
    box.css( "border", "4px double red" );
    return false;
  } else if (password.length < 6) {
      alert.text("Password must be at least 6 characters.");
      box.css( "border", "4px double red" );
      return false;
  } else if (password.length > 10) {
      alert.text("Password cannot be longer than 10 characters.");
      box.css( "border", "4px double red" );
      return false;
  } else if (password.length >= 6 && password.length <= 10) {
    alert.empty();
    box.css( "border", "4px double green" );
    return true;
  }
}
/////////////////////////////////////////////////////////////////////////
function matchPassword(confirmPassword, box, alert) {
  // Check if the passwords match
  if (password !== confirmPassword) {
      alert.text("Passwords do not match.");
      box.css( "border", "4px double red" );
      return false;
  }
  else {
    box.css( "border", "4px double green" );
  alert.empty();
  return true;
  }
  
}
////////////////////////////////////////////////

function validateEmail(inputText) {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.match(mailformat)) {

    $("#emailAddr").css( "border", "4px double green" );
    $("#emailAddr").next().empty();
    return true;
  }

  else {
    $("#emailAddr").css( "border", "4px double red" );
    $("#emailAddr").next().text("* You have entered an invalid email address!");
    return false;
  }
}

////////////////////////////////////////////////////

function validateName (name, box, alert) {
    if(name == "") {
      alert.text("* this field is mandatory.");
      box.css( "border", "3px double red" );
    }
    else if (name.length > 0 && name.length < 4 ) {
      for (var i = 0; i < name.length; i++) {
        if(name[i] === " ") {
          alert.text("* no spaces allowed.");
          box.css( "border", "3px double red" );
          return;
        }
      
        else {
          alert.text("* the name is too short.");
          box.css( "border", "3px double yellow" );
        }
      }
      
    }

    else if (name.length >= 4) {
      for (var i = 0; i < name.length; i++) {
        if(name[i] === " ") {
          alert.text("* no spaces allowed.");
          box.css( "border", "3px double red" );
          return;
        }
      
        else {
          alert.empty();
          box.css( "border", "3px double green" );
        }
      }
    }

  }
  
});