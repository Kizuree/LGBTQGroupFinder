
const pushedButton = document.getElementById("pushedButton")
pushedButton.addEventListener("click", login);

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
        window.location.href = "file:///C:/Users/ASC%20Student/Documents/LGBTQGroupFinder/website.html"
    }).catch(function(error) {
        // Handle Errors here.
        alert("Incorrect Email or Password. Please try again.")
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
  });
}