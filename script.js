// Set the date of the 10th wedding anniversary
const weddingDate = new Date('2025-02-08'); // Replace with the actual date of the 10th anniversary

function updateCountdown() {
    const now = new Date();
    const timeDifference = weddingDate - now;

    if (timeDifference <= 0) {
        // If the 10th anniversary has passed, show the message
        document.getElementById('countdown').textContent = 'Happy 10th Anniversary!';
        document.getElementById('message').classList.add('visible');
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `Your 10th Anniversary is in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
