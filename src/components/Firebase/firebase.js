import * as firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDAaqHhAFQWhgd0IT44aaDFbg4rBhO5Jks",
    authDomain: "mission-react.firebaseapp.com",
    databaseURL: "https://mission-react.firebaseio.com",
    projectId: "mission-react",
    storageBucket: "mission-react.appspot.com",
    messagingSenderId: "409403455779",
    appId: "1:409403455779:web:e6b3f9f88d8c83531f7496",
    measurementId: "G-FY6KXFN3TM"
  });

  export default firebaseConfig;