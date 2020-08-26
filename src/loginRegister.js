import './loginRegister.css';
import {registeredUsers,users,reg,log} from './logreg';

let store = () => {
    let nameSurname = document.getElementById('nameSurname');
    let email = document.forms[0].email.value;
    let pw = document.getElementById('pw');
    let cpw = document.getElementById('cpw')
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (!email || !pw.value.length || !pw.value.match(numbers) 
        || !pw.value.match(upperCaseLetters) ||  !pw.value.match(lowerCaseLetters)
        || pw.value !== cpw.value){
        alert('Please fill in all the fields')
        } else {
        users.push({
            name: nameSurname.value,
            email: email,
            password: pw.value
        });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Your account has been created');
    }
}

let check = () => {
    let email = document.getElementById('userName').value;
    let password = document.getElementById('userPw').value;

    const user = users.find(el => {
        return el.email === email && el.password === password;
    });
    if (user) {
        alert('You are logged in.');
    } else {
        alert('User not found');
    }
}
reg.addEventListener('click',store);
log.addEventListener('click', check);