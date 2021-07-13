
import { Component, OnInit } from '@angular/core';
import { GetAPiComponentService } from './get-api-component.service';
import { HttpClient, HttpParams } from '@angular/common/http'
import { error } from '@angular/compiler/src/util';
import { PostSevice } from './post-service'
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetAPiComponent {

  title = 'get Data from API';
  router: any;
  route: any;
  log: any;
  result: any;
  // constructor(private user: GetAPiComponentService) {
  //   this.user.getdata().subscribe(data => {
  //     console.warn(data)
  //   })
  // };
  constructor(private http: HttpClient) { }
  totalAngularPackages;
  postId
  ngOnInit() {

    //GET HTTP
    var url: string = 'https://jsonplaceholder.typicode.com/todos'
    //https://jsonplaceholder.typicode.com/todos
    const headers = { 'APIKey': '5567GGH67225HYVGG' }
    this.http.get<any>(url).subscribe({
      next: data => this.totalAngularPackages = data.total,
      error: error => console.error('there was eroor', error),
    })

    this.http.get<any>(url, { headers }).subscribe((data) => {
      this.result = data
    })

    // POST HTTP
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
        this.postId = data.id;
    });
  }

  getHeroes(): Observable<any[]> {
    var url: string = 'c'
    return this.http.get<any[]>(url)
      .pipe(
        tap(_ => this.log('fetched heroes')),

      )
  }
}
interface SearchResults {
  total: number;
  results: Array<object>;
}































// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// @Component({
//   selector: 'app-get-api',
//   templateUrl: './get-api.component.html',
//   styleUrls: ['./get-api.component.css']
// })
// export class GetAPiComponent implements OnInit {
//   ngOnInit(): void {
//   }
//   id:number;
//   name:string;
//   price: number;
//   quantity: number;
//   img: string;
//   description: string;
//   private apiURL = 'https://api.tnicoporation.vn:6969/api/authen/'

//   photos: any = {};
//   constructor(private http: HttpClient) {
//     this.getPhoto();
//   }

//   getData() {
//     return this.http.get(this.apiURL).pipe(map((response: Response) => response.json()))
//   }

//   getPhoto() {
//     this.getData().subscribe((data) => {
//       console.log(data);
//       this.photos = data;
//     })
//   }
// }
