import { Router } from '@angular/router';
import { ToastControllerService } from './../toastController/toast-controller.service';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleGlobalErrorService {

  constructor(
    private translate : TranslateService,private _toast : ToastControllerService,
     private router:Router) { }

  handleUnexpectedError() {
    this.router.navigate(['unexpected-error'])
    this._toast.presentToast(this.translate.instant("Unexpected error occurred, please try again"),'danger')
  }

}
