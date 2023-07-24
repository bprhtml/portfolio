export function loadContactForm(container) {


    const formTitle = document.createElement('h1');
    formTitle.classList.add('form-title');
    formTitle.innerHTML = 'Contact Us';
    container.appendChild(formTitle);

    const formDescription = document.createElement('h4');
    formDescription.classList.add('form-desc');
    formDescription.innerHTML = 'Please feel free to get in contact with us if you have any questions at all! My links to social media are displayed at the bottom of this page.';
    container.appendChild(formDescription);

    const formInputs = [
      { label: 'First Name *', type: 'text', name: 'firstName', class: 'form-first-name'},
      { label: 'Last Name *', type: 'text', name: 'lastName', class: 'form-last-name' },
      { label: 'Company', type: 'text', name: 'compName', class: 'form-company' },
      { label: 'Email Address *', type: 'email', name: 'email', class: 'form-email' },
      { label: 'Phone Number', type: 'tel', name: 'phoneNum', class: 'form-phone' },
      { label: 'Message...', type: 'text', name: 'message', class: 'form-message'}
    ];
  
    const contactForm = document.createElement('form');
    contactForm.action = 'send_email.php';
    contactForm.method = 'POST';

    const inputsContainer = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'Submit';
    submitBtn.classList.add('submit-form');

    // let firstName, lastName, companyName, emailAddress, phoneNumber;
  
    formInputs.forEach((inputAttr) => {
        const input = document.createElement('input');
        input.placeholder = inputAttr.label;
        input.type = inputAttr.type;
        input.name = inputAttr.name;
        input.classList = inputAttr.class;
        inputsContainer.appendChild(input);
    });
  
    const thanks = document.createElement('div')
    thanks.style.fontSize = '6vh';
    thanks.style.marginTop = '6vh';

    contactForm.appendChild(inputsContainer);
    contactForm.appendChild(submitBtn);
    container.appendChild(contactForm);

    submitBtn.addEventListener('click', (e) => 
        sendForm(e, thanks, container, formDescription));
    inputsContainer.classList.add('all-form-inputs')
  }

  const formWarning = document.createElement('div');
  formWarning.classList.add('form-warning');

  function sendForm(e, thx, div, warnLocation) {
    e.preventDefault();

    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const companyName = document.querySelector('input[name="compName"]').value;
    const emailAddress = document.querySelector('input[name="email"]').value;
    const phoneNumber = document.querySelector('input[name="phoneNum"]').value;
    const message = document.querySelector('input[name="message"]').value;


    formWarning.innerHTML = ''
    if (firstName == '' || lastName == '' || emailAddress == '' || message == '') {
        formWarning.style.color = 'red';
        formWarning.innerHTML = 'Please fill out all necessary inputs!';
        warnLocation.appendChild(formWarning);
    } else if (!emailAddress.includes('@')){
        formWarning.style.color = 'red';
        formWarning.innerHTML = 'Please ensure you have the correct email format.';
        warnLocation.appendChild(formWarning); 
    } else {
        div.innerHTML = '';
        thx.innerHTML = 'Thank you for contacting us! We will be in touch.';
        div.appendChild(thx);
        console.log(firstName, lastName, companyName, emailAddress, phoneNumber, message);
    }
        e.preventDefault();

    // AJAX request to send the form data to the PHP script
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (xhr.responseText === "success") {
                    // Handle success
                    div.innerHTML = '';
                    thx.innerHTML = 'Thank you for contacting us! We will be in touch.';
                    div.appendChild(thx);
                } else {
                    // Handle error
                    formWarning.style.color = 'red';
                    formWarning.innerHTML = 'Oops! Something went wrong. Please try again later.';
                    warnLocation.appendChild(formWarning);
                }
            } else {
                // Handle error
                formWarning.style.color = 'red';
                formWarning.innerHTML = 'Oops! Something went wrong. Please try again later.';
                warnLocation.appendChild(formWarning);
            }
        }
    };

    // Convert form data to a query string and send it
    const formData = new FormData(contactForm);
    xhr.send(formData);
    
}