import { Component, OnInit } from '@angular/core';
import { GetAPiComponentService } from '../../components/get-api/get-api-component.service';
import { GetAPiComponent } from '../../components/get-api/get-api.component'
@Component({
  selector: 'app-list-get-api',
  templateUrl: './list-get-api.component.html',
  styleUrls: ['./list-get-api.component.css']
})
export class ListGetApiComponent implements OnInit {

  datas:GetAPiComponent[]=[];

  constructor(private GetAPiComponentService: GetAPiComponentService) { }

  ngOnInit(): void {
    //this.getAll();
  }

  // getAll(){
  //   this.GetAPiComponentService.getAll().subscribe((res:any)=>{
  //     this.datas = res
  //   })
  // }
}
