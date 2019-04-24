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
    cordova.plugins.ZKCService.bindZKCService({},
      (success)=>{
        console.log(success);
        this.turnOnPrinter();
        this.ToastIt(JSON.stringify(success));
      },(error)=>{
        console.log(error);
      })
  }

  turnOnPrinter(){
    cordova.plugins.ZKCService.turnOnPrinter({},
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      })
  }

  getPrinterStatus(){
    cordova.plugins.ZKCService.getPrinterStatus({},
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      })
  }

  turnOffPrinter(){
    cordova.plugins.ZKCService.turnOffPrinter({},
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      })
  }

  turnOnScanner(){
    cordova.plugins.ZKCService.turnOnScanner({},
      (success)=>{
        //console.log(success);
        this.ToastIt(success);
      },(error)=>{
        console.log(error);
      })
  }

  turnOffScanner(){
    cordova.plugins.ZKCService.turnOffScanner({},
      (success)=>{
        //console.log(success);
        this.ToastIt(success);
      },(error)=>{
        console.log(error);
      })
  }

  testPrinter(){
    cordova.plugins.ZKCService.testPrinter("w56x1vg4y",
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      })
  }

  ToastIt(result){
    cordova.plugins.ZKCService.ToastIt(result,
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
