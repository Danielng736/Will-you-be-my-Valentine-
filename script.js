(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
document.title = "Marcus Will You Be My Valentine?";

const messages = [
    "South Carolina is Gone",
    "Marcus is evil now",
    "Shussshhh",
    "You have committed fraud in a greek resturant laundering 14k",
    "Help Marcus he is drowning say YES"
    
];

const noGifs = [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmY5NGE4amdyZnR0aGdqNmxsdWFramFqcHZ2MHg3dDFjM2tuenh0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WMTessTbMEQFtrlIAE/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHkzbjV1d25rNHM5bnR5dHQxNmx4bmUybXQ4YXl3OTFvNDE5NWYxdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4zPB0WxHQPkyoxXZ52/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3AzMXV3ZHdkZDIydGRmMzJ0cGQ1aXhqNzE3Y2Vtc3A3a24wdXFmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3y6VfhC2hEVMjk6qYx/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2RqNWJ1dHJpcm44eDdtNTNtb3NvaGw0ejB4a25xam9pMmcyMW02NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oL56Q1wmbnCT7Zby9F/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzNoZjQwazZhZzZ5MzJ1bWFpNmRwcTJrMDRwMmZjMHJ2NHd1N2FpMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QMZTxArIp9HkaiJGMo/giphy.gif"
];

const bounceGifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGd1a3EwOTUxODZvaTdjcXo2dHd6bmU0eXBxMHBzd3dqbHJteXFwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I6PCqzAByxfEF97WSf/giphy.gif",
];

let gifIndex = 0;
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gif = document.getElementById("valentineGif");

    // Change button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Grow YES button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Change GIF
    gif.src = noGifs[gifIndex];
    gifIndex = (gifIndex + 1) % noGifs.length;
}
function handleYesClick() {
    const randomIndex = Math.floor(Math.random() * bounceGifs.length);
    gif.src = bounceGifs[randomIndex];

    // Start bouncing
    gif.classList.add("bounce");
    window.location.href = "yes_page.html";
}
