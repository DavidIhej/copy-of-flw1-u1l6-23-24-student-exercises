// variables to store HTML elements
let placeholder = document.querySelector(".placeholder");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");


// click event for buttonOne
buttonOne.addEventListener('click', function() {

    // 1. Select the placeholder and update the src.
    // - The image address should be a picture of a place you want to travel to.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.
placeholder.src = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/77/77c192420d9b280d77abae0339f0f9270a614a03_full.jpg"



});


// click event for buttonTwo
buttonTwo.addEventListener('click', function() {

    // 2. Select the placeholder and update the src.
    // - The image address should be a picture that represents your mood.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.
placeholder.src = "https://stickerly.pstatic.net/sticker_pack/31BYJg8KxH2Qu9r21CqJrA/L6Q4AV/4/5401460f-7fac-4657-b0ed-dbbf4e312461.png"


    

});