import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBqVQpAvu6PxvIYWLPhzRgls8jEfbTLivY",
    authDomain: "goalcoach-fc1bf.firebaseapp.com",
    databaseURL: "https://goalcoach-fc1bf.firebaseio.com",
    projectId: "goalcoach-fc1bf",
    storageBucket: "goalcoach-fc1bf.appspot.com",
    messagingSenderId: "382661099721"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');