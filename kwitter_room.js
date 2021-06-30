var firebaseConfig = {
      apiKey: "AIzaSyCgfqatHOCz6eY97acdTCPZpQM6GEgAHWc",
      authDomain: "chatapp-57ce3.firebaseapp.com",
      databaseURL: "https://chatapp-57ce3-default-rtdb.firebaseio.com",
      projectId: "chatapp-57ce3",
      storageBucket: "chatapp-57ce3.appspot.com",
      messagingSenderId: "28972656490",
      appId: "1:28972656490:web:0e15fef413d9e8a8e02713",
      measurementId: "G-ZM706D3B3B"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();