import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ClarityModule } from 'clarity-angular';
import { SubNavComponent } from './sub-nav/sub-nav.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forRoot()
  ],
  declarations: [
    MainNavComponent,
    SubNavComponent
  ],
  exports: [
    MainNavComponent,
    SubNavComponent
  ]
})
export class NavModule { }
