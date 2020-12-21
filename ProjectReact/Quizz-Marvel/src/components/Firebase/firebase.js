import app from 'firebase/app';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyBo5EAbeSSpJCNIuOz4SVdRVE7J6jk0Gow",
    authDomain: "quizzreact.firebaseapp.com",
    projectId: "quizzreact",
    storageBucket: "quizzreact.appspot.com",
    messagingSenderId: "423612816679",
    appId: "1:423612816679:web:3bda65d8ad7c3bee0a5d02"
  };


class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    //Inscription
    signupUser = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);
    
    //Connexion 
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    //Déconnexion
    signoutUser = () => 
    this.auth.signOut();
}

export default Firebase; 