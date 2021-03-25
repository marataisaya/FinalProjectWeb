
  function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
  function validate() {
    let result = $("#result");
    let email = $("#email").val();
    result.text("");
    if(validateEmail(email)) {
      result.text(email + " is valid");
      result.css("color", "blue");
    } else {
      result.text(email + " is not valid");
      result.css("color", "red");
    }
    return false;
  }
  $("#check").on("click", validate);
  
  
  
  function Validate() {
    var password = document.getElementById("psw").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;
    if (password != confirmPassword) {
        alert("You first Passwords is not similar with 2nd password. Please enter same password in both");
        return false;
    }
    return true;
  }
  
  function ValidatePassword(){
    var decimal=  "/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/";
    if(inputtxt.value.match(decimal)) 
    { 
    alert('Correct, try another...')
    return true;
    }
    else
    { 
    alert('Wrong...!')
    return false;
    }
    } 
  