import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  defaultImage = '';
  image = '';
  offset = 200;
  private new:object
  @Input() private datalist;
  constructor() { }

  ngOnInit() {
    this.image = this.datalist.picInfo.length>0 ?  this.datalist.picInfo[0].url : ''
  }

}

