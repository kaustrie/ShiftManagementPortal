import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClarityModule } from 'clarity-angular';
import { NavModule } from './nav/nav.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    NavModule
  ],
  providers: [],
  exports: [ClarityModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
