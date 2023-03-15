const playbutton = document.querySelector('#playBtn');
const prevbutton = document.querySelector('#prevBtn');
const nextbutton = document.querySelector('#nextBtn');
const audio = document.querySelector('#playlist-audio');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const singer = document.querySelector('#singer');
const progress = document.querySelector('.progress-line');
const progressContainer = document.querySelector('.progress-container-line');
const volumeInput = document.querySelector('.volume');
const volumeIcon = document.querySelector('.fa-volume-high');
// Music List
const musicBtn = document.querySelector('#musiclistBtn');
const musiclist = document.querySelector('.music-list');
const musicCloseBtn = document.querySelector('#musiclistcloseBtn');
const currentVolume = volumeInput.value;
// array of songs
const songs = [
    {
        title: 'Ambient Music',
        singer: 'Ambient',
        src: 'Ambient Music',
        image: `Ambient Music`,
        songDuration: `27:02`
        
    },
    {
        title: 'Classical Music',
        singer: 'Classic',
        src: 'Classical Music',
        image: `Classical Music`,
        songDuration: `27:01`
    },
    {
        title: 'Concentration Music',
        singer: 'Focus',
        src: 'Concentration Music',
        image: `Concentration Music`,
        songDuration: `26:57`
    },
    {
        title: 'Joji Instruments',
        singer: 'Joji',
        src: 'Joji Instruments',
        image: `Joji Instruments`,
        songDuration: `27:03`
    },
    {
        title: 'Lofi hiphop mix',
        singer: 'Sadness Lofi',
        src: 'Lofi hiphop mix',
        image: `Lofi hiphop mix`,
        songDuration: `27:02`
    },
    {
        title: 'Rain Music',
        singer: 'Rain',
        src: 'Rain Music',
        image: `Rain Music`,
        songDuration: `27:01`
    },
    {
        title: 'Summer Rain',
        singer: 'Summer rain',
        src: 'Summer Rain',
        image: `Summer Rain`,
        songDuration: `27:02`
    },
]

let musicSongIndex = 2

window.addEventListener("load", () => {
    songIn(songs[musicSongIndex]);
    playNowClasses();
    
})

const playlistIconPause = document.querySelector('#playlistIconBtn');

function playSong() {
    audio.play();
    document.querySelector('#playBtn i.fas').classList.remove('fa-play');
    playlistIconPause.style.display = 'block'
    playlistIconPause.style.visibility = 'visible'
}

function pauseSong() {
    audio.pause();
    document.querySelector('#playBtn i.fas').classList.add('fa-play');
    playlistIconPause.style.display = 'none'
}




function songIn(song) {
    singer.innerText = song.singer
    title.innerText = song.title
    audio.src = `music/${song.title}.mp3`
    cover.src = `images/${song.title}.jpg`
}

function prevsongs() {
    musicSongIndex--

    if (musicSongIndex < 0) {
        musicSongIndex = songs.length - 1
    }

    songIn(songs[musicSongIndex])

    playSong()
}

function nextsongs() {
    musicSongIndex++

    if (musicSongIndex > songs.length - 1) {
        musicSongIndex = 0
    }

    songIn(songs[musicSongIndex])

    playSong()
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`

    let firstDuration = document.querySelector('.first-duration')
    let lastDuration = document.querySelector('.last-duration');

    let musicCurrentTime = firstDuration;
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

    let musicDurationTime = lastDuration;
    let durationMin = Math.floor(duration / 60);
    let durationSec = Math.floor(duration % 60);
    if (durationSec < 10) {
        durationSec = `0${durationSec}`;
        musicDurationTime.innerText = `${durationMin}:${durationSec}`;
    }
}


function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}




playbutton.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

function volumeAudio() {
    audio.volume = volumeInput.value / 100
}

function updateVolumeIcon() {
    if (audio.volume === 0) {
        volumeIcon.classList.remove('fa-volume-high', 'fa-volume-low');
        volumeIcon.classList.add('fa-volume-mute');
    } else if (audio.volume < 0.5) {
        volumeIcon.classList.remove('fa-volume-high', 'fa-volume-mute');
        volumeIcon.classList.add('fa-volume-low');
    } else {
        volumeIcon.classList.remove('fa-volume-low', 'fa-volume-mute');
        volumeIcon.classList.add('fa-volume-high');
    }

    volumeIcon.style.color = "#bababa"
}









for (let i = 0; i < songs.length; i++) {
    let musicListNames = `<div data-index="${i}" class="music-list-names">
                <img class="music-list-images" src="images/${songs[i].image}.jpg" alt="">
                <div class="try">
                <p class="music-list-names-title">${songs[i].title}</p>
                <span class="music-list-small-name">${songs[i].singer}</span>   
            </div>
            <audio src="music/${songs[i].src}.mp3" id="${songs[i].src}"></audio>
            <span class="music-list-duration">${songs[i].songDuration}</span>
            </div>`
    musiclist.insertAdjacentHTML("beforeend", musicListNames);

    
}

// song onClick
const playListTags = musiclist.querySelectorAll('.music-list-names');

function playNowClasses() {

    for (let j = 0; j < playListTags.length; j++) {

        if(playListTags[j].classList.contains("playing")) {
            playListTags[j].classList.remove("playing");
        }

        if(playListTags[j].getAttribute("data-index") == musicSongIndex) {
            playListTags[j].classList.add("playing");
        }
    
    
        playListTags[j].setAttribute("onclick", "clicked(this)");
    }
}

// play song on click

function clicked(element) {
    let getDataIndex = element.getAttribute("data-index");
    musicSongIndex = getDataIndex;
     songIn(songs[musicSongIndex]);
    playSong();
    playNowClasses();
}


function toggleMusicList() {
  musiclist.classList.toggle('active');
  musicCloseBtn.classList.toggle('active');
}








volumeIcon.addEventListener('click', () => {
    if (volumeIcon.classList.contains('fa-volume-mute')) {
      volumeIcon.classList.remove('fa-volume-mute');
      volumeIcon.classList.add('fa-volume-high');
      audio.volume = volumeInput.value / 100;
      volumeInput.value = currentVolume;
      volumeAudio()
    } else {
      volumeIcon.classList.remove('fa-volume-high');
      volumeIcon.classList.add('fa-volume-mute');
      audio.volume = 0;
      volumeInput.value = 0
    }
  });
  

volumeInput.addEventListener('input', volumeAudio);
audio.addEventListener('volumechange', updateVolumeIcon);
audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress);
prevbutton.addEventListener('click', prevsongs);
nextbutton.addEventListener('click', nextsongs);
musicBtn.addEventListener('click', toggleMusicList);
musicCloseBtn.addEventListener('click', toggleMusicList);

const scrollbar = OverlayScrollbars(document.querySelector('.music-list'), {
    scrollbars: {
      autoHide: 'move',
      autoHideDelay: 300
    }
});
  