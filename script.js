
var tabLinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')

function opentab(tabname) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove('active-link')
        console.log(tabLink.classList)
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

function openmenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}
function closemenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px"
}

function showMoreWorks(newlyDisplayedDiv) {
    const moreWorks = document.getElementById(newlyDisplayedDiv);
    // console.log("test")
    // console.log(moreWorks.style.display)
    if(moreWorks.style.display === "none") {
        // console.log("appear")
        moreWorks.style.display = 'block';
        moreWorks.classList.add('appear')

        setTimeout(function() {
            moreWorks.classList.remove('appear');
        }, 500)
    }
    else {
        moreWorks.classList.add('disappear');
        // console.log("disappear")

        setTimeout(function() {
            // div.style.opacity = "0";
            moreWorks.style.display = "none";
            moreWorks.classList.remove("disappear");
        }, 400)
    }
    
}
var currentRotation = 0;


// ---Gates Animation---


function showNewPage() {
    console.log(currentRotation)
    const leftGate = document.querySelectorAll('.left-gate');
    const rightGate = document.querySelectorAll('.right-gate');
    // const divToDisplay = document.getElementById('newPage');

    console.log(leftGate)
    leftGate[0].style.width = '50%';
    leftGate[1].style.width = '50%';
    rightGate[0].style.width = '50%';
    rightGate[1].style.width = '50%';

    const leftImage = document.getElementById('left-gate-image');
    const rightImage = document.getElementById('right-gate-image');
    console.log(leftImage)
    setTimeout(function() {
        rotateImage(leftImage, currentRotation + 360);
        rotateImage(rightImage, currentRotation + 360);
        currentRotation += 360;
        console.log(currentRotation)
    }, 250)
    // Delay the text display by 0.5s (matching the gate animation time)
    setTimeout(function() {
        const mainSection = document.getElementById('work-section');
        const hobbySection = document.getElementById('hobby-section');
        if(hobbySection.style.display === "none") {
            mainSection.style.display = "none";
            hobbySection.style.display = "block";
        }
        else {
            mainSection.style.display = "block";
            hobbySection.style.display = "none";
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 1000);
    setTimeout(function() {
        rotateImage(leftImage, currentRotation + 360);
        rotateImage(rightImage, currentRotation + 360);
        currentRotation += 360;
        // console.log(currentRotation)
    }, 1000)
    
    setTimeout(function() {
        
        leftGate[0].style.width = '0';
        leftGate[1].style.width = '0';
        rightGate[0].style.width = '0';
        rightGate[1].style.width = '0';
        
    }, 1300);
}

function rotateImage(myImage, degrees) {
    myImage.style.transform = `rotate(${degrees}deg)`;
}

function playSong(songId) {
    // only 1 song at a time
    var songs = document.getElementsByClassName('player');
    for (var i = 0; i < songs.length; i++) {
        var song = songs[i];
        if (song.id === songId) {
            console.log(6)
            song.play();
        } 
        else {
            song.pause();
        }
    }
    
    unHighlightSongs();

    const mySong = document.getElementById('song-title-' + songId.charAt(songId.length - 1));
    mySong.classList.add("active-song");
}
function unHighlightSongs() {
    const songList = document.getElementsByClassName('song-title');
    for(song of songList) {
        song.classList.remove('active-song');
    }
}
// ---ensure that all of the page elements are valid if they were declared before loading in---
// window.onload = function() {
//     sidemenu = document.getElementById("sidemenu");
    
// }

