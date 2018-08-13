const locatioN = document.getElementById("location");
const contact = document.getElementById("contact");
const smalldiscription = document.getElementById("smalldiscription");
const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const websiteSubmitButton = document.getElementById("submitButton");
websiteSubmitButton.addEventListener("click",updateDB);
const logOutButton = document.getElementById("logOutButton");
logOutButton.addEventListener("click", logOut)
//Set database object here
const database = firebase.database();

/**
* Updates the database with the username and message.
*/

function updateDB(event){
   event.preventDefault();
   const message = messageElement.value;
   const currentUser = firebase.auth().currentUser;

   // read user from db

   database.ref('users/' + currentUser.uid).once('value').then(function(userRef) {
    const user = userRef.val();
    const name = user.GROUPNAME;

    //Update database here
    const value = {
        NAME: name,
        MESSAGE: message
    }

    database.ref('messages').push(value);
   });
   
//    const username        = usernameElement.value;
    // const username = currentUser.displayName;
   

//    usernameElement.value = "";
   messageElement.value  = "";


   
}

function updateUI(data){
    const allMessagesDiv = document.getElementById('allMessages');
    const messageDiv = document.createElement('p');
    messageDiv.innerText = data.NAME + " : " + data.MESSAGE;
    allMessagesDiv.appendChild(messageDiv);
}
// Set database "child_added" event listener here
database.ref('messages').on("child_added", function(dataRef){
   const data = dataRef.val();
   updateUI(data);
});
// displayname.innerText = currentUser;
// locatioN.innerText = currentUser;
// contact.innerText = currentUser;
// smalldiscription.innerText = currentUser;


function logOut(){
    firebase.auth().signOut().then(function() {
      
        window.location.href = "file:///C:/Users/ASC%20Student/Documents/LGBTQGroupFinder/login.html"
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });


}