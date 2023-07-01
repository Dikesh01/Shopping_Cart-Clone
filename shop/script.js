// https://codepen.io/Mudriy_K/pen/JRwyyY?editors=1010
// https://nikitahl.com/style-range-input-css#:~:text=To%20style%20the%20range%20input,selectors%20for%20the%20range%20input

document.getElementById("homeBtn").addEventListener('click',()=>window.location.href='../shop');
document.getElementById("loginBtn").addEventListener('click',()=>window.location.href='../logInPage');
document.getElementById("signupBtn").addEventListener('click',()=>window.location.href='../signUpPage');
document.getElementById("cartBtn").addEventListener('click',()=>window.location.href='../cart');
document.getElementById("profileBtn").addEventListener('click',()=>window.location.href='../profilePage');


const inputRange = document.getElementById('inputRange');
const rightValue = document.getElementById('right');

inputRange.addEventListener("input",()=>{
    rightValue.textContent = inputRange.value; 
});

// fetching Api
function fetchAPI(){
    return fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
        data.forEach((item) =>{
            item.color = 'green';
            item.size = '';
            localStorage.setItem('apiData',JSON.stringify(data));          
        })        
    })
    .catch((err) =>{
        console.log('Something wrong! ',err);
    })
}
fetchAPI();

// Initialize buttons from html
const allBtn = document.getElementById('all');
const mesnBtn = document.getElementById('mens');
const womensBtn = document.getElementById('womens');
const jewelleyBtn = document.getElementById('jewellery');
const electronicBtn = document.getElementById('electronics');

// Click event in all buttons
allBtn.addEventListener('click',getAllItem);
mesnBtn.addEventListener('click',getMensItem);
womensBtn.addEventListener('click',getWomensItem);
jewelleyBtn.addEventListener('click',getJewelleryItem);
electronicBtn.addEventListener('click',getElectronicsItem);

// All Products---->
function getAllItem(){
    let itemList = JSON.parse(localStorage.getItem('apiData'));
    displayItems(itemList);
}

// Mens Products----->
function getMensItem(){
    let itemList = JSON.parse(localStorage.getItem('apiData'));
    let mensfilter = itemList.filter((items)=>{
        return items.category === "men's clothing";
    })
        displayItems(mensfilter);
}

// womens Products----->
function getWomensItem(){
    let itemList = JSON.parse(localStorage.getItem('apiData'));
    let womensfilter = itemList.filter((items)=>{
        return items.category === "women's clothing";
    })
        displayItems(womensfilter);  
}

// Jewellery Products----->
function getJewelleryItem(){
    let itemList = JSON.parse(localStorage.getItem('apiData'));
    let jewelleryFilter = itemList.filter((items)=>{
        return items.category === "jewelery";
    })
        displayItems(jewelleryFilter);
}

// Electronics Products----->
function getElectronicsItem(){
    let itemList = JSON.parse(localStorage.getItem('apiData'));
    let electronicFilter = itemList.filter((items)=>{
        return items.category === "electronics";
    })
        displayItems(electronicFilter);
}

// Display Container ---->
const gridContainer = document.getElementsByClassName('grid_container')[0];

function displayItems(filters){
    gridContainer.innerHTML = '';

    filters.forEach((data) =>{
        const itemDetails = document.createElement('div');
        itemDetails.className = 'show_item';
        itemDetails.innerHTML = `
        <div id="showImg"><img src="${data.image}" alt="###"></div>
        <div class="otheDetails">
            <div class="price_Size">
                <div id="price">$${data.price}</div>
                <div id="sizes">S,M,L</div>
            </div>
            <div id="color">Colors : ***</div>
            <div id="rating">Rating :${data.rating.rate}/5</div>
        </div>
        <button id="addToCart">Add To Cart</button>
        `
        gridContainer.append(itemDetails);
    })
}