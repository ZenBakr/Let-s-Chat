var firebaseConfig = {
      apiKey: "AIzaSyCBklzx5Dpm-cBt_ARWyLawQxT-UEy8HQ0",
      authDomain: "let-s-chat-4ac03.firebaseapp.com",
      databaseURL: "https://let-s-chat-4ac03-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-4ac03",
      storageBucket: "let-s-chat-4ac03.appspot.com",
      messagingSenderId: "637024215362",
      appId: "1:637024215362:web:8a016ee7b31d8d18cee8db"
    };
  

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    function addroom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }
  
 
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
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
  window.location.replace("index.html");
  }