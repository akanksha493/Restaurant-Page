import menuList from "./menu.json"

const renderMenu = () =>{
    //reset content to empty
    const content = document.querySelector("#content");
    content.innerHTML = "";

    //menu page content
    const innerContainer = document.createElement("div");
    innerContainer.classList.add("menupage");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("inner-menu-container");
    const h1menu = document.createElement("h1");
    h1menu.textContent = "Menu";
    h1menu.classList.add("heading-menu");
    const listOfMenu = document.createElement("div");
    for(const section in menuList){
        const sectionCard = document.createElement("div");
        sectionCard.classList.add("section-card");

        const h2 = document.createElement("h2");
        h2.textContent = section;
        sectionCard.appendChild(h2);
        const dishContainer = document.createElement("div");
        dishContainer.classList.add("dish-container");
        for(const item of menuList[section]){
            const dishCard = document.createElement("div");
            dishCard.classList.add("dish-card");
            const image = document.createElement("img");
            image.src = item["url"];
            image.alt = item["alt"];
            
            const dishContent = document.createElement("div");
            dishContent.classList.add("dish-content");

            const dishName = document.createElement("h3");
            dishName.textContent = item["name"];
            const description = document.createElement("p");
            description.textContent = item["description"];
            const ingredientList = document.createElement("p");
            ingredientList.textContent = "Main Ingredients : "+ item["main ingredient"].join(", ");

            const priceAndVeg = document.createElement("div");
            priceAndVeg.classList.add("price-veg-container");
            const vegStatus = document.createElement("p");
            vegStatus.textContent = item["isVeg"]? "Veg": "Non-veg";
            vegStatus.classList.add('dish-veg-status');
            item["isVeg"]? vegStatus.classList.add("veg"):vegStatus.classList.add("nonveg");
            const price = document.createElement("p");
            price.classList.add("dish-price");
            price.innerHTML =  "&#8377; "+parseFloat(item["price"]) ;

            priceAndVeg.appendChild(vegStatus);
            priceAndVeg.appendChild(price);

            dishContent.appendChild(dishName);
            dishContent.appendChild(description);
            dishContent.appendChild(ingredientList);
            dishContent.appendChild(priceAndVeg);

            dishCard.appendChild(image);
            dishCard.appendChild(dishContent);


            dishContainer.appendChild(dishCard);
        }
        sectionCard.appendChild(dishContainer);
        
        listOfMenu.appendChild(sectionCard);
    }




    menuContainer.appendChild(h1menu);
    menuContainer.appendChild(listOfMenu);
    innerContainer.appendChild(menuContainer);
    content.appendChild(innerContainer);
}

export {renderMenu};