const win = document.getElementById("window");
const titleBar = document.getElementById("title-bar");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

titleBar.addEventListener("mousedown", (e) => {
    isDragging = true;

    const rect = win.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    win.style.left = `${e.clientX - offsetX}px`;
    win.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});






function show_hide(){
    const w = document.querySelector(".file_explorer")
    console.log(w)
    let display = w.style.display
    if(display=="none") {
        w.style.display = "block"
    }else{
        w.style.display="none"
    }
}