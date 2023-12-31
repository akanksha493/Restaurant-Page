const renderAboutus = () =>{
    //reset content to empty
    const content = document.querySelector("#content");
    content.innerHTML = "";

    //menu page content
    const innerContainer = document.createElement("div");
    innerContainer.classList.add("aboutuspage");
    const aboutusContainer = document.createElement("div");
    aboutusContainer.classList.add("inner-aboutus-container");


    const ourStory = document.createElement("div");
    ourStory.classList.add("our-story");
    const h2 = document.createElement("h2");
    h2.textContent = "Our Story";
    const ourstorypara1 = document.createElement("p");
    ourstorypara1.textContent = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    const ourstorypara2 = document.createElement("p");
    ourstorypara2.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    ourStory.appendChild(h2);
    ourStory.appendChild(ourstorypara1);
    ourStory.appendChild(ourstorypara2)


    const contactusDiv = document.createElement("div");
    contactusDiv.classList.add("contact-us-container");

    const location = document.createElement("div");
    location.classList.add("location");
    const h3_location = document.createElement("h3");
    h3_location.textContent = "Location";
    const p_location = document.createElement("div");
    p_location.classList.add("location-content");
    const p_addline1 = document.createElement("p");
    p_addline1.textContent = "Wz 48,";
    const p_addline2 = document.createElement("p");
    p_addline2.textContent = "Spice Shuttle,";
    const p_addline3 = document.createElement("p");
    p_addline3.textContent = "Paschim Vihar, Delhi, India";
    p_location.appendChild(p_addline1);
    p_location.appendChild(p_addline2);
    p_location.appendChild(p_addline3);
    location.appendChild(h3_location);
    location.appendChild(p_location);

    const hours = document.createElement("div");
    hours.classList.add("hours");
    const h3_hours = document.createElement("h3");
    h3_hours.textContent = "Hours";
    const p_hours = document.createElement("div");
    p_hours.classList.add("hours-content");
    const p_timings = document.createElement("p");
    p_timings.textContent = "Open Timing: 10:00am to 10:00pm"
    const p_closed = document.createElement("p");
    p_closed.textContent = "Closed on Tuesdays"
    p_hours.appendChild(p_timings);
    p_hours.appendChild(p_closed);
    hours.appendChild(h3_hours);
    hours.appendChild(p_hours);

    const contact = document.createElement("div");
    contact.classList.add("contact");
    const h3_contact = document.createElement("h3");
    h3_contact.textContent = "Contact";
    const p_contact = document.createElement("div");
    p_contact.classList.add("contact-content");
    const p_mobile = document.createElement("p");
    p_mobile.textContent = "+91-6937XXXXXX";
    const p_mail = document.createElement("p");
    p_mail.textContent = "spiceShuttle@gmail.com";
    p_contact.appendChild(p_mobile);
    p_contact.appendChild(p_mail);
    contact.appendChild(h3_contact);
    contact.appendChild(p_contact);

    contactusDiv.appendChild(location);
    contactusDiv.appendChild(hours);
    contactusDiv.appendChild(contact);


    const feedbackDiv = document.createElement("div");
    feedbackDiv.classList.add("feedback-container");
    const para1 = document.createElement("p");
    para1.textContent = "For any inquires, send us a message and we’ll get back to you as soon as possible.";
    const para2 = document.createElement("p");
    para2.textContent = "We look forward to hearing from you!";

    const form = document.createElement("form");

    const name_label = document.createElement("label");
    name_label.for = "name";
    name_label.textContent = "Name";
    const name = document.createElement("input");
    name.id = "name";
    name.classList.add("name");
    name.placeholder = "Your Name";
    const email_label = document.createElement("label");
    email_label.for = "email";
    email_label.textContent = "Email"
    const email = document.createElement("input");
    email.type = "email";
    email.id = "email";
    email.classList.add("email");
    email.placeholder = "Your Email Address";
    const message_label = document.createElement("label");
    message_label.for="message";
    message_label.textContent = "Leave Your Message Here";
    const message = document.createElement("textarea");
    message.id = "message";
    message.classList.add("message");
    message.placeholder = "Write Your Message";
    const submit = document.createElement("button");
    submit.classList.add("send");
    submit.type = "submit";
    submit.innerHTML = "<i class='fa-solid fa-paper-plane'></i> <span>Send</span>";


    form.appendChild(name_label);
    form.appendChild(name);
    form.appendChild(email_label);
    form.appendChild(email);
    form.appendChild(message_label);
    form.appendChild(message);
    form.appendChild(submit);

    feedbackDiv.appendChild(para1);
    feedbackDiv.appendChild(para2);
    feedbackDiv.appendChild(form);



    aboutusContainer.appendChild(ourStory);
    aboutusContainer.appendChild(contactusDiv);
    aboutusContainer.appendChild(feedbackDiv);
    innerContainer.appendChild(aboutusContainer);
    content.appendChild(innerContainer);
}

export {renderAboutus};