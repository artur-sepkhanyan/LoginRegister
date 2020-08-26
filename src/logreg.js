export const registeredUsers = localStorage.getItem('users')
export const users =  registeredUsers ? JSON.parse(registeredUsers) : [];
export let reg = document.getElementById('rgstr_btn');
export let log = document.getElementById('log_btn');