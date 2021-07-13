
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'APIKey': '5567GGH67225HYVGG' })
}
@Injectable({
  providedIn: 'root'
})
export class GetAPiComponentService {
  
  constructor(private http: HttpClient) {
    
   }
  getdata() {
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(url);

  }
}

































// import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {GetAPiComponent} from './get-api.component';

// const httpOptions ={
//   headers:new HttpHeaders({'Content-Type':'Application/json'})
// }
// const apiUrl = 'https://5f0c7a5911b7f60016055e6c.mockapi.io/Api/ahihi';

// @Injectable({
//   providedIn: 'root'
// })
// export class GetAPiComponentService {
//   constructor(private httpClient:HttpClient) { }
//   find(id:number):Observable<GetAPiComponent>{
//     return this.httpClient.get<GetAPiComponent>(`${apiUrl}/${id}`).pipe(
//     )
//   }
//   getAll():Observable<GetAPiComponent[]>{
//     return this.httpClient.get<GetAPiComponent[]>(apiUrl).pipe(
//     )
//   }
// }
