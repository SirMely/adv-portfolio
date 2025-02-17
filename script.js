// bg-music
document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("bg-music");
    var playButton = document.getElementById("playButton");

    if (music && playButton) {
        console.log("Audio element found:", music);

        // Function to toggle play/pause
        function toggleMusic() {
            if (music.paused) {
                music.play().then(() => {
                    console.log("Playing music");
                }).catch(error => {
                    console.error("Playback failed:", error);
                });
            } else {
                music.pause();
                console.log("Music paused");
            }
        }

        // Add click event to the h1 element
        playButton.addEventListener('click', toggleMusic);

    } else {
        console.error("Audio element not found");
    }
});


// bg-video
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("bg-video");

    // Makes sure the video loads
    if (video) {
        console.log("Video element found:", video);

        video.play();

        // Checking the time of the video before it ends to loop it
        video.addEventListener('timeupdate', function() {
            var buffer = 0.1;
            if (video.currentTime >= video.duration - buffer) {
                video.currentTime = 0.1;
                video.play();
                console.log("Looping back to start");
            }
        });
    } else {
        console.error("Video element not found");
    }
});


// nav-bar function
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 400) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
});

// Burger Menu Toggle
document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
    this.classList.toggle('toggle');
    body.classList.toggle('no-scroll')
});

// Dynamic Link (First time doing this lol I didn't know Javascript could even do this. ~ Dec 31st)

document.getElementById('twoLinks').addEventListener('click', function(event) {
    event.preventDefault(); // This should stop the normal function of the link

    if (window.innerWidth <= 768) {
        window.location.href = '#about-mobile';
    }else {
        window.location.href = '#about';
    }
})

// Gmail copy to clipboard
document.getElementById("gmailLink").addEventListener("click", function (event) {
    event.preventDefault();
    const email = "willsdeontae06@gmail.com"; 
    navigator.clipboard.writeText(email).then(() => {
        alert("The email has been copied to the clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
});

// Select elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

