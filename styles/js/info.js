const groupname = document.getElementById("groupname");
const location = document.getElementById("location");
const contact = document.getElementById("contact");
const discription = document.getElementById("discritption");

const submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click",updateDB);

const database = firebase.database();

function updateDB(event){
    event.preventDefault();

    const currentUser = firebase.auth().currentUser;
    const GroupName = groupname.value;
    const L = location.value;
    const Contact = contact.value;
    const Description = description.value;

    groupname.value = "";
    location.value = "";
    contact.value = "";
    description.value = "";

    //Update database here
    const value = {
        GROUPNAME: GroupName,
        LOCATION: L,
        CONTACT: Contact,
        DeSCRIPTION: Description,
    }

    firebase.auth().currentUser.displayName = GroupName;
    database.ref('users/' + currentUser.uid).set(value);

    // then redirect to website.html


}