// Theme Color

function setDarkMode(){

    document.body.classList.remove("light-mode");

    localStorage.setItem(
        "theme",
        "dark"
    );
}

function setLightMode(){

    document.body.classList.add("light-mode");

    localStorage.setItem(
        "theme",
        "light"
    );
}

function resetSettings(){

    localStorage.removeItem("theme");

    location.reload();
}

window.onload = function(){

    let theme =
    localStorage.getItem("theme");

    if(theme === "light"){

        document.body.classList.add(
            "light-mode"
        );
    }

};