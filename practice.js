
//ADD YOUR FIREBASE LINKS
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

  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }