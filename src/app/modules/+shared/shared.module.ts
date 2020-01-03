import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { CommentComponent } from './components/comment/comment.component';
import { AuthGuard } from './guards/auth.guard';

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
  ],
  providers: [AuthGuard]
})
export class SharedModule { }
