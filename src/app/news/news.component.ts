import { Routes } from '@angular/router';
import { NewsService } from './../service/news.service';
import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  datas=[];
  defaultDatas=[];
  sortType:boolean = false;
  // @Output() putDatas:EventEmitter<dataType> = new EventEmitter;
  constructor( private newsService: NewsService) { }
  
  loadData(){
    $.showLoading()
    this.newsService.getOrderClassify().subscribe((r)=>console.log(r));
    this.newsService.getMenuList().subscribe((r)=>console.log(r));
    this.newsService.getConfig().subscribe(
      (res)=>{
        console.log(res);
        $.hideLoading();
        //let arrNew =[];
        let arr =[];
        arr = Object.values(res['data']);
        for(let i = 0; i< arr.length; i++){
          for(let t = 0; t<arr[i].length;t++){
            this.defaultDatas.push(arr[i][t])
          }
        }
        // this.datas = this.defaultDatas.concat();
        this.datas = [...this.defaultDatas];
      }
    )
  }

  ngOnInit() {
    this.loadData();
  }

  sortNews(){
    $.showLoading();
    if(!this.sortType){
      this.datas = this.datas.sort((a,b)=>b.tcount-a.tcount)
    }else{
      // this.datas = this.defaultDatas.concat();
      this.datas = [...this.defaultDatas];
      console.log(this.defaultDatas)
    }
    this.sortType = !this.sortType;
    
    $.hideLoading();
    
  }

  
}

// export class dataType{
//   constructor(public datas:object){}
// }