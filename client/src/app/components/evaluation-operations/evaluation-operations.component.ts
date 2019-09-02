import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-evaluation-operations',
  templateUrl: './evaluation-operations.component.html',
  styleUrls: ['./evaluation-operations.component.scss']
})
export class EvaluationOperationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    $( '#sortable1, #sortable2' ).sortable({
      connectWith: '.connectedSortable'
    }).disableSelection();
  }

}
