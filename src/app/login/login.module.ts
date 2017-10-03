import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
