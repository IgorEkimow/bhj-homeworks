const editor = document.getElementById("editor");

editor.value = localStorage.textEditor === undefined ? "" : localStorage.textEditor;
editor.addEventListener("keyup", (event) => {
    localStorage.textEditor = editor.value;
});

const clear = document.getElementById("clearTextEditor");
clear.addEventListener("click", () => {
    localStorage.removeItem("textEditor");
    editor.value = "";
});