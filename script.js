const openButton = document.getElementById("openMessage");
const closeButton = document.getElementById("closeMessage");
const messageModal = document.getElementById("messageModal");
const overlay = document.getElementById("overlay");

function openMessage(){
    messageModal.classList.add("active")
    overlay.classList.add("active");
}

function closeMessage(){
    messageModal.classList.remove("active");
    overlay.classList.remove("active");
}

openButton.addEventListener("click", openMessage);
closeButton.addEventListener("click", closeMessage);

overlay.addEventListener("click", closeMessage);

document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        closeMessage();
    }
});