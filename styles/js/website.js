const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database();

const currentUser = firebase.auth().currentUser;


/**
* Updates the database with the username and message.
*/
function updateDB(event){
   event.preventDefault();
//    const username        = usernameElement.value;
    const username = currentUser.displayName;
   const message = messageElement.value;

//    usernameElement.value = "";
   messageElement.value  = "";

   console.log(username + " : " + message);

   //Update database here
    const value = {
        NAME: username,
        MESSAGE: message
    }

    database.ref('messages').push(value);
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


