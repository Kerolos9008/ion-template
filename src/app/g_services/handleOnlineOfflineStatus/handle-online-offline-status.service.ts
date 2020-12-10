import { Injectable } from '@angular/core';
import { ReportingService } from '../reporting/reporting.service';
declare var $: any
@Injectable({
  providedIn: 'root'
})
export class HandleOnlineOfflineStatusService {
  private isOnline: boolean = true;

  constructor(private _reporting : ReportingService) {
    // console.log("HandleOnlineOfflineStatusService");

  }

  init() {
    window.addEventListener('online', (ev) => {
      document.getElementById('connectionErrorMsg').style.display = 'none'
      this.isOnline = true;
    });
    window.addEventListener('offline', (ev) => {
      document.getElementById('connectionErrorMsg').style.display = 'block'
      this.isOnline = false;
    });

    document.body.addEventListener('click', (e) => {
      this._reporting.clickEvent(e)
      // console.log("ajaxClick", e.target.classList.contains("ajaxReqClick") && !navigator.onLine);
      // (<HTMLElement>e.target).classList.contains("ajaxReqClick") && 
      if ( !(<HTMLElement>e.target).classList.contains("connectionErrorMsg") && !navigator.onLine) {
        let connectionErrorMsg = document.getElementById('connectionErrorMsg')
        connectionErrorMsg.style.display = 'block'
        connectionErrorMsg.classList.add.apply(connectionErrorMsg.classList, ["animated", "shake", "fast"])
        setTimeout(() => {
          connectionErrorMsg.classList.remove.apply(connectionErrorMsg.classList, ["animated", "shake", "fast"])
        }, 200);
      }
    })
  }
  getStatus(): boolean {
    return this.isOnline
  }
}