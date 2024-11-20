//Element Access
let allBtns = document.querySelectorAll(".expand-contract-btn");
let allBtnsImg = document.querySelectorAll(".expand-contract-img");
let ansBlocks = document.querySelectorAll(".answers");

//Global variable
let btnStatus = [false, false, false, false];

for (let i = 0; i <= 3; i++) {
    //Hoover property
    allBtnsImg[i].addEventListener("mouseenter", () => {
        allBtnsImg[i].style.opacity = "0.7";
    });

    allBtnsImg[i].addEventListener("mouseleave", () => {
        allBtnsImg[i].style.opacity = "1";
    });

    //To display answer
    allBtns[i].addEventListener("click", () => {
        onClickButton(i);
    });
}


function onClickButton(btnIdx) {
    if (btnStatus[btnIdx] == false) {
        btnStatus[btnIdx] = true;
        allBtnsImg[btnIdx].src = "assets/images/icon-minus.svg";
        ansBlocks[btnIdx].style.display = "block";
    }
    else if (btnStatus[btnIdx] == true) {
        btnStatus[btnIdx] = false;
        allBtnsImg[btnIdx].src = "assets/images/icon-plus.svg";
        ansBlocks[btnIdx].style.display = "none";
    }
}