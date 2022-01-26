import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baseUrl='http://localhost:8081/user-api/users'
  constructor(private _http:HttpClient) { }

  loginWithEmail=(email:string,password:string):Observable<User>=>{
    let url=`${this._baseUrl}/login/email/${email}/password/${password}`;
    return this._http.get<User>(url);
  }
  loginWithContact=(contact:number,password:string):Observable<User>=>{
    let url=`${this._baseUrl}/login/contact/${contact}/password/${password}`;
    return this._http.get<User>(url);
  }
}
