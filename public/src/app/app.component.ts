import { Component, OnInit } from '@angular/core';
import { CakesService } from './cakes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  totalCakes: any
  shownCake: any
  newCake: any
  constructor(private _cakesService: CakesService){}
  
  ngOnInit(){
    this.getCakes()
    this.newCake = { 'bakerName': '', 'url': ''}
  }

  getCakes(){

    let obs = this._cakesService.getCakes()
    obs.subscribe(data => {
      console.log(data)
      this.totalCakes = data['data']
    })
  }

  newCakeSubmit(){
    console.log(this.newCake)
    let obs = this._cakesService.createCake(this.newCake)
    obs.subscribe(data => {
      console.log(data)
      this.getCakes()
    })
  }

  newCommentSubmit(id, event){
    console.log(id, event.value)
    let newComment = { id: id, stars: event.value.stars, comment: event.value.comment }
    console.log(newComment)
    let observable = this._cakesService.createComment(newComment)

    observable.subscribe(data => {
      console.log(data)
      
    })
    event.resetForm()
   
  }
  showCake(cake){
    this.shownCake = null
    let obs = this._cakesService.getShownCake(cake)
    obs.subscribe(data => {
      console.log('Just got them',data['data'])
      this.shownCake = data['data']
      console.log('@@@@SHOWN CAKE',this.shownCake)
    })

  }
}
