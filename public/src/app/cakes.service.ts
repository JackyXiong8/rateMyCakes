import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private _http: HttpClient) { }


  getCakes(){
    return this._http.get('/cakes')
  }

  createCake(data){
    console.log('@@@@ cakes',data)
    return this._http.post('/cakes', data)
  }

  createComment(data){
    console.log('@ createComment', data)
    return this._http.post('/comment', data)
  }
  getShownCake(data){
    console.log('@@@@@ cakes',data)
    return this._http.post('/singleCake', data)
  }
}
