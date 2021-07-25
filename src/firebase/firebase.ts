import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FILEBASE_API,
    authDomain: process.env.REACT_APP_FILEBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FILEBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FILEBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FILEBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FILEBASE_APP_ID,
    measurementId: process.env.REACT_APP_FILEBASE_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
})

export const auth = app.auth();
export const storage = firebase.storage();
export default app;