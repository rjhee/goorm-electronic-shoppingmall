'use strict';
import { firebaseConfig } from './firebaseData.js';

const joinName = document.querySelector('.join_name');
const joinBirth = document.querySelector('.join_birth');
const joinId = document.querySelector('.join_id');
const joinPassword = document.querySelector('.join_password');
const joinPasswordCheck = document.querySelector('.join_password_check');
const joinPhone = document.querySelector('.join_phone_num');

const checkbox = document.querySelector('.checkbox_cover');
const checkInput = document.querySelectorAll('.checkbox_cover p input');

function passwordNumCheck() {
  return joinPasswordCheck.value.length >= 6 && joinPassword.value.length >= 6
    ? true
    : false;
}

function passwordCheck() {
  return joinPassword.value != joinPasswordCheck.value ? false : true;
}

function checkboxCheck() {
  return checkInput[0].checked === true ? true : false;
}

const FLEX = 'flex';
const NONE = 'none';
const SUCCESS_TEXT = '님 환영합니다 가입이 완료되었습니다!';

function onModal(display, text) {
  return (
    document.documentElement.style.setProperty('--modal-display', display),
    document.documentElement.style.setProperty('--modal-content', `"${text}"`)
  );
}

function getUserInfo() {
  const userName = joinName.value;
  const userID = joinId.value;
  const userPhoneNum = joinPhone.value;
  const userPassword = joinPassword.value;
  passwordCheck() === true && checkboxCheck() === true
    ? firebase
        .auth()
        .createUserWithEmailAndPassword(userID, userPassword)
        .then((userCredential) =>
          userCredential.user
            .updateProfile({
              displayName: userName,
              phoneNumber: userPhoneNum,
            })
            .then(
              () => onModal(FLEX, userName + SUCCESS_TEXT),
              setTimeout(() => {
                onModal(NONE, SUCCESS_TEXT);
              }, 2000)
            )
            .then(() => {
              setTimeout(() => {
                history.back();
              }, 1000);
            })
        )
        .catch((error) => alert(error))
    : null;
}

checkbox.addEventListener('click', (event) => {
  const input = event.target;
  if (input.tagName === 'INPUT' || input.tagName === 'LABEL') {
    if (input.id === 'all_agree' && input.checked === true) {
      for (let i = 1; i < 5; i++) {
        checkInput[i].setAttribute('checked', true);
      }
      return (checkInput[0].checked = true);
    } else if (input.id === 'all_agree' && input.checked === false) {
      for (let i = 1; i < 5; i++) {
        checkInput[i].removeAttribute('checked');
      }
    }
  }
});

const join = document.querySelector('.join form button');
join.addEventListener('click', (event) => {
  event.preventDefault();
  passwordCheck() === false
    ? alert('비밀번호가 비밀번호 확인과 맞지 않습니다!')
    : null;
  passwordNumCheck() === false
    ? alert('비밀번호는 6자리 이상 입력해주세요')
    : null;
  checkboxCheck() === false ? alert('약관에 동의 체크해주세요!') : null;
  getUserInfo();
});
