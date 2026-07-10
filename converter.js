function convertValue(){

    let value =
    parseFloat(
        document.getElementById("inputValue").value
    );

    let type =
    document.getElementById("converterType").value;

    let result = 0;

    switch(type){

        case "m-km":
            result = value / 1000;
            break;

        case "km-m":
            result = value * 1000;
            break;

        case "g-kg":
            result = value / 1000;
            break;

        case "kg-g":
            result = value * 1000;
            break;

        case "c-f":
            result = (value * 9/5) + 32;
            break;

        case "f-c":
            result = (value - 32) * 5/9;
            break;
    }

    document.getElementById("resultBox")
    .innerHTML =
    "Result: " + result;

}