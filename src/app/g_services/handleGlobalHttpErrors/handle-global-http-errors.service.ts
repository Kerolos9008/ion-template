import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HandleGlobalErrorService } from '../handleGlobalError/handle-global-error.service';
import { RouterStateSnapshot, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NativeMobileAppService } from './../nativeMobileApp/native-mobile-app.service';

@Injectable({
  providedIn: 'root'
})
export class HandleGlobalHttpErrorsService {
  unRedirectRoutes = ['/signup', '/login']
  constructor(private _authService: AuthService, private _handleGlobalErrorService: HandleGlobalErrorService, private router: Router, private route: ActivatedRoute, private translate : TranslateService, private _nativeMob: NativeMobileAppService) { }
  handleError(error: HttpErrorResponse) {

    // console.error('handle global error >> ', error.status);
    if (error.status === 401) {
      // this._nativeMob.handleMobileActions('renewUserSession');
    } else if (error.error.message) {
    } 
    else if (error.status >= 500 || error.status < 400) {
      this._handleGlobalErrorService.handleUnexpectedError();
    }
  }
}
