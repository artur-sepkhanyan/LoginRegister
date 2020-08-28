export const registeredUsers = localStorage.getItem('users');
export const users =  registeredUsers ? JSON.parse(registeredUsers) : [];
export const reg = document.getElementById('rgstr_btn');
export const log = document.getElementById('log_btn');
export const lowerCaseLetters = /[a-z]/g;
export const upperCaseLetters = /[A-Z]/g;
export const numbers = /[0-9]/g;


