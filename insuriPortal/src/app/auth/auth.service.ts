import { Injectable } from '@angular/core';
import { fhirAuth } from '../private';
import { HttpRequest } from '@angular/common/http';
//import decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    cachedRequests: Array<HttpRequest<any>> = [];

    public getUsername(): string {
        return fhirAuth.username;
    }

    public getPassword(): string {
        return fhirAuth.password;
    }

    public collectFailedRequest(request): void {
        this.cachedRequests.push(request);
    }

    public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
    }

//   public getToken(): string {
//     return localStorage.getItem('token');
//   }

//   public isAuthenticated(): boolean {
//     // get the token
//     const token = this.getToken();
//     // return a boolean reflecting 
//     // whether or not the token is expired
//     return tokenNotExpired(null, token);
//   }
}
