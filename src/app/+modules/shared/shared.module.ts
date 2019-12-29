import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from '../../src/app/+modules/shared/components/stopwatch/stopwatch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StopwatchComponent]
})
export class SharedModule { }
