const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener("click", () => {
    if (!input.value) {
        alert("Please put your message to Translator Inbox");
        return;
    }

    const task = input.value;

    function getTranslate() {

        fetch("https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + task)
            .then(response => response.json())
            .then(value => {
                output.innerText = value.contents.translated
            })
            .catch(err => console.log("Found error while fetching the URL which is " + err));

    }
    getTranslate();

    input.value = "";
})
