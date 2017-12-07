import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  getFavoriteObjects(){
    return JSON.parse(localStorage.getItem('favorites'));
  }

  addObjectToFavorites(object){
    let listOfFavorites=this.getFavoriteObjects();
    if(listOfFavorites===null){
      listOfFavorites=[];
    }
    listOfFavorites.push(object);
    localStorage.setItem('favorites',JSON.stringify(listOfFavorites));
  }

  deleteFavorite(index){
      let listOfFavorites=this.getFavoriteObjects();
      listOfFavorites.splice(index,1);
      localStorage.setItem('favorites',JSON.stringify(listOfFavorites));
  }

}
