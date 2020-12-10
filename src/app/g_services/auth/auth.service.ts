import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { env } from 'process';
@Injectable({
  providedIn: 'root'
})

export class AuthService {


  isLoggedIn: boolean = false;
  userType: any;

  constructor(private httpClient: HttpClient,
    private router: Router) {
  }

  authUser() {
  }
}

