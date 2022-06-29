var firebaseConfig = {
      apiKey: "AIzaSyCBklzx5Dpm-cBt_ARWyLawQxT-UEy8HQ0",
      authDomain: "let-s-chat-4ac03.firebaseapp.com",
      projectId: "let-s-chat-4ac03",
      storageBucket: "let-s-chat-4ac03.appspot.com",
      messagingSenderId: "637024215362",
      appId: "1:637024215362:web:8a016ee7b31d8d18cee8db"
    };
    firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
