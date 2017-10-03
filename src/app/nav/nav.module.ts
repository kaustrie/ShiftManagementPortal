import { NgModule } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
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
