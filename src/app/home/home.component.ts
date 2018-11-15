import { DataType } from './../survey/survey.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas:DataType;
  constructor() { }
  getDatas(data){
    this.datas = data;
  }
  ngOnInit() {
  }

}
