const firebaseConfig = {
    apiKey: "AIzaSyAYZ9HJYrtdVxJfDPtOBUhUoeeS0LytRXA",
    authDomain: "parte-11191.firebaseapp.com",
    databaseURL: "https://parte-11191-default-rtdb.firebaseio.com",
    projectId: "parte-11191",
    storageBucket: "parte-11191.appspot.com",
    messagingSenderId: "117686824843",
    appId: "1:117686824843:web:f0d741f71d8c106140c98e",
    measurementId: "G-JLSRFDZ8NH"
  };

   //intialize firebase
   firebase.initializeApp(firebaseConfig);

   //refrence
  var checkoutFormDB = firebase.database().ref('checkoutForm');

  document.getElementById('checkoutForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault()

    var email = getElementVal('email');
    var ccNumber = getElementVal('ccNumber');
    var exMonth = getElementVal('exMonth') ;
    var exYear = getElementVal('exYear') ;
    var bbb = getElementVal('bbb') ;

    console.log(email, ccNumber, exMonth)
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  } 