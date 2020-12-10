import { LoadingUIService } from './../loadingUI/loading-ui.service';
import { HandleGlobalHttpErrorsService } from './../handleGlobalHttpErrors/handle-global-http-errors.service';
// import { ToastControllerService } from './../toastController/toast-controller.service';

import { Injectable, ErrorHandler } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { retry, catchError, map, finalize } from 'rxjs/operators';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { throwError } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private _handleGlobalHttpErrorService: HandleGlobalHttpErrorsService, private _loading : LoadingController,private _loadingService : LoadingUIService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({
      setHeaders: {
        oam_BillProfileId: "1-LYDQ671",
        oam_userid: "01100926035",
        oam_CustAccId: "1-LYDQ66V"

      }});
    return next.handle(modified);
  }

}