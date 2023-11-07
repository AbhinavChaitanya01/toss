document.getElementById('toss').addEventListener('click', generateImage);
function generateImage(){
    const tossText = document.getElementById('tossText');
    const tossImg = document.getElementById('tossImg');

    tossText.style.display = 'block'; // Show the text
    tossImg.setAttribute('src', ''); // Set src to blank
    var audio=new Audio("flipsound.mp3");
    audio.play();
    setTimeout(() => {
        if (Math.round(Math.random()) === 0) {
            tossImg.setAttribute('src', 'heads.png');
        } else {
            tossImg.setAttribute('src', 'tails.png');
        }
        tossText.style.display = 'none'; // Hide the text
        console.log('clicked');
    }, 1500); // 1000 milliseconds = 1 second
}

