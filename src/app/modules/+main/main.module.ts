import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [LeftMenuComponent, MainComponent]
})
export class MainModule { }
