import { NativeMobileAppService } from './../nativeMobileApp/native-mobile-app.service';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ParamsService } from '../params/params.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private defaultUsrLang = 'en'  // 'ar' or 'en'
  private userLang: string = 'en';
  private acceptedLangs = ['ar', 'en']

  constructor(private translate: TranslateService, private _paramService: ParamsService, private _nativeMob: NativeMobileAppService) {
  }

  init() {
    this.setUserLang(this._paramService.getUserLang() || localStorage.getItem('lang'))
  }
  setUserLang(lang) {

    if (!this.acceptedLangs.includes(lang)) {
      console.warn("Language in param is not supported or lang param does not exist, please use 'ar' or 'en' for 'lang' param, user language automatically set to " + this.defaultUsrLang);
      lang = this.defaultUsrLang
    }
    this.translate.use(lang)
    this.userLang = lang;
    lang === 'ar' ? document.body.classList.add('rtl') : document.body.classList.remove('rtl');
    localStorage.setItem('lang', lang);
  }
  getUserLang(): string {
    return this.userLang
  }
}
