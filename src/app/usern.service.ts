import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Loginuser } from './loginuser';
import { Profileuser } from './profileuser';


@Injectable({
  providedIn: 'root'
})
export class UsernService {
  username: string;
  constructor(public http: HttpClient) {
    this.username = localStorage.getItem('username');
  }

  adduser(user: User): Observable<any> {
    return this.http.post(`http://localhost:6060/signup`, user);
  }

  viewallusers(): Observable<any> {
    return this.http.get('http://localhost:6060/users');
  }

  loginuser(loginuser: Loginuser): Observable<any> {
    return this.http.post('http://localhost:6060/login', loginuser);
  }

  getprofile(username: string): Observable<any> {
    return this.http.get(`http://localhost:6060/${username}/profile`);
  }

  addprofile(profileuser: Profileuser): Observable<any> {
    return this.http.post(
      `http://localhost:6060/sid22/addprofile`,
      profileuser
    );
  }

  viewordersbybuyerid(buyerid: string): Observable<any> {
    return this.http.get(`http://localhost:6060/orders/viewordersbybuyerid/`+buyerid);
  }

  logoutuser(): void {
    this.username = '';
    localStorage.setItem('username', '');
  }

  addusername(uname: string) {
    this.username = uname;
    localStorage.setItem('username', uname);
  }
}
