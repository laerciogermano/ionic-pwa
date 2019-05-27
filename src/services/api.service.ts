import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/constants/Config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: String = Config.API_URL;

  constructor(
    public readonly http: HttpClient,
  ){}

  public register(form: any): any {
    return this.http.post(`${this.url}/auth/signup`, form)
      .toPromise();
  }

  public login(form: any): any {
    return this.http.post(`${this.url}/auth/signin`, form)
      .toPromise();
  }
}
