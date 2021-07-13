
import { Component, OnInit } from '@angular/core';
import { GetAPiComponentService } from './get-api-component.service';
import { HttpClient } from '@angular/common/http'
import { error } from '@angular/compiler/src/util';
import { PostSevice } from './post-service'
@Component({
    selector: 'app-post-api',
    templateUrl: './post.component.html',
    styleUrls: ['./get-api.component.css']
})
export class PostAPiComponent {
    title = 'get Data from API';
    data: any;
    constructor(private post: PostSevice) {
        this.post.getpost().subscribe((result) => {
            console.warn('result', result)
            this.data = result
        })
    };
    
}
interface SearchResults {
    total: number;
    results: Array<object>;
}




























function ngOnInit() {
    throw new Error('Function not implemented.');
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
