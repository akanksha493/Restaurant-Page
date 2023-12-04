const renderNav = () =>{
    const content = document.querySelector("#content");

    //nav creation
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Logo";
    const label = document.createElement("label");
    label.htmlFor = "mobile-nav";
    label.id = "mobile-nav-label";
    const hamburgericon = document.createElement("span");
    label.appendChild(hamburgericon);
    const input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("id", "mobile-nav")
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const arrayLinks = ["Home", "Menu", "About Us"];

    for(const link of arrayLinks){
        const li = document.createElement("li");
        const a = document.createElement("a");
        //set href
        a.href = "#";
        a.textContent = link;
        li.appendChild(a);
        ul.appendChild(li);
    }
    header.appendChild(h1);
    header.appendChild(label);
    header.appendChild(input);
    header.appendChild(nav);
    nav.appendChild(ul);

    content.parentNode.insertBefore(header,content);
}

export {renderNav};