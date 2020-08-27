import './loginRegister.css';
import {Persons,registeredUsers,users,reg,log,lowerCaseLetters,upperCaseLetters,numbers} from './logreg';

let store = () => {
    let nameSurname = document.forms[0].name.value;
    let email = document.forms[0].email.value;
    let pw = document.forms[0].pw.value;
    let cpw = document.forms[0].cpw.value;
    let myUsers = new Persons(nameSurname,email,pw);

    if (!email || !pw || !pw.match(numbers) 
        || !pw.match(upperCaseLetters) ||  !pw.match(lowerCaseLetters)
        || pw !== cpw){
        alert('Please fill in all the fields')
        } else {
        users.push(myUsers);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Your account has been created');
        console.log(typeof(users));
    }
}

let check = () => {
    let email = document.forms[0].userName.value;
    let pass = document.forms[0].uservalue;

    const user = users.find(el => {
        return el.email === email && el.pass === pass;
    });
    if (user) {
        alert('You are logged in.');
    } else {
        alert('User not found');
    }
}
reg.addEventListener('click',store);
log.addEventListener('click', check);