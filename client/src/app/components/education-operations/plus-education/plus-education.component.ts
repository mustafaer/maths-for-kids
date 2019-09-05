import {Component, OnInit} from '@angular/core';
import {Items} from '../../../shared/shared';
// @ts-ignore
import plus from '../../../shared/operations/plus.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plus-education',
  templateUrl: './plus-education.component.html',
  styleUrls: ['./plus-education.component.scss']
})

export class PlusEducationComponent implements OnInit {

  Arr = Array;
  educationBackground = Items.educationBackground;
  mainBackground = Items.mainBackground;
  cloud = Items.cloud;
  apple = Items.apple;
  plate = Items.plate;
  appleCount: number;
  appleCount2: number;
  plusOperations = plus;
  isFirst: boolean;
  isLast: boolean;
  currentQuestion: number;
  movedApple: number;
  sound;
  appleSound;
  isSoundUp = false;
  toggleState = false;

  constructor(private router: Router) {
    this.isSoundUp = JSON.parse(sessionStorage.getItem('soundState'));
    this.movedApple = 0;
    this.isFirst = true;
    this.isLast = false;
    this.currentQuestion = 1;
    this.appleCount = this.plusOperations[this.currentQuestion - 1].first;
    this.appleCount2 = this.plusOperations[this.currentQuestion - 1].second;
  }

  ngOnInit() {
    // @ts-ignore
    this.toggleState = (window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height);
    this.sortApples();
    this.sound = document.getElementsByTagName('audio');
    if (this.isSoundUp) {
      this.startSound();
    }
    // @ts-ignore
    $(document).on('mousedown', '.apple', (event) => {
      this.startAppleSound();
    });
  }

  sortApples() {
    // @ts-ignore
    $('#sortable1, #sortable2, #sortable3').sortable({
      connectWith: '#sortable3',
    }).on('sortstop', (event, ui) => {
      this.movedApple++;

    }).disableSelection();
  }

  nextQuestion() {
    this.currentQuestion++;
    if (this.currentQuestion > 10) {
      this.isLast = true;
    }
    if (this.isLast !== true) {
      this.resetQuestion();
    }
    this.isFirst = false;

  }

  previousQuestion() {
    this.currentQuestion--;
    if (this.currentQuestion <= 1) {
      this.isFirst = true;
    }
    this.resetQuestion();
    this.isLast = false;
  }

  createFruits1() {
    let x = 0;
    let htmlImg = '';
    while (x < this.appleCount) {
      htmlImg = htmlImg + '<img class="apple fruits2_a" src="' + this.apple + '">';
      x++;
    }
    // @ts-ignore
    $('#sortable1').html(htmlImg);
  }

  createFruits2() {
    let x = 0;
    let htmlImg = '';
    while (x < this.appleCount2) {
      htmlImg = htmlImg + '<img class="apple fruits2_a" src="' + this.apple + '">';
      x++;
    }
    // @ts-ignore
    $('#sortable2').html(htmlImg);
  }

  resetQuestion() {
    // @ts-ignore
    $('.fruits3 .apple').remove();
    this.appleCount = this.plusOperations[this.currentQuestion - 1].first;
    this.appleCount2 = this.plusOperations[this.currentQuestion - 1].second;
    this.createFruits1();
    this.createFruits2();
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }

  stopSound() {
    this.sound[0].pause();
    this.isSoundUp = false;
    sessionStorage.setItem('soundState', 'false');
  }

  startSound() {
    this.sound[0].play();
    this.isSoundUp = true;
    sessionStorage.setItem('soundState', 'true');
  }

  startAppleSound() {
    this.appleSound = document.createElement('audio');

    const src = '../../../../assets/sounds/button-21.mp3';

    this.appleSound.src = src;
    this.appleSound.setAttribute('preload', 'auto');
    this.appleSound.setAttribute('controls', 'none');
    this.appleSound.style.display = 'none';
    document.body.appendChild(this.appleSound);
    this.appleSound.play();
  }

  toggleFullScreen() {
    this.toggleState = true;
    // @ts-ignore
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      // @ts-ignore
      if (document.documentElement.requestFullScreen) {
        // @ts-ignore
        document.documentElement.requestFullScreen();
        // @ts-ignore
      } else if (document.documentElement.mozRequestFullScreen) {
        // @ts-ignore
        document.documentElement.mozRequestFullScreen();
        // @ts-ignore
      } else if (document.documentElement.webkitRequestFullScreen) {
        // @ts-ignore
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      this.toggleState = false;
      // @ts-ignore
      if (document.cancelFullScreen) {
        // @ts-ignore
        document.cancelFullScreen();
        // @ts-ignore
      } else if (document.mozCancelFullScreen) {
        // @ts-ignore
        document.mozCancelFullScreen();
        // @ts-ignore
      } else if (document.webkitCancelFullScreen) {
        // @ts-ignore
        document.webkitCancelFullScreen();
      }
    }
  }
}
