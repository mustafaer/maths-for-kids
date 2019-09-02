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
    // @ts-ignore
    $('.apple').vibrate('medium');
    // @ts-ignore
    $( '#sortable1, #sortable2, #sortable3' ).sortable({
      connectWith: '.connectedSortable',
    }).on( 'sortstop', ( event, ui ) => {
      console.log(event)
      console.log(1);
    } );
  }
}
