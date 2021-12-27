function onButtonClick1() {

    var buttonid1 = document.getElementById("buttonID1");

    if (buttonid1.classList.contains("follow-button-pressed")) {

        buttonid1.classList.remove("follow-button-pressed");
        buttonid1.textContent = "Follow";
    }
    else {

        buttonid1.classList.add("follow-button-pressed");
        buttonid1.textContent = "Unfollow";
    }
}