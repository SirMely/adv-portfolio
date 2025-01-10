// bg-music
document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("bg-music");

    if (music) {
        console.log("Audio element found:", music);

        // Function to start the music and set up looping
        function startMusic() {
            music.currentTime = 0;
            music.play().then(() => {
                console.log("Playing music from the beginning");
            }).catch(error => {
                console.error("Autoplay failed:", error);
                // Show a play button if autoplay fails
                showPlayButton();
            });

            music.addEventListener('timeupdate', function() {
                if (music.currentTime >= music.duration) {
                    music.currentTime = 0;
                    music.play();
                    console.log("Looping back to start");
                }
            });
        }

        // Function to show a play button (Could have honestly made this a lot easier on myself but the code is 6 months old so I don't want to change anything lol.)
        function showPlayButton() {
            var playButton = document.createElement('button');
            playButton.textContent = "♬";
            playButton.style.position = 'absolute';
            playButton.style.bottom = '48px';
            playButton.style.left = '20px';
            playButton.style.zIndex = '1000';
            playButton.style.padding = '10px 20px';
            playButton.style.backgroundColor = '#ad9470';
            playButton.style.color = 'white';
            playButton.style.border = 'none';
            playButton.style.borderRadius = '0.5rem';
            playButton.style.cursor = 'pointer';

            document.querySelector('#hero').appendChild(playButton);

            playButton.addEventListener('click', function() {
                playButton.remove();
                startMusic();
            });
        }

        // Try to start the music automatically
        startMusic();
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

