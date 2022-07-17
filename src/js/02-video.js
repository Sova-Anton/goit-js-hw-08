import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

getStorageTime();

player.on('timeupdate', throttle(onActualTime, 1000));

function onActualTime(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
  // console.log(e.seconds);
}

function getStorageTime() {
  const savedTime = localStorage.getItem(STORAGE_KEY);

  if (savedTime) {
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
  }
}
