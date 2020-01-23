import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCVlLx33jp2K-d6tuYdwYF5B7C1z7fUftQ",
  authDomain: "photowall-c4191.firebaseapp.com",
  databaseURL: "https://photowall-c4191.firebaseio.com",
  projectId: "photowall-c4191",
  storageBucket: "photowall-c4191.appspot.com",
  messagingSenderId: "516188947455",
  appId: "1:516188947455:web:bfa7a06705267ef39fddca"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
