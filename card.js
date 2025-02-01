const basketBox = document.querySelector(".basket-box");

const arrFromLocalstorage = JSON.parse(localStorage.getItem("card") || "[]");

const renderCard = () => {
    if(arrFromLocalstorage.length) {
        cardStorage.forEach(el => {
            // const { img, title, price } = el;
    
            const listItem = document.createElement("li");
            const titleProduct = document.createElement("h4");
            const imgProduct = document.createElement("img");
            const priceProduct = document.createElement("span");
            const removeBtn = document.createElement("button");
            const sectionPriceProduct = document.createElement("section")
    
            listItem.classList.add("basket-list-item");
            titleProduct.classList.add("basket-list-img-section > h4");
            imgProduct.classList.add("basket-list-img-section > img");
            priceProduct.classList.add("basket-list-item > span");
            removeBtn.classList.add("basket-list-quattity-section > button");
    
            sectionPriceProduct.append(priceProduct, removeBtn);
            
    
            titleProduct.innerHTML = el.title;
            imgProduct.innerHTML = el.img;
            priceProduct.innerHTML = el.price; 
            removeBtn.innerText = "Delete";
    
            listItem.append(
                titleProduct,
                imgProduct,
                sectionPriceProduct
            )
            
        })
    }
}

