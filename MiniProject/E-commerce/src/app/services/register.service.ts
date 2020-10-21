import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url="http://localhost:3000/enroll";

  constructor(private _http:HttpClient) { }

  createUser(data){
    return this._http.post(this.url , data);

  }
}
