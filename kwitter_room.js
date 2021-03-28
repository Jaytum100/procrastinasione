// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAv0whfCt4EMOGmb5s0HVYdcrIF6vVRins",
    authDomain: "kwitter-686b8.firebaseapp.com",
    databaseURL: "https://kwitter-686b8-default-rtdb.firebaseio.com",
    projectId: "kwitter-686b8",
    storageBucket: "kwitter-686b8.appspot.com",
    messagingSenderId: "665665032679",
    appId: "1:665665032679:web:df2bb2c5e119a6303bad42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  