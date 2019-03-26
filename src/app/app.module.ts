import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgIranProvincePicker} from './ng-iran-province-picker/ng-iran-province-picker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgIranProvincePicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
