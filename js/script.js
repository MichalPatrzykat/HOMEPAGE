console.log("Pozdrawiam Serdecznie!")



let button = document.querySelector(".button");
let  header_tittle= document.querySelector(".header_tittle");

button.addEventListener("click", () => {
    header_tittle.classList.toggle("hideme");
    button.innerText =
    header_tittle.classList.contains("hideme") ? "Pokaż Nagłówek" : "Skasuj nagłówek";
    

});
let button_contactButtonNumber = document.querySelector(".button_contactButtonNumber");
let phoneNumber = document.querySelector(".phoneNumber");
button_contactButtonNumber.addEventListener("click", () => {
    phoneNumber.classList.toggle("hidenumber");
    button_contactButtonNumber.innerText =
    phoneNumber.classList.contains("hidenumber") ? "Pokaż kontakt" : "Ukryj kontakt";
});


console.log(button_contactButtonNumber);


