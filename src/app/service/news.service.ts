import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import * as urls from '../config/urls'
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http:HttpClient) { }
  configUrl = 'https://www.apiopen.top/journalismApi';
  getConfig() {
    return this.http.get(this.configUrl);
  }
  getOrderClassify(){
    return this.http.get(urls.api+urls.itemMasterOrderClassify);
  }
  getMenuList(){
    let datas = JSON.stringify({
      topcatetory:49,
      storeCode:""
    })
    return this.http.get(urls.api+urls.itemMasterOrderList+"&topcatetory=49&storeCode=");
  }
}


