import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { ToastController, Config } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastControllerService {

  constructor(private toastController: ToastController, private ionicConfig: Config, private translate:TranslateService) {
    // console.log("toastControlService");
  }
  // for more information https://ionicframework.com/docs/api/toast#properties
  async  presentToast(message: string, backgroundColor: string = 'primary') {
    // console.log(backgroundColor)
    const tost = await this.toastController.create({
      color: backgroundColor,
      message: message,
      duration: 2000,
    });
    tost.present();
  }

  
  async  presentToastWithRefreshBtn(message: string, backgroundColor: string = 'primary') {
    // console.log(backgroundColor)
    const tost = await this.toastController.create({
      color: backgroundColor,
      message: message,
      // duration: 15000,
      buttons:[
      {
        text: this.translate.instant('Refresh'),
        side:"start",
        handler:()=>{
          location.reload()
        }
      },
      {
        text: this.translate.instant('Close'),
        side:"start",
        role:'cancel'
      }
      ]
    });
    tost.present();
  }
}
