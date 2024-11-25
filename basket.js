// open Basket
const basket = document.querySelector(".basket-box");
const basketIcon = document.querySelector("#basket-icon");
const cards = document.querySelectorAll(".card");

basketIcon.addEventListener("click", () => {
    basket.classList.toggle("active");
    searchBox.classList.remove("active");
    navbar.classList.remove("active");
});


cards.forEach((el, idx) => {
    // console.log(el);
    const img = el.childNodes[1];
    const title = el.childNodes[3].innerText;
    const price = el.childNodes[5].childNodes[1].innerText;
    const addBtn = el.childNodes[5].childNodes[3];
    
    addBtn.addEventListener("click", () => {
        const cardStorage = localStorage.getItem("card") || "[]";        
        const cart = JSON.parse(cardStorage);
        const card = { img, title, price };
        localStorage.setItem("cart", JSON.stringify([...cart, card]));
    })
})

// const removeProductFromBasket = (event) => {
//     // event.target.parentElemetn.parentElemetn.remove();
//     const basketListItem = document.getElementsByClassName("basket-list-item");
//     // if(!basketListItem.length) {
//     //     const basketList = document.querySelector(".basket-list");
//     //     basketList.style.display = "none";
//     // }
    
//     removeBtn.addEventListener("click", () => {
//         basketList.remove(basketListItem);
//     })
// }

// const addProductsToBasket = () => {
//     const addBtn = document.querySelector(".content-box > a");
//     // create elements
//     const listProduct = document.createElement("li");
//     const imageProduct = document.createElement("img");
//     const titleProduct = document.createElement("h4");
//     const sectionPriceProduct = document.createElement("section");
//     const priceProduct = document.createElement("span");
//     const removeBtn = document.createElement("button");

//     // adding css value
//     listProduct.classList.add("basket-list-item");
//     imageProduct.classList.add("basket-list-img-section > img");
//     titleProduct.classList.add("basket-list-img-section > h4");
//     priceProduct.classList.add("basket-list-price-section > span")
//     removeBtn.classList.add("basket-list-quattity-section > button");

//     sectionPriceProduct.append(priceProduct, removeBtn);


//     // adding value elements
//     imageProduct.parentElement(".box > img");
// }