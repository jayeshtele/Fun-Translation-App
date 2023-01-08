const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener("click", ()=>{
    if(!input.value){
        alert("Please put your message to Translator Inbox");
        return;
    }
    const task = input.value;
    output.innerText = task
    input.value = "";
})
