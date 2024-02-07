import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResult } from '../dataTupes/APIResult';
import { Ilog, Ireg } from '../dataTupes/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  mainPath = "https://localhost:5000"
constructor(private Http:HttpClient) { }

Register(User:Ireg){
  console.log(User);
  return this.Http.post<APIResult<any>>(this.mainPath + '/user/register',User);
}
login(User:Ilog){
  return this.Http.post<APIResult<any>>(this.mainPath + '/user/login',User);

}




}
