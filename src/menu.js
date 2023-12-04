const renderMenu = () =>{
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const p = document.createElement("p");
    p.textContent = "This is menu";

    content.appendChild(p);
}

export {renderMenu};