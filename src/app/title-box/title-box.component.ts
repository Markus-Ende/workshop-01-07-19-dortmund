import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() title = 'no title';
  @Output() titleClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.titleClick.emit('!');
  }
}
