const renderAboutus = () =>{
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const p = document.createElement("p");
    p.textContent = "This is About Us";

    content.appendChild(p);
}

export {renderAboutus};