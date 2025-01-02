const input = document.querySelector("input");
const btn = document.querySelector("button");
const countbox= document.querySelector("span");

btn.addEventListener("click", function(element){
    element.preventDefault();
    let data= input.value ;

    countbox.innerHTML = input.value.split(" ").length;
    

})