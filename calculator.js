const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value =
    display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression =
        display.value;

        let result =
        eval(expression);

        display.value = result;

        saveHistory(
            expression +
            " = " +
            result
        );

    }catch{

        display.value = "Error";

    }
}

function saveHistory(item){

    let history =
    JSON.parse(
        localStorage.getItem("history")
    ) || [];

    history.push(item);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );
}

document.addEventListener(
"keydown",
function(e){

    const key = e.key;

    if(
        "0123456789+-*/.".includes(key)
    ){
        append(key);
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearDisplay();
    }

});