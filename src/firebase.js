import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuIEHmKk2jBxX35c1dxZp3f1dnRlMxD1Y",
  authDomain: "bt3103-week-6-20a5a.firebaseapp.com",
  projectId: "bt3103-week-6-20a5a",
  storageBucket: "bt3103-week-6-20a5a.appspot.com",
  messagingSenderId: "219333273160",
  appId: "1:219333273160:web:7efbf578f8461a01185a7d",
  measurementId: "G-1CC90MWLRK"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;