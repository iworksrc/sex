import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class CommentComponent implements OnInit {

  @Output() private bug: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  public gretter(gret) {
    console.log(gret);
    this.bug.emit(true);
  }
}
