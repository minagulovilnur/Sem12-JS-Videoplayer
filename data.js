const playVideo = document.querySelector(".play");
const pauseVideo = document.querySelector(".pause");
const stopVideo = document.querySelector(".stop");
const forward = document.querySelector(".forward");
const backward = document.querySelector('.backward')
const video = document.querySelector("video");
const timeVideo = document.querySelector(".currentTime");
const dVideo = document.querySelector(".durationVideo");
const volume = document.querySelector('input[type=range]');

console.log(backward);
playVideo.onclick = () => {
    video.play();
}

pauseVideo.onclick = () => {
  video.pause();
};

stopVideo.onclick = () => {
  video.pause();
  video.currentTime = 0; 
};

forward.onclick = () => {
  video.currentTime += 10; //перемотка  10 секунд
};

backward.onclick = () => {
  video.currentTime -= 10;
};

volume.onchange = (e) => {
  video.volume = e.target.value;
};


function changeVideo(url) {
  document.getElementById("video-tv").src = url;
}
