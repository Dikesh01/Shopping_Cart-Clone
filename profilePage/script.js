
const fname = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const logOut = document.getElementById('logoutBtn');

let obj = JSON.parse(sessionStorage.getItem('userLoggedIn'));

fname.value = obj.firstName;
lName.value = obj.lastName;

