let player1Ready = false;
let player2Ready = false;

document.getElementById("player1Ready").addEventListener("click", function() {
    toggleReadyButton(this);
});

document.getElementById("player2Ready").addEventListener("click", function() {
    toggleReadyButton(this);
});

function toggleReadyButton(button) {
    if (button.id === "player1Ready") {
        player1Ready = !player1Ready;
    } else if (button.id === "player2Ready") {
        player2Ready = !player2Ready;
    }

    button.classList.toggle("ready");
    
    if (player1Ready || player2Ready) {
        document.getElementById("startGame").classList.remove("hidden");
    } else {
        document.getElementById("startGame").classList.add("hidden");
    }
}

document.getElementById("startGame").addEventListener("click", function() {
    startCountdown();
});

function startCountdown() {
    document.getElementById("startGame").disabled = true;
    document.getElementById("startGame").classList.add("hidden");
    document.getElementById("countdown").classList.remove("hidden");

    var countdownElement = document.getElementById("countdown");
    var seconds = 3;
    countdownElement.textContent = seconds;

    var countdownInterval = setInterval(function() {
        seconds--;
        countdownElement.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            // Redirect to the next page or perform other actions here
            window.location.href = "next-page.html";
        }
    }, 1000);
}
