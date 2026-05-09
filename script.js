// --- YOUR MEMORIES DATABASE ---
// Add the names of your photos here!
const sequenceData = [
    {
        text: "Prettiest women i know...🤭💗",
        btnText: "Pop another baloon/gift box",
        img: "pic1.jpeg" // Add your photo name
    },
    {
        text: "love being by ur sidee...🌺🥹",
        btnText: "Pop another ballon/gift box",
        img: "pic2.jpeg"
    },
    {
        text: "such a cutie, thanks for supporting me 💌",
        btnText: "pop another baloon or gift box",
        img: "pic3.jpeg"
    },
    {
        text: "best memory: our lil night walk+ yap sessions🫶🏻",
        btnText: "pop another baloon or gift box",
        img: "pic4.jpeg"
    },
    {
        text: "love u bohot saaaraaaa😽😽😽😽",
        btnText: "See final surprise ✨",
        img: "pic5.jpeg"
    }
];

let currentStep = 0;

// Function to move between screens
function nextScreen(hideId, showId) {
    document.getElementById(hideId).classList.add('hidden');
    
    setTimeout(() => {
        document.getElementById(showId).classList.remove('hidden');
        
        // If we are moving to the loading screen, start the staggered text
        if(showId === 'screen-2') {
            triggerLoadingScreen();
        }
    }, 500);
}

// Function to show the loading texts one by one
function triggerLoadingScreen() {
    const texts = document.querySelectorAll('.load-text');
    let delay = 500;

    texts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.remove('hidden-text');
        }, delay);
        delay += 1000; // wait 1 second before showing the next line
    });

    // Show the pic and the button after all text is loaded
    setTimeout(() => {
        document.getElementById('us-pic').classList.remove('hidden-text');
        document.getElementById('continue-btn').classList.remove('hidden-text');
    }, delay + 500);
}

// Function to pop a balloon and show the modal
function popBalloon(element) {
    // 1. Add the pop animation so it disappears
    element.classList.add('pop-anim');
    
    // 2. Wait a split second for the pop effect, then show the photo modal
    setTimeout(() => {
        const data = sequenceData[currentStep];
        
        document.getElementById('memory-text').innerText = data.text;
        document.getElementById('modal-btn').innerText = data.btnText;
        document.getElementById('memory-img').src = data.img;
        
        document.getElementById('memory-modal').classList.remove('hidden');
    }, 300);
}

// Function to close the modal and check if we should go to the final screen
function closeModal() {
    document.getElementById('memory-modal').classList.add('hidden');
    
    currentStep++; // Move to the next memory in the list
    
    // If we have popped all 5 balloons, go to the final screen
    if (currentStep >= 5) {
        setTimeout(() => {
            nextScreen('screen-3', 'screen-4');
        }, 500);
    }
}