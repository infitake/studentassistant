import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBgZpiWTjLKOaT8jDtswvBFS9GnlQFL120",
    authDomain: "student-information-364e1.firebaseapp.com",
    databaseURL: "https://student-information-364e1.firebaseio.com",
    projectId: "student-information-364e1",
    storageBucket: "student-information-364e1.appspot.com",
    messagingSenderId: "417271320109"
  };
  firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 