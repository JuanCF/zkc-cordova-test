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
  devices: any[];

  constructor(private platform: Platform) {

  }

  ngOnInit(){

  }

  ionViewDidEnter(){
      /*this.subscription = this.platform.backButton.subscribe(()=>{
          navigator['app'].exitApp();
      });*/
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
    cordova.plugins.jziotPrinter.turnOnPrinter({},
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      });
    /*cordova.plugins.ZKCService.turnOnPrinter({},
      (success)=>{
        console.log(success);
        this.ToastIt(success);
      },(error)=>{
        console.log(error);
      })*/
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
    cordova.plugins.jziotPrinter.turnOffPrinter({},
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      })
    /*cordova.plugins.ZKCService.turnOffPrinter({},
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      })*/
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
    let base64Image = "data:image/png;base64,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";
    let text = "REPÚBLICA DE HONDURAS"+ "\n";
    let text7 = "ACUARIO";
    let text16 = "ACHABACANAMIENTO";
    let text32 = "SUPERCALIFRAGILISTICOEXPIALIDOSO";
    let text36 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    cordova.plugins.sewooklp.printBulkData({
      "printableObjects":[
        {
          "image":base64Image,
          "margin_left":10,
          "concentration":40
        },
        {
          "text":text,
          "align":1
        },
        {
          "text":text7,
          "align":1
        },
        {
          "text":text7,
          "align":2
        },
        {
          "text":text16+ "\n",
          "align":0
        },
        {
          "text":text16,
          "align":1
        },
        {
          "text":text16,
          "align":2
        },
        {
          "text":text32,
          "align":2
        },
        {
          "text":text36,
          "align":1
        },
        {
          "qrtext":"Si no estoy en un lugar, buscame en otro."
        },
		{
          "text":text36,
          "align":1
        },
      ]
    },
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      })
  }

  testPrintText(){
    let text = "REPÚBLICA DE HONDURAS"+ "\n";
    cordova.plugins.ZKCService.printText (
      {"text":text,
       "align":1
      },
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
    cordova.plugins.jziotPrinter.coolMethod("hola desde el plugin",
      (success)=>{
        console.log(JSON.stringify(success));
      },(error)=>{
        console.log(error);
      });
  }

  turnOnBluetooth(){
    cordova.plugins.sewooklp.setupBluetooth({},
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      });
  }

  listPairedDevices(){
    cordova.plugins.sewooklp.listPairedDevices({},
      (result)=>{
		this.devices = result;
      },(error)=>{
        console.log(error);
      });
  }

  connectToSelectedDevice(deviceMAC){
	  cordova.plugins.sewooklp.connectToDevice(deviceMAC,
      (result)=>{
		console.log(result);
      },(error)=>{
        console.log(error);
      });
  }

  disconnectFromCurrentDevice(){
	  cordova.plugins.sewooklp.disconnectFromDevice({},
      (result)=>{
		console.log(result);
      },(error)=>{
        console.log(error);
      });
  }
}
