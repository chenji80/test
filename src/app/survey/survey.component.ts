import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  datas:DataType;
  @Output() putDatas:EventEmitter<DataType> = new EventEmitter;
  constructor() { }
  ngOnInit() {
    this.datas=new DataType("","","");
    this.putDatas.emit(this.datas)
  }

}

export class DataType{
  constructor(public qq:string,public phone:string,public idea:string){}
}