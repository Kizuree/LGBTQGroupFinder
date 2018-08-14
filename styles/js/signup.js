const enterButton = document.getElementById("enterButton")

enterButton.addEventListener("click", signUp)

const database = firebase.database();

function signUp(event){
    event.preventDefault();
    const  emailElement= document.getElementById("email");
    const passwordElement = document.getElementById("password"); 
    const email = emailElement.value;
    const password = passwordElement.value;

    emailElement.value = "";
    passwordElement.value  = "";

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      // redirect to info.js
      currentUser = DisplayName
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