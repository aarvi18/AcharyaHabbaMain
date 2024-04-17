const fade = () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.add("fade");
};

const eventRedirectButton = document.getElementById("register-event");
eventRedirectButton.addEventListener("click", () => {
  window.open("https://register.acharyahabba.com/events", "_blank");
});

window.addEventListener("load", fade);

var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtns");

// Pause and play the video, and change the button text
function myFunction() {
  if ((video.muted = false)) {
    video.muted = true;
    btn.innerHTML = "Sound On";
  } else {
    video.muted = false;
    btn.innerHTML = "Pause";
  }
}

document.getElementById("myBtn").onclick = function () {
  opennav();
};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function opennav() {
  document.getElementById("myDropdown").classList.toggle("show");
}
