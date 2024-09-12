import firebase from "firebase";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDElx-NgGmYQEsuQNV6uYhoi421WT-ciXM",
        authDomain: "twitter-clone-a5f0f.firebaseapp.com",
        projectId: "twitter-clone-a5f0f",
        storageBucket: "twitter-clone-a5f0f.appspot.com",
        messagingSenderId: "923709000574",
        appId: "1:923709000574:web:6dc3894275152bd908012f",
        measurementId: "G-GP995GQCHX"
    });
}

export default firebase;