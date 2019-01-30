firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("login_form").style.display="none";
      document.getElementById("logout_form").style.display="block";
      document.getElementById('login_tag').style.display = "none";
      document.getElementById('logout_tag').style.display = "block";
    } else {
      // No user is signed in.
      document.getElementById("login_form").style.display="block";
      document.getElementById("logout_form").style.display="none";
      document.getElementById('login_tag').style.display = "block";
      document.getElementById('logout_tag').style.display = "none";
    }
});

//login function
function login(){
    var emailView = document.getElementById("email");
    var passwordView = document.getElementById("password");
    var email = emailView.value;
    var password= passwordView.value;
   

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var errortext = document.getElementById("error_login");
        // ...
        if (errorCode === 'auth/wrong-password') {
            errortext.setAttribute("class","text-danger");
            errortext.innerHTML="wrong password";
            passwordView.setAttribute("class","form-control is-invalid");
          }else if(errorCode==='auth/user-not-found'){
            emailView.setAttribute("class","form-control is-invalid");
            errortext.setAttribute("class","text-danger");
            errortext.innerHTML="not found user";
        }else{
            alert(errorMessage);
          }
      });
}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });    
}

function signUp(){
  var emailView = document.getElementById("email1");
  var passwordView = document.getElementById("password1");
  var confirmView = document.getElementById("confirm");
  var email = emailView.value;
  var password= passwordView.value;
  var confirm = confirmView.value;
  var errortext = document.getElementById("error_signup");
  if(password===confirm){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      if(errorCode==="auth/invalid-email"){
        errortext.setAttribute("class","text-danger");
        errortext.innerHTML=errorMessage;
      }else if(errorCode==='auth/email-already-in-use'){
        errortext.setAttribute("class","text-danger");
        errortext.innerHTML=errorMessage;
      }else if(errorCode==="auth/weak-password"){
        errortext.setAttribute("class","text-danger");
        errortext.innerHTML=errorMessage
      }else{
        errortext.setAttribute("class","text-danger");
        errortext.innerHTML=errorMessage
      }
        errortext.innerHTML=errorMessage
    });
  }else{
    errortext.setAttribute("class","text-danger");
    
    errortext.innerHTML='pass not equal'+password+ ':='+confirm;
    
  }

}

