let boxList = document.querySelectorAll(".box")
let picList = document.querySelectorAll(".pic")
let sound = document.getElementById("success")

boxList.forEach(element => {
    element.addEventListener("dragover", onDragOver)
    element.addEventListener("drop", onDrop)
})


function onDragOver(e) {
    e.preventDefault();
}

picList.forEach(element => {
    element.addEventListener("dragstart", dragStart)
})

function dragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function onDrop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    sound.currentTime = 0;
    sound.play();
}