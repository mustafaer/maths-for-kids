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
  sound;
  isSoundUp = false;

  constructor(private router: Router) {
    if (JSON.parse(sessionStorage.getItem('soundState')) == null) {
      sessionStorage.setItem('soundState', 'false');
    } else {
      this.isSoundUp = JSON.parse(sessionStorage.getItem('soundState'));
    }
  }

  ngOnInit() {
    this.sound = document.getElementsByTagName('audio');
    this.goHome();
    if (this.isSoundUp) {
      this.startSound();
    }
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

  goHome() {
    this.pageState = 0;
    /* 0 -> Main page
    *  1 -> Select Session Stype
    *  2 -> Select Education Operation Type
    * 3 -> Select Evaluation Operation Type*/
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
    this.router.navigate(['/dashboard/multiply-education']);
  }

  goDivideEducation() {
    this.router.navigate(['/dashboard/divide-education']);
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
