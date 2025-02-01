// open Basket
const basket = document.querySelector(".basket-box");
const basketIcon = document.querySelector("#basket-icon");
const cards = document.querySelectorAll(".card");


basketIcon.addEventListener("click", () => {
    basket.classList.toggle("active");
    searchBox.classList.remove("active");
    navbar.classList.remove("active");
});   
    
// adding content on page from DB
const getProducts = async () => {
    const response = await fetch("data/products.json");
    const products = await response.json();
    return products;
}

const renderProducts = async () => {
    const products = await getProducts();
    const productsContainer = document.querySelector(".products-container");
    // get item
    for (const item of products) {

        // creating element
        const card = document.createElement("div");
        const contentBox = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardTitle = document.createElement("h3");
        const cardPrice = document.createElement("span");
        const cardAddBtn = document.createElement("button");

        // adding values for elements
        card.classList.add("card");
        contentBox.classList.add("content-box");
        cardImg.src = item.image;
        cardTitle.innerText = item.title;
        cardPrice.innerText = `${item.price}`;
        cardAddBtn.innerText = "Add To Cart";
        cardAddBtn.addEventListener("click", () => addToCart(item));
        
        // appending element in wrapper        
        contentBox.append(cardPrice, cardAddBtn);
        card.append(
            cardImg, 
            cardTitle, 
            contentBox
        );
        productsContainer.append(card);
    }
};

// delete product from cart
const removeProductFromCart = (event) => {
    event.target.parentElement.parentElement.remove();
};
    // Додати умову при якій буде перевірятися довжина basket-listі і збільшуватися 
    // лічильник кількості товарів в корзині
// add product in cart
const addToCart = (product) => {
    const basketItem = document.getElementsByClassName("basket-list-item");
    for (const item of basketItem) {
        if(product.id === +item.getAttribute("id")) {
            const quattityInput = document.querySelector(
                ".basket-list-quattity-section > input"
            );
            quattityInput.value++;
            return;
        }
    }
    const basketBox = document.querySelector(".basket-box");
    // create elements
    const basketList = document.createElement("ul");    
    const basketListItem = document.createElement("li");
    const basketListImgSection = document.createElement("div");
    const basketListPriceSection = document.createElement("div");
    const basketListQuattitySection = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h4");
    const price = document.createElement("span");
    const quattity = document.createElement("input");
    const removeBtn = document.createElement("button");
    removeBtn.addEventListener("click", (event) => removeProductFromCart(event, product));
    // setting value
    basketList.classList.add("basket-list");
    basketListItem.classList.add("basket-list-item");
    basketListImgSection.classList.add(
        "basket-list-item-section",
        "basket-list-img-section"
    );
    basketListPriceSection.classList.add(
        "basket-list-item-section",
        "basket-list-price-section" 
    );
    basketListQuattitySection.classList.add(
        "basket-list-item-section",
        "basket-list-quattity-section"
    );

    image.src = product.image;
    title.innerText = product.title;
    price.innerText = `${product.price}`;
    quattity.type = "number";
    quattity.value = 1;
    quattity.min = 1;
    removeBtn.innerText = "REMOVE";

    // appending values
    basketListImgSection.append(image, title);
    basketListPriceSection.append(price);
    basketListQuattitySection.append(quattity, removeBtn);
    basketListItem.setAttribute("id", product.id);
    basketListItem.append(
        basketListImgSection,
        basketListPriceSection,
        basketListQuattitySection
    );
    basketList.append(basketListItem);
    basketBox.append(basketList);
}
renderProducts();