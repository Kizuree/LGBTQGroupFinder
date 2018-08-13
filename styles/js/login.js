

const pushedButton = document.getElementById("pushedButton")
pushedButton.addEventListener("click", login);

const database = firebase.database();
function login(event){
    event.preventDefault();
    const emailElement= document.getElementById("emailLogin");
    const passwordElement = document.getElementById("passwordLogin"); 
    const email = emailElement.value;
    const password = passwordElement.value;

    emailElement.value = "";
    passwordElement.value  = "";
    // Sign in user with another account
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        //success, reidrect to main site
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
  });
}