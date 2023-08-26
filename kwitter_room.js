var firebaseConfig = {
    apiKey: "AIzaSyBr22DAAWjsUWK84lmdqRh-ljdeHXeVzac",
    authDomain: "kwifreakinpro-lol12345.firebaseapp.com",
    databaseURL: "https://kwifreakinpro-lol12345-default-rtdb.firebaseio.com",
    projectId: "kwifreakinpro-lol12345",
    storageBucket: "kwifreakinpro-lol12345.appspot.com",
    messagingSenderId: "233983416515",
    appId: "1:233983416515:web:762743d9948a5b76d3aa76"
  };

  firebase.initializeApp(firebaseConfig);
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });
}