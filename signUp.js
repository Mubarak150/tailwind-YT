$(document).ready(function(){
  var name = 0;
  var box = 0; 
  var alert = 0; 
  var password = $("#password").val(); 
  var confirmPassword = $("#confirm-password").val();
  // array content
  var firstName = "";
  var lastName = ""; //$(".last-name").val();
  var fatherName = ""; //$(".father-name").val(); 
  var email = ""; // $("#emailAddr").val(); 
  updateSignInButton();
  

  $(".name").on("input", function () {
    var inputValue = $(this).val();
    if ($(this).hasClass("first-name")) {
      firstName = inputValue;
    } else if ($(this).hasClass("last-name")) {
      lastName = inputValue;
    } else if ($(this).hasClass("father-name")) {
      fatherName = inputValue;
    }
    updateSignInButton();
    validateName(inputValue, $(this), $(this).next());
  });

  $("#emailAddr").on("input", function(){
    mail = $(this).val();
    validateEmail(mail);
    updateSignInButton()
  })

  $("#password").on("input", function(){
    password = $(this).val();
    box  = $(this);
    alert = box.next();
    lengthPassword (password, box, alert);
    updateSignInButton()
  })

  $("#confirm-password").on("input", function(){
    confirmPassword = $(this).val();
    box  = $(this);
    alert = box.next();
    matchPassword (confirmPassword, box, alert);
    updateSignInButton()
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
  if (confirmPassword === "") {
    alert.text("* this field is mandatory.");
    box.css( "border", "4px double red" );
    return false;
  }
  else if (password !== confirmPassword) {
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

  /////////////checking sign in ///
  // disabling sign up button if 
  function updateSignInButton() {
    if (firstName === "" || lastName === "" || fatherName === "" || email === "" || password === "" || confirmPassword === "" || !matchPassword ()  || !lengthPassword () || !validateEmail ()) {
      $("#sign-up").prop('disabled', true);
      $("#sign-up").css("backgroundColor", "red");
      $("#sign-up").css("color", "white");
      $("#sign-up").css("opacity", "0.5")
      // console.log(firstName)
    }
    else {
    
      $("#sign-up").prop('disabled', false);
      $("#sign-up").css("backgroundColor", "green");
      $("#sign-up").css("color", "white");
      console.log("entered else")
      $("#sign-up").css("opacity", "1")
    }
  }
  
});