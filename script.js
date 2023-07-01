
function getItemsAPI(){
    return fetch(`https://fakestoreapi.com/products`)
    .then(res =>res.json())
    .then(data => {
        
        let id = data[7].id;
        let price = data[7].price;
        console.log(id +" and " + price);
    })
}
getItemsAPI();


const loginButton = document.getElementById('login');
const signupButton = document.getElementById('signup');

signupButton.addEventListener('click',()=>{
    window.location.href='./signUpPage'
});


loginButton.addEventListener('click',()=>{
    
    if(localStorage.getItem('users')){
        window.location.href='./logInPage';
    }
    else{
        window.location.href='./signUpPage';
    }
})


