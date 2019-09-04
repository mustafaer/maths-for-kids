import {Component, OnInit} from '@angular/core';
import {Items} from '../../shared/shared';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mainBackground = Items.mainBackground;
  plus = Items.plus;
  minus = Items.minus;
  divide = Items.divide;
  multiply = Items.multiply;
  pageState: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.pageState = 0;
    /* 0 -> Main page
    *  1 -> Select Session Stype
    *  2 -> Select Education Operation Type
    * 3 -> Select Evaluation Operation Type*/
  }

  goHome() {
    this.ngOnInit()
  }

  goSessions() {
    this.pageState = 1;
  }

  goEducationSession() {
    this.pageState = 2;
  }

  goEvaluationSession() {
    this.pageState = 3;
  }

  goPlusEducation() {
    this.router.navigate(['/dashboard/plus-education']);
  }

  goMinusEducation() {
    this.router.navigate(['/dashboard/minus-education']);
  }

  goMultiplyEducation() {
  }

  goDivideEducation() {
  }

  goPlusEvaluation() {

  }

  goMinusEvaluation() {
  }

  goMultiplyEvaluation() {
  }

  goDivideEvaluation() {
  }
}
