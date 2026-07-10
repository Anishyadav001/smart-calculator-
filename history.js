const historyList =
document.getElementById("historyList");

function loadHistory(){

    let history =
    JSON.parse(
        localStorage.getItem("history")
    ) || [];

    if(history.length === 0){

        historyList.innerHTML =
        "<p>No history found</p>";

        return;
    }

    let html = "";

    history.reverse().forEach(item => {

        html += `
        <div class="history-item">
            ${item}
        </div>
        `;

    });

    historyList.innerHTML = html;
}

function clearHistory(){

    localStorage.removeItem("history");

    loadHistory();
}

loadHistory();