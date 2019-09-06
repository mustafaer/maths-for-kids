import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  sound;
  isSoundUp = false;

  constructor() {
    this.createSoundElement();
  }

  createSoundElement() {
    this.isSoundUp = JSON.parse(sessionStorage.getItem('soundState'));
    this.sound = document.createElement('audio');

    const src = '../assets/sounds/background_music.mp3';

    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'loop');
    this.sound.setAttribute('controlsList', 'nodownload');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
    this.soundStartCheck();
  }

  soundStartCheck() {
    if (this.isSoundUp) {
      this.soundRepeat();
    }
  }

  soundRepeat() {
    this.sound.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    this.sound.play();
  }
}
