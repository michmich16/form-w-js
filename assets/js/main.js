const formParent = document.getElementById('main-formular');

const formFirstName = document.getElementById('firstName');
const formLastName = document.getElementById('familyName');
const formAddress = document.getElementById('myAddress');
const formZip = document.getElementById('zipCode');
const formEmail = document.getElementById('myEmail');
const formButton = document.getElementById('myButton');



formButton.addEventListener('click', (event) => {

    // formen bruger ikke sin default som giver page reload
    event.preventDefault();

    // trim whitespace fra navn
    // let myTrimmedName = formFirstName.value.trim();

    if (formFirstName.length > 2 && formLastName.length > 2 &&  formAddress.length > 5 && validateEmail(formEmail.value)) {
        console.log('formen er udfyldt korrekt');
        formParent.innerHTML = '<h2>tak for informationen</h2>';

        /*   let myResponseElement = document.createElement('h2');
          myResponseElement.innerText = 'tak for tilmeldingen';
  
        //   formParent.appendChild(myResponseElement); */

    } else {

        // name evaluation
        if (formFirstName.length >= 2) {


        } else {
            console.log('name er IKKE ok');
            //alert('name er IKKE ok');

            // inline styling  
            //myNameElement.style = 'border: 2px solid red;'

            // tilføj class fra CSS
            formFirstName.classList.toggle('errorMarking');

        }
        if (formLastName.length >= 2){

        } else {
            console.log('name er IKKE ok');
            formLastName.classList.toggle('errorMarking');
        }


        // email validation
        if (validateEmail(formEmail.value)) {

        } else {
            console.log('email er IKKE ok');
            alert('email er IKKE ok');
            formEmail.classList.toggle('errorMarking');
        }

    }




});








function validateEmail(email) {
    // Definer en simpel regulær udtryk for email-validering
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test om emailen matcher det regulære udtryk
    let isValid = emailRegex.test(email);

    // Returner resultatet af valideringen (true eller false)
    return isValid;
}










function callBack(event) {
    event.preventDefault();
    console.log('clicked fra named function');
}