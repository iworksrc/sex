import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StopwatchComponent,
    CommentComponent
  ],
  exports: [
    StopwatchComponent,
    CommentComponent
  ]
})
export class SharedModule { }
