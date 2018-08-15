


const messageElement = document.getElementById("message");

const searchButton = document.getElementById("searchSubmit");
searchButton.addEventListener('click', searchUser);

const websiteSubmitButton = document.getElementById("submitButton");
websiteSubmitButton.addEventListener("click",updateDB);

const logOutButton = document.getElementById("logOutButton");
logOutButton.addEventListener("click", logOut);

const editProfileButton = document.getElementById("editProfileButton")
editProfileButton.addEventListener("click", editProf );

const elem = document.getElementById('allMessages');

function searchUser(evt) {
    evt.preventDefault();

    const searchInput = document.getElementById("search");
    const username = searchInput.value.trim();

    firebase.database().ref('users').once('value').then(function(userSnapshot) {
        const users = userSnapshot.val();
        const userIDs = Object.keys(users);

        for (let i = 0; i < userIDs.length; i++) {
            if (users[userIDs[i]]['GROUPNAME'].toLowerCase() === username.toLowerCase()) {
                displayUser(userIDs[i]);
                return;
            }else{
               
            }
        }
        
    });
}

firebase.auth().onAuthStateChanged(function(currentUser) {
    if (currentUser) {
        displayUser(currentUser.uid);
    } else {
      // No user is signed in.
      console.log('user not signed in')
    }
});
  




function editProf(){
    window.location.href ="file:///C:/Users/ASC%20Student/Documents/LGBTQGroupFinder/info.html"
}
/**
* Updates the database with the username and message.
*/

function updateDB(event){
   event.preventDefault();
   const message = messageElement.value;
   const currentUser = firebase.auth().currentUser;

   // read user from db

   firebase.database().ref('users/' + currentUser.uid).once('value').then(function(userRef) {
    const user = userRef.val();
    const name = user.GROUPNAME;
    

    //Update database here
    const value = {
        NAME: name,
        MESSAGE: message
    }

    firebase.database().ref('messages').push(value);
   });
   
    //const username        = usernameElement.value;
     //const username = currentUser.displayName;
   

//    usernameElement.value = "";
   messageElement.value  = "";


   
}

function updateUI(data){
    const allMessagesDiv = document.getElementById('allMessages');
    const messageDiv = document.createElement('p');
    messageDiv.innerText = data.NAME + " : " + data.MESSAGE;
    allMessagesDiv.appendChild(messageDiv);
    elem.scrollTop = elem.scrollHeight;
}
// Set database "child_added" event listener here
firebase.database().ref('messages').on("child_added", function(dataRef){
   const data = dataRef.val();
   updateUI(data);
});


function displayUser(uid) {
    const nameDisplay = document.getElementById("displayname");

    firebase.database().ref('users/' + uid).once("value").then(function(userSnapshot){
        const user = userSnapshot.val();

        const locatioN = document.getElementById("location");
        const contact = document.getElementById("contact");
        const smalldiscription = document.getElementById("smalldiscription");
        const usernameElement = document.getElementById("username");

        nameDisplay.innerText ="Hi, "+ user['GROUPNAME'] + "!";
        locatioN.innerText ="Location:" + user['LOCATION'];
        contact.innerText ="Contact:" + user['CONTACT'];
        smalldiscription.innerText ="Description:" + user['DeSCRIPTION'];
    });
}
   
 //locatioN.innerText =currentUser;
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


