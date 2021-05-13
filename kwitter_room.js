
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDxbseGsFHkDUIFdKuJQ4VO7PGkVCLE9DY",
      authDomain: "utkarsh-a289a.firebaseapp.com",
      databaseURL: "https://utkarsh-a289a-default-rtdb.firebaseio.com",
      projectId: "utkarsh-a289a",
      storageBucket: "utkarsh-a289a.appspot.com",
      messagingSenderId: "73600859388",
      appId: "1:73600859388:web:f0642f72f0d7b39e776b79",
      measurementId: "G-N0Y1HKXWWJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
    function addRoom() {
          room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding room name"
       });
       localStorage.setItem("room_name", room_name);
       window.location="kwitter_page.html";  
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+ Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
