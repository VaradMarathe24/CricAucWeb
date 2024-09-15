let player = {
    name: "Virat Kohli",
    basePrice: 10000000,
    highestBid: 12000000,
    bidHistory: [
        { user: "UserA", amount: 12000000},
        // ... other bids
    ]
};

let timer;

function displayAuctionDetails() {
    // Update HTML elements with player details, highest bid, and timer
}

function placeBid() {
    const bidAmount = parseInt(document.getElementById('bid-amount').value);

    // Bid validation (check if bid is higher than current highest bid)
    if (bidAmount <= player.highestBid) {
        alert("Bid must be higher than the current highest bid");
        return;
    }

    // Update player object with new bid
    player.highestBid = bidAmount;
    player.bidHistory.push({ user: "CurrentUser", amount: bidAmount });

    // Display updated auction details
    displayAuctionDetails();
}

function startTimer(duration) {
    let minutes, seconds;

    const timerDisplay = document.getElementById('timer');

    const countdown = () => {
        minutes = Math.floor(duration / 60);
        seconds = duration % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = `${minutes}:${seconds}`;

        if (--duration < 0) {
            clearInterval(timer);
            // Auction end logic
        }
    };

    countdown();
    timer = setInterval(countdown, 1000);
}

// Start timer
startTimer(300); // 5 minutes

displayAuctionDetails();
