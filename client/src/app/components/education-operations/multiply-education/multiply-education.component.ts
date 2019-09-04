import {Component, OnInit} from '@angular/core';
import {Items} from '../../../shared/shared';
// @ts-ignore
import plus from '../../../shared/operations/multiply.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-multiply-education',
  templateUrl: './multiply-education.component.html',
  styleUrls: ['./multiply-education.component.scss']
})
export class MultiplyEducationComponent implements OnInit {

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

  constructor(private router: Router) {
    this.isLast = false;
    this.isFirst = true;
    this.movedApple = 0;
    this.currentQuestion = 1;
    this.appleCount = this.plusOperations[this.currentQuestion - 1].first;
    this.appleCount2 = this.plusOperations[this.currentQuestion - 1].second;
  }

  ngOnInit() {
    this.createPlates();
    this.sortApples();
  }

  plt(id) {
    // tslint:disable-next-line:max-line-length
    const plates = '<div class="plate_container"><div id="fruitsMultiply3_' + id + '" class="fruitsMultiply3 connectedSortable"></div><img class="plateMultiply3" src="' + this.plate + '"></div>';
    return plates;
  }

  createPlates() {
    // tslint:disable-next-line:max-line-length
    let x = 0;
    let htmlImg = '';
    while (x < this.appleCount) {
      htmlImg = htmlImg + this.plt(x);
      x++;
    }
    // @ts-ignore
    $('.dotMultiply3').html(htmlImg);
    if (this.appleCount2 === 1) {
      // @ts-ignore
      $('.fruitsMultiply3').css('margin-left', '110px');
    } else if (this.appleCount2 === 2) {
      // @ts-ignore
      $('.fruitsMultiply3').css('margin-left', '59px');
    } else if (this.appleCount2 === 3) {
      // @ts-ignore
      $('.fruitsMultiply3').css('margin-left', '33px');
    }
  }

  sortApples() {
    // @ts-ignore
    $('#sortable1, .fruitsMultiply3').sortable({
      connectWith: '.connectedSortable',
      receive: (event, ui) => {
        // @ts-ignore
        if ($('#' + event.target.id).children().length > 1) {

          // @ts-ignore
          $(ui.sender).sortable('cancel');
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
    let x = 0;
    let htmlImg = '';
    while (x < this.appleCount2) {
      htmlImg = htmlImg + '<img class="apple fruits2_a" src="' + this.apple + '">';
      x++;
    }
    let x2 = 0;
    let htmlImg2 = '';
    while (x2 < this.appleCount) {
      htmlImg2 = htmlImg2 + '<div id="allApples">' + htmlImg + '</div>';
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
