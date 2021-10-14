'use strict';
// Import the functions you need from the SDKs you need

// import { initializeApp } from '/firebase/app';
// import { getAnalytics } from '/firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCMwmyO7Fzfz11iv9RhYv6flRj1YtVznjs',
  authDomain: 'goorm-a0231.firebaseapp.com',
  projectId: 'goorm-a0231',
  storageBucket: 'goorm-a0231.appspot.com',
  messagingSenderId: '391758668103',
  appId: '1:391758668103:web:c039bbaa26875f1fca6c62',
  measurementId: 'G-F4S9YE1ZRV',
};

// Initialize Firebase
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebaseConfig, firestore };
