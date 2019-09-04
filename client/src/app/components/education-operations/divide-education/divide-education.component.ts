import {Component, OnInit} from '@angular/core';
import {Items} from '../../../shared/shared';
// @ts-ignore
import plus from '../../../shared/operations/divide.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-divide-education',
  templateUrl: './divide-education.component.html',
  styleUrls: ['./divide-education.component.scss']
})
export class DivideEducationComponent implements OnInit {

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
  appleResult: number;

  constructor(private router: Router) {
    this.isLast = false;
    this.isFirst = true;
    this.movedApple = 0;
    this.currentQuestion = 1;
    this.appleCount = this.plusOperations[this.currentQuestion - 1].first;
    this.appleCount2 = this.plusOperations[this.currentQuestion - 1].second;
  }

  ngOnInit() {
    this.appleResult = this.appleCount / this.appleCount2;
    this.createPlates();
    this.sortApples();
  }

  plt(id) {
    // tslint:disable-next-line:max-line-length
    const plates = '<div class="plate_container"><div id="fruitsDivide3_' + id + '" class="fruitsDivide3 connectedSortable"></div><img class="plateDivide3" src="' + this.plate + '"></div>';
    return plates;
  }

  createPlates() {
    // tslint:disable-next-line:max-line-length
    let x = 0;
    let htmlImg = '';
    while (x < this.appleCount2) {
      htmlImg = htmlImg + this.plt(x);
      x++;
    }
    // @ts-ignore
    $('.dotDivide3').html(htmlImg);
  }

  sortApples() {
    // @ts-ignore
    $('#sortable1, .fruitsDivide3').sortable({
      connectWith: '.connectedSortable',
      receive: (event, ui) => {
        // @ts-ignore
        const receiverElement = $('#' + event.target.id);
        if (receiverElement.children().length > this.appleResult) {

          // @ts-ignore
          $(ui.sender).sortable('cancel');
        }
        // @ts-ignore
        if (receiverElement.children().length < 3) {
          receiverElement.css({'margin-left': '57px', 'width': '109px'});
        } else if (receiverElement.children().length <= 4) {
          receiverElement.css({'margin-left': '32px', 'width': '164px'});
        } else {
          receiverElement.css('width', '165px');
        }
      }
    }).disableSelection();
  }

  removeApple() {

    // @ts-ignore
    $(document).on('click', '.fruits3 .apple', (event) => {
      // @ts-ignore
      event.target.remove();
      this.movedApple++;
      // @ts-ignore
      $('#removedApples .apple').remove();
      let x = 0;
      let htmlImg = '';
      while (x < this.movedApple) {
        htmlImg = htmlImg + '<img class="apple fruits2_a" src="' + this.apple + '">';
        x++;
      }
      // @ts-ignore
      $('#removedApples').html(htmlImg);
    });
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
    const htmlImg = '<img class="apple fruits2_a" src="' + this.apple + '">';
    let x2 = 0;
    let htmlImg2 = '';
    while (x2 < this.appleCount) {
      htmlImg2 = htmlImg2 + '<span id="allApplesDivide">' + htmlImg + '</span>';
      x2++;
    }
    // @ts-ignore
    $('#sortable1').html(htmlImg2);
  }

  resetQuestion() {
    // @ts-ignore
    $('.fruits3 .apple').remove();
    // @ts-ignore
    $('#sortable1 #allApples').remove();
    this.movedApple = 0;
    this.appleCount = this.plusOperations[this.currentQuestion - 1].first;
    this.appleCount2 = this.plusOperations[this.currentQuestion - 1].second;
    this.createFruits1();
    this.ngOnInit();
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }
}
