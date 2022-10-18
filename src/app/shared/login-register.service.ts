import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  baseURL: string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  public login(username : string, pass: string): Observable<any> {
    console.log('formdata in service ', username)
    // const params = new HttpParams().set('username', username).set('password', pass);
    const params = {username: username, password: pass}
    const headers = { 'content-type': 'application/json'}  
    return this.httpClient.get(environment.apiBase +'login', {params});
  }
}
