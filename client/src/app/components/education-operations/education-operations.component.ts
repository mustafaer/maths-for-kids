import {Component, OnInit} from '@angular/core';
import {Items} from '../../shared/shared';
// @ts-ignore
import plus from '../../../assets/operations/plus.json';

@Component({
  selector: 'app-education-operations',
  templateUrl: './education-operations.component.html',
  styleUrls: ['./education-operations.component.scss']
})

export class EducationOperationsComponent implements OnInit {

  Arr = Array;
  educationBackground = Items.educationBackground;
  apple = Items.apple;
  plate = Items.plate;
  appleCount: number;
  appleCount2: number;
  plusOperations = plus;
  isFirst: boolean;
  isLast: boolean;
  currentQuestion: number;
  movedApple: number;

  constructor() {
    this.movedApple = 0;
    this.isFirst = true;
    this.isLast = false;
    this.currentQuestion = 1;
    this.appleCount = this.plusOperations[this.currentQuestion - 1].first;
    this.appleCount2 = this.plusOperations[this.currentQuestion - 1].second;
  }

  ngOnInit() {
    this.sortApples();
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
    // @ts-ignore
    $('.fruits3 .apple').remove();
    this.currentQuestion++;

    this.appleCount = this.plusOperations[this.currentQuestion - 1].first;
    this.appleCount2 = this.plusOperations[this.currentQuestion - 1].second;
    this.createFruits1();
    this.createFruits2();
    if (this.currentQuestion >= 10) {
      this.isLast = true;
    }
    this.isFirst = false;

  }

  previousQuestion() {
    // @ts-ignore
    $('.fruits3 .apple').remove();
    this.currentQuestion--;
    this.appleCount = this.plusOperations[this.currentQuestion - 1].first;
    this.appleCount2 = this.plusOperations[this.currentQuestion - 1].second;
    this.createFruits1();
    this.createFruits2();
    if (this.currentQuestion <= 1) {
      this.isFirst = true;
    }
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
}
