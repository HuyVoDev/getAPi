import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class PostSevice {
    //url = 'https://jsonplaceholder.typicode.com/posts/';
    myHeaders = new Headers();
    APIKey:string = '5567GGH67225HYVGG'
    url =('https://api.tnicorporation.com:6969/api/BravoGetData?FromDate=2020-11-07&ToDate=2020-11-07');
    log: any;
    constructor(private http: HttpClient) { }
    getpost() {
        return this.http.get(this.url);
    }
    //
    

}