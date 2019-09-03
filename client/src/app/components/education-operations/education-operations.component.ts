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
  appleCount = 5;
  appleCount2 = 3;
  plusOperations = plus;
  isFirst: boolean;
  isLast: boolean;
  currentQuestion: number;

  constructor() {
    this.isFirst = true;
    this.isLast = false;
    this.currentQuestion = 1;
  }

  ngOnInit() {
    this.sortApples();
  }

  sortApples() {
    // @ts-ignore
    $('#sortable1, #sortable2, #sortable3').sortable({
      connectWith: '.connectedSortable',
    }).on('sortstop', (event, ui) => {

      window.navigator.vibrate(200);

    });
  }

  nextQuestion() {
    this.currentQuestion++;
    if (this.currentQuestion >= 10) {
      this.isLast = true;
    }
    this.isFirst = false;

  }

  previousQuestion() {
    this.currentQuestion--;
    if (this.currentQuestion <= 1) {
      this.isFirst = true;
    }
    this.isLast = false;
  }
}
