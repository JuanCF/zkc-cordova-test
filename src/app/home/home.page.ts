import { Component } from '@angular/core';

declare let cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

  }

  ngOnInit(){
  }

  testCoolMethod(){
    cordova.plugins.IntermecPr.coolMethod("hola desde el plugin",
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      });
  }
}
