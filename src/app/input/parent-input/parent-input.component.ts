import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrls: ['./parent-input.component.scss']
})
export class ParentInputComponent implements OnInit {
  listStudent = [
    {id: 1, name: 'Nam'}, {id: 2, name: 'Bum'}, {id: 3, name: 'Ez'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
