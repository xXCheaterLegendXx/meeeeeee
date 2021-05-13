//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
    }
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
