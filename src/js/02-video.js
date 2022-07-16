import Player from '@vimeo/player';
import  throttle  from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

console.log(iframe);
console.log(iframe.currentTime);

player.on('timeupdate', throttle(onActualTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function onActualTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  console.log(e.seconds);
}

