//
document.getElementById("homeBtn").addEventListener('click',()=>window.location.href='../shop');
document.getElementById("loginBtn").addEventListener('click',()=>window.location.href='../logInPage');
document.getElementById("signupBtn").addEventListener('click',()=>window.location.href='../signUpPage');
document.getElementById("cartBtn").addEventListener('click',()=>window.location.href='../cart');


const fName = document.getElementById('first_name');
const lName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('cPassword');
const submitBtn = document.getElementById('submitBtn');
const logInBtn = document.getElementById('loginRedirect');

submitBtn.addEventListener('click', (event) =>{
    event.preventDefault();
// Strategy to steps below -
let fnameValue=fName.value.trim(); 
let lnameValue=lName.value.trim();
let emailValue=email.value.trim();
let passwordValue = password.value.trim();
let cPasswordValue=cPassword.value.trim();

if(fnameValue ==='' ||
    lnameValue==='' ||
    emailValue==='' ||
    passwordValue==='' ||
    cPasswordValue===''){
        alert("All fields are required!");  
    }

else{
    // console.log(fnameValue,lnameValue,emailValue,passwordValue,cPasswordValue);
    if(passwordValue !== cPasswordValue){
        alert("Password not matching!");
        password.value='';
        cPassword.value='';
    }
    else{
        
        if(localStorage.getItem('users')){
            if(checkIfUserExist(emailValue)){
                alert("Email already exist!");
            }
            else{
                saveNewUser(fnameValue,lnameValue,emailValue,passwordValue);
            }
        }
        else{
            saveNewUser(fnameValue,lnameValue,emailValue,passwordValue);
        }

    }
}

})


function checkIfUserExist(email){
    let obj = JSON.parse(localStorage.getItem('users')).find((user) =>{
        return user.email === email;
    })
    if(obj) return true;
    else false;
}

function saveNewUser(fname,lname,emailValue,passwordValue){
    let userObj = {
        firstName:fname,
        lastName:lname,
        email:emailValue,
        password:passwordValue
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userObj);
    localStorage.setItem('users',JSON.stringify(users));

    // alert successfull
    alert("Signed Up successfully!");

    // we will remove all entered velues
    fName.value='';
    lName.value='';
    email.value='';
    password.value='';
    cPassword.value='';

    // Jumping to profile page
    sessionStorage.setItem('userLoggedIn',JSON.stringify(userObj));
    window.location.href='../profilePage';
}

// Redirect User login page
logInBtn.addEventListener('click',()=>{
    location.href = '../logInPage';
})

    // strategy to steps
    // 1. trim() all the values to avoid space
    // 2. if all values are fullfilled then preceed further
        // else  alert("All fields are required!")
    // 3. password===confirm password
        // else alert("Password mismatch!")

    // 4.   if email exist in the given user array
            // alert(User already exist!);
         //  else -> Create object from the input and push into an array