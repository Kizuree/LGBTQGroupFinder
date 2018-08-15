const enterButton = document.getElementById("enterButton")

enterButton.addEventListener("click", signUp)

function signUp(event){
    event.preventDefault();
    const  emailElement= document.getElementById("email");
    const passwordElement = document.getElementById("myInput"); 
    const email = emailElement.value;
    const password = passwordElement.value;

    emailElement.value = "";
    passwordElement.value  = "";

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      // redirect to info.js
      window.location.href = "file:///C:/Users/ASC%20Student/Documents/LGBTQGroupFinder/info.html"
    }).catch(function(error) {

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
        
      } else {
        alert(errorMessage);
      //  document.getElementsByClassName("more").style.display = "unset";
      }

      console.log(error);
    });
}

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
}