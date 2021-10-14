'use strict';
import { firebaseConfig } from './firebaseData.js';

const loginBtn = document.querySelector('.login form button');

const loginId = document.querySelector('.login_id');
const loginPassword = document.querySelector('.login_password');

const FLEX = 'flex';
const NONE = 'none';
const SUCCESS_TEXT = '님 환영합니다 로그인성공!';

function onModal(display, text) {
  return (
    document.documentElement.style.setProperty('--modal-display', display),
    document.documentElement.style.setProperty('--modal-content', `"${text}"`)
  );
}

function getUserInfoLogin() {
  const userID = loginId.value;
  const userPassword = loginPassword.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userID, userPassword)
    .then(
      (result) => onModal(FLEX, result.user.displayName + SUCCESS_TEXT),
      setTimeout(() => {
        onModal(NONE, SUCCESS_TEXT);
      }, 2000)
    )
    .catch((error) => alert(error));
}

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log(user);
//   }
// });

loginBtn.addEventListener('click', function (e) {
  event.preventDefault();
  getUserInfoLogin();
});
