import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { PageTitleComponent } from './page-title/page-title.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
  ],
  declarations: [PageTitleComponent],
  exports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    PageTitleComponent
  ]
})
export class SharedModule { }
