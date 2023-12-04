import { renderMenu } from "./menu";
import { renderAboutus } from "./aboutus";

const renderHomepage = () =>{
    // console.log("this is renderHomepage");
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
    //content creation
    const blankDiv = document.createElement("div");
    blankDiv.className = "blank";
    const textDiv = document.createElement("div");
    textDiv.className = "text";

    const heading = document.createElement("h1");
    heading.textContent = "Spice Shuttle";
    const subheading = document.createElement("h2");
    const commaSpan = document.createElement("span");
    commaSpan.textContent = "❝ ";
    commaSpan.id = "comma";
    subheading.appendChild(commaSpan);
    const subheadingSpan = document.createElement("span");
    // subheading.textContent = "Where Indian flavours come to life";
    subheadingSpan.textContent = "Where Indian flavours come to life";
    subheading.appendChild(commaSpan);
    subheading.appendChild(subheadingSpan);
    const para1 = document.createElement("p");
    para1.textContent = "Experience the most excuisite blends of flavour. Craving for some indian cuisine? We got you. Wanna try something new ? We got you!";
    const para2 = document.createElement("p");
    para2.textContent = "Visite us or, order online, we do both ;)";

    const bttnsDiv = document.createElement("div");
    bttnsDiv.className = "bttns";
    const exploreBttn = document.createElement("button");
    exploreBttn.className = "bttn";
    exploreBttn.id = "menu";
    exploreBttn.textContent = "Explore Menu";
    const visitusBttn = document.createElement("button");
    visitusBttn.className = "bttn";
    visitusBttn.id = "visit";
    visitusBttn.textContent = "Visit Us";

    exploreBttn.addEventListener("click", renderMenu);
    visitusBttn.addEventListener("click", renderAboutus);
    
    bttnsDiv.appendChild(exploreBttn);
    bttnsDiv.appendChild(visitusBttn);

    const socialDiv = document.createElement("div");
    socialDiv.className = "social-links";
    const socialIconClasses = ["fa-facebook-f", "fa-instagram", "fa-x-twitter"];
    for(const iconClass of socialIconClasses){
        const socialLink = document.createElement("a");
        const icon = document.createElement("i");
        icon.classList.add("fa-brands");
        icon.classList.add(iconClass);

        socialLink.appendChild(icon);
        socialDiv.appendChild(socialLink);
    }

    textDiv.appendChild(heading);
    textDiv.appendChild(subheading);
    textDiv.appendChild(para1);
    textDiv.appendChild(para2);
    textDiv.appendChild(bttnsDiv);
    textDiv.appendChild(socialDiv);


    content.appendChild(blankDiv);
    content.appendChild(textDiv);
}

export {renderHomepage};