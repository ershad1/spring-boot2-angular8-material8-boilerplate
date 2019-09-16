import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localSt: LocalStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userInfo = this.localSt.retrieve('user');
    let authReq;
    if (userInfo) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `${userInfo.token}`)
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
