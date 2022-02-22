input = document.querySelector("input");
button = document.querySelector(".button");
button.addEventListener('click', () =>  {
    window.open(`https://api.whatsapp.com/send/?phone=%2B4${input.value}`,"_self")

});