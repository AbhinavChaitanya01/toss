document.getElementById('toss').addEventListener('click', generateImage);
function generateImage(){
    const tossText = document.getElementById('tossText');
    const tossImg = document.getElementById('tossImg');

    tossText.style.display = 'block'; // Show the text
    tossImg.setAttribute('src', ''); // Set src to blank

    setTimeout(() => {
        if (Math.round(Math.random()) === 0) {
            tossImg.setAttribute('src', 'heads.png');
        } else {
            tossImg.setAttribute('src', 'tails.png');
        }
        tossText.style.display = 'none'; // Hide the text
        console.log('clicked');
    }, 1000); // 1000 milliseconds = 1 second
}

