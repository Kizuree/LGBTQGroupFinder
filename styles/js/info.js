

const submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click",updateDB);

const database = firebase.database();

function updateDB(event){
    event.preventDefault();

    const currentUser = firebase.auth().currentUser;
    const groupname = document.getElementById("groupname");
    const lOcation = document.getElementById("location");
    const contact = document.getElementById("contact");
    const description = document.getElementById("descritption");
    const GroupName = groupname.value;
    const L = lOcation.value;
    const Contact = contact.value;
    const Description = description.value;

    groupname.value = "";
    lOcation.value = "";
    contact.value = "";
    description.value = "";

    //Update database here
    const value = {
        GROUPNAME: GroupName,
        LOCATION: L,
        CONTACT: Contact,
        DeSCRIPTION: Description,
    }

    database.ref('users/' + currentUser.uid).set(value);
    // then redirect to website.html
    window.location.href = "file:///C:/Users/ASC%20Student/Documents/LGBTQGroupFinder/login.html"
    


}