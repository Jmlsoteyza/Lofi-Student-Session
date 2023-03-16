// values
let breakLengthValue;
let sessionLengthValue;
let minutesTimeLeftValue;
let secondsTimeLeftValue;
// values

                        // break length
const break_length = document.getElementById("break-length");
const break_decrement = document.getElementById("break-decrement");
const break_increment = document.getElementById("break-increment");
let breakStart = false;
                        // break length

                        // session length
const session_length = document.getElementById("session-length");
const session_decrement = document.getElementById("session-decrement");
const session_increment = document.getElementById("session-increment");
                        // session length

                        // timer&name
const timerName = document.getElementById("timer-name");
const timer = document.getElementById("timer");
let timer_active = false;
                        // timer&name

                        // play&reset
const play_Pause = document.getElementById("playPause");
const reset = document.getElementById("reset");
                        // play&reset

let mycountDown; // countdown

const ring = document.getElementById("ring");

const all_Buttons = document.querySelectorAll("button");
// icons
const iconPlay = document.querySelector(".fa-play");
const iconPause = document.querySelector(".fa-pause-pmdr");
// icons
const playBoop = document.querySelector('.playBoop');




for (let i = 0; i < all_Buttons.length; i++) {
    all_Buttons[i].addEventListener("click", function() {
        all_Buttons[i].classList.add("active");
        setTimeout(() => all_Buttons[i].classList.remove("active"),150)
    })
}

window.onload = function () {
    resetValues();
  };

  function resetValues() {
    if (mycountDown !== undefined) clearInterval(mycountDown);
    ring.pause();
    ring.currentTime = 0;
    timerName.innerHTML = "Session";
    timer_active = false;
    breakStart = false;
    breakLengthValue = 5;
    sessionLengthValue = 25;
    minutesTimeLeftValue = sessionLengthValue;
    secondsTimeLeftValue = 0;
  
    timer.innerHTML = `${minutesTimeLeftValue}:${secondsTimeLeftValue}0`;
    break_length.innerHTML = breakLengthValue;
    session_length.innerHTML = sessionLengthValue;
    iconPlay.style.visibility = 'visible';
    iconPause.style.visibility = 'hidden';
  }

break_decrement.addEventListener("click", function () {
    if(!timer_active) {
      if (breakLengthValue > 1) {
        breakLengthValue--;
      }
      break_length.innerHTML = breakLengthValue;
    }
});

break_increment.addEventListener("click", function () {
    if (!timer_active) {
      if (breakLengthValue < 60) {
        breakLengthValue++;
      }
      break_length.innerHTML = breakLengthValue;
    }
  });

session_decrement.addEventListener("click", function () {
    if (!timer_active) {
        if (sessionLengthValue > 1) {
            sessionLengthValue--;
            minutesTimeLeftValue--;
            session_length.innerHTML = sessionLengthValue;
        }
        setTimerValue();
    }
})

session_increment.addEventListener("click", function () {
    if (!timer_active) {
        if (sessionLengthValue < 60) {
            sessionLengthValue++;
            minutesTimeLeftValue++;
            session_length.innerHTML = sessionLengthValue;
        }
        setTimerValue();
    }
});

function setTimerValue() {
    if (breakStart) {
      timerName.innerHTML = "Break";
      minutesTimeLeftValue = breakLengthValue;
    } else {
      timerName.innerHTML = "Session";
      minutesTimeLeftValue = sessionLengthValue;
    }

  
    minutesTimeLeftValue = minutesTimeLeftValue < 10 ? "0" + minutesTimeLeftValue :         
    minutesTimeLeftValue;
  
    secondsTimeLeftValue = 0

    timer.innerHTML = `${minutesTimeLeftValue}:${secondsTimeLeftValue}0`;
    
  }

reset.addEventListener("click", resetValues);
play_Pause.addEventListener("click", startStopTimer);

function startStopTimer() {
  timer_active = !timer_active;

  
  if (timer_active) {
    mycountDown = setInterval(() => {
      countDown();
    }, 1000);
    document.visibilityState = 'visible';
  } else {
    clearInterval(mycountDown);
    document.visibilityState = 'hidden';
  }
  playBoop.play();
}

play_Pause.addEventListener("click", () => {

    if (iconPlay.style.visibility !== 'hidden') {
        iconPlay.style.visibility = 'hidden';
        iconPause.style.visibility = 'visible';
    } else {
        iconPlay.style.visibility = 'visible';
        iconPause.style.visibility = 'hidden';
    }

    playBoop.play()
})


function countDown() {
    if (secondsTimeLeftValue === 0) {
      secondsTimeLeftValue = 60;
      minutesTimeLeftValue--;
    }
  
    secondsTimeLeftValue--;
  
    let minutesStr = minutesTimeLeftValue.toString();
    let secondsStr = secondsTimeLeftValue.toString();
  
    if (minutesTimeLeftValue < 10) {
      minutesStr = "0" + minutesStr;
    }
    if (secondsTimeLeftValue < 10) {
      secondsStr = "0" + secondsStr;
    }
  
    timer.innerHTML = `${minutesStr}:${secondsStr}`;
  
    if (minutesTimeLeftValue === 0 && secondsTimeLeftValue === 0) {
      clearInterval(mycountDown);
      ring.play();
      if (!breakStart) {
        breakStart = true;
        breakLengthValue = break_length.innerHTML;
        minutesTimeLeftValue = breakLengthValue;
        timerName.innerHTML = "Break";
      } else {
        breakStart = false;
        sessionLengthValue = session_length.innerHTML;
        minutesTimeLeftValue = sessionLengthValue;
        timerName.innerHTML = "Session";
      }
      setTimeout(() => {
        setTimerValue();
        timer_active = false;
        startStopTimer();
        if (!breakStart) {
          resetValues();
        }
      }, 6000);
    }
  }
  