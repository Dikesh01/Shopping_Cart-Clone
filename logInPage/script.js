//
document.getElementById("homeBtn").addEventListener('click',()=>window.location.href='../shop');
document.getElementById("loginBtn").addEventListener('click',()=>window.location.href='../logInPage');
document.getElementById("signupBtn").addEventListener('click',()=>window.location.href='../signUpPage');
document.getElementById("cartBtn").addEventListener('click',()=>window.location.href='../cart');


const email = document.getElementById('email');
const password = document.getElementById('password');
const loginButton = document.getElementById('logInBtn');

loginButton.addEventListener('click',(event)=>{
    event.preventDefault();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    // 
    if(emailValue==='' || passwordValue===''){
        alert("Please enter email & password!");
    }
    else{
        let users = JSON.parse(localStorage.getItem('users'));
        if(users){
            let currentUser = users.find((currUser) =>{
                return currUser.email===email.value.trim();
            });
            if(currentUser){
                if(currentUser.password === password.value.trim()){
                    sessionStorage.setItem('userLoggedIn',JSON.stringify(currentUser));
                    alert('Login successful!');
                    window.location.href='../shop';
                    // email.value='';
                    // password.value='';
                }
                else{
                    alert("Incorrect Password!");
                    password.value='';
                }
            }
            else{
                alert("You haven't signed up!")
            }
        }
        else{
            alert("Invalid Username & Password!")
        }
    }
})