import {Component, OnInit} from '@angular/core';
import {Items} from '../../shared/shared';

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

  constructor() {
  }

  ngOnInit() {
  }
}
