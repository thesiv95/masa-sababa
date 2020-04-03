import firebase from "firebase";
import DB from "./config";

const config = {
    apiKey: DB.apiKey,
    authDomain: DB.authDomain,
    databaseURL: DB.databaseURL,
    projectId: DB.projectId,
    storageBucket: DB.storageBucket,
    messagingSenderId: DB.messagingSenderId,
    appId: DB.appId,
    measurementId: DB.measurementId
};

const fire = firebase.initializeApp(config);

export default fire;