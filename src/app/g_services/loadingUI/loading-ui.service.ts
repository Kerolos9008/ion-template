import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from '../localization/localization.service';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastControllerService } from '../toastController/toast-controller.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingUIService {
  private loading: any = null;

  constructor(public loadingController: LoadingController, private _localizationService: LocalizationService,
    public _toastControllerService: ToastControllerService, private translate: TranslateService) { }

  //auto display timeout message
  enableDisplayTimeoutMessage: boolean = true;
  timeOutToDisplayTimeoutMessage = 600000;

  async presentLoading(loadingText: String = this.translate.instant('Please wait...')) {
    this.loading = await this.createLoading(loadingText)
    this.enableDisplayTimeoutMessage ? this.autoDisplayTimeoutMessage() : null;
    return await this.loading.present();
  }
  
  autoDisplayTimeoutMessage() {
    setTimeout(() => {
      if (this.loading) {
        // this.dismissLoading()
        this._toastControllerService.presentToastWithRefreshBtn(this.translate.instant('Sorry for late response, that may depends on your network connection, please wait or click on Refresh to refresh the App.'));
        // console.error("dismissLoading from loading service (loading time > 30 sec)")
      }
    }, this.timeOutToDisplayTimeoutMessage);
  }

  async dismissLoading() {
    this.loading = null;
    return await this.loadingController.dismiss();
  }

  async createLoading(loadingText) {
    return this.loadingController.create({
      message: loadingText,
    });
  }
}



