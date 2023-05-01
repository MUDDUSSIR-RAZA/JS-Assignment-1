let loadingLine = document.querySelector(".loadingLine");
let showHide = document.querySelector(".showHide");
let bgColor = 10;
let interval;

let loadingLineFunction = () => {
    if (bgColor > 100) {
        bgColor = 10;
    } else {
        loadingLine.style.width = bgColor + "%";
        bgColor += 10;
    }
}


let load = () => {
    if (typeof interval !== "undefined") {
        clearInterval(interval);
        interval = undefined;
    } else {
        interval = setInterval(loadingLineFunction, 500);
    }
};

let change = (pic) => {
    pic.src = "./images/pic2.jpg"
}

let reChange = (pic) => {
    pic.src = "./images/pic1.jpg"
}

let showHideFunction = () => {
    if (showHide.style.display === "flex") {
        showHide.style.display = "none";
    } else {
        showHide.style.display = "flex";
    }
}