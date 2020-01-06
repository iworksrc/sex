import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { CommentComponent } from './components/comment/comment.component';
import { AuthGuard } from './guards/auth.guard';
import { ApiService } from './services/api.service';

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
  providers: [AuthGuard, ApiService]
})
export class SharedModule { }
