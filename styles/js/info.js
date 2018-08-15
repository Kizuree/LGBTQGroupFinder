

const submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click",updateDB);
const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", cancelIt)
// const database = firebase.database();
//console.log("current user: " + DisplayName)
//document.getElementById("displayname").innerText = currentUser
function cancelIt(){
    window.location.href = "file:///C:/Users/ASC%20Student/Documents/LGBTQGroupFinder/website.html"
}

function updateDB(event){
    event.preventDefault();

   
    const groupname = document.getElementById("groupname");
    const lOcation = document.getElementById("location");
    const contact = document.getElementById("contact");
    const description = document.getElementById("descritption");
    const name = groupname.value;
    const L = lOcation.value;
    const Contact = contact.value;
    const Description = description.value;
 
    groupname.value = "";
    lOcation.value = "";
    contact.value = "";
    description.value = "";

    //Update database here
    const value = {
        GROUPNAME: name,
        LOCATION: L,
        CONTACT: Contact,
        DeSCRIPTION: Description,
    }

    firebase.database().ref('users/' + firebase.auth().currentUser.uid).set(value).then(function() {
        window.location.href = "file:///C:/Users/ASC%20Student/Documents/LGBTQGroupFinder/website.html"
    }).catch(function(error) {
        console.log(error);
    });
    // then redirect to website.html
    


}