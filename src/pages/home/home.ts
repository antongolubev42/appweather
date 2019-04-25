import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountyProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
counties:any = [];
name : string;
desc:string = "";
  constructor(public navCtrl: NavController,private countyProvider:CountyProvider) {

  }


  search(){
    this.countyProvider.getCountyInfo(this.name).subscribe((data)=>
    {
      console.log(data.weather)
      this.counties=data.weather;
      this.desc = data.weather[0];
    });
  }
}
