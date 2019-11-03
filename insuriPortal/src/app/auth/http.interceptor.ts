import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class FhirInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authdata = window.btoa(this.auth.getUsername() + ':' + this.auth.getPassword());
        request.headers.set('Authorization', 'Basic ' + authdata);
        // request = request.clone({
        //     setHeaders: {
        //         'Authorization': 'Basic ' + authdata
        //     }
        // });
        return next.handle(request);
    }
}
