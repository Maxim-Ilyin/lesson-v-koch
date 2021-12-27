function onButtonClick2() {

    var buttonid2 = document.getElementById("buttonID2");

    if (buttonid2.classList.contains("start-button-pressed")) {

        buttonid2.classList.remove("start-button-pressed");
        buttonid2.textContent = "Start";
    }
    else {

        buttonid2.classList.add("start-button-pressed");
        buttonid2.textContent = "STOP";
    }
}