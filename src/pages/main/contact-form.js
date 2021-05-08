let checkboxAgrement = document.querySelector("#agreement"),
    modalSubmitBtn = document.querySelector(".contact-form__btn");


// Window unlock submit button

checkboxAgrement.addEventListener('change', () => {

    if (checkboxAgrement.checked) {
        modalSubmitBtn.disabled = false;
    } else {
        modalSubmitBtn.disabled = true;
    }
})