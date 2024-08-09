// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); //Remember this cancels event

    const contactPage = document.getElementById('contact-page');
    contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';
});
