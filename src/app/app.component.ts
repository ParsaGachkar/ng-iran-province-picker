import {Component} from '@angular/core';
import {MapProvince} from './ng-iran-province-picker/ng-iran-province-picker/ng-iran-province-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IranMap';
  Province = 'None'
  log(p: MapProvince) {
    console.log(p + ' Selected!');
    this.Province = p;
  }
}
