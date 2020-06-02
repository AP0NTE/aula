import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { User } from '../ApoyoPersona/models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private currentUserSubjec: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private handleErrService: HandleHttpErrorService) {
    this.currentUserSubjec = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubjec.asObservable();
    this.baseUrl = baseUrl;
  }
  public get currentUserValue(): User {

    return this.currentUserSubject.value;

  }
  login(username, password) {

    return this.http.post<any>(`${this.baseUrl}api/login`, { username, password })

      .pipe(map(user => {

        // store user and jwt token in local storage to keep user logged in between page refreshes

        localStorage.setItem('currentUser', JSON.stringify(user));

        this.currentUserSubject.next(user);

        return user;

      }));

  }

  logout() {

    // remove user from local storage and set current user to null

    localStorage.removeItem('currentUser');

    this.currentUserSubject.next(null);

  }
}
