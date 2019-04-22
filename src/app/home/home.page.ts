import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

declare let cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  subscription:any;

  constructor(private platform: Platform) {

  }

  ngOnInit(){

  }

  ionViewDidEnter(){
      this.subscription = this.platform.backButton.subscribe(()=>{
          navigator['app'].exitApp();
      });
  }

  ionViewWillLeave(){
        this.subscription.unsubscribe();
  }

  bindToZCKService(){
    cordova.plugins.ZKCService.bindZKCService("hola",
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      })
  }

  testCoolMethod(){
    cordova.plugins.IntermecPr.coolMethod("hola desde el plugin",
      (success)=>{
        console.log(JSON.stringify(success));
      },(error)=>{
        console.log(error);
      });
  }
}
