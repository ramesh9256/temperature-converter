const celVlu = document.querySelector(".inCel");
const fahVlu = document.querySelector(".inFah");
const kelVlu = document.querySelector(".inKel");


celVlu.addEventListener("change", () => {
    console.log(celVlu.value);
    fahVlu.value = parseInt(celVlu.value) * (9/5) + 32;
    kelVlu.value = parseInt(celVlu.value) + 273.15;

    

})
fahVlu.addEventListener("change", () => {
    console.log(fahVlu.value);
    celVlu.value = ((parseInt(fahVlu.value) -32)*5)/9;
    kelVlu.value = (parseInt(fahVlu.value) + 459.67) * 5/9;

    
})
kelVlu.addEventListener("change", () => {
    console.log(kelVlu.value);
    celVlu.value = parseInt(kelVlu.value) - 273.15;
    fahVlu.value = 1.8*(parseInt(kelVlu.value)-273.15)+32;
    
})




