let loadingLine = document.querySelector(".loadingLine");
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