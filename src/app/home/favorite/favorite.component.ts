import { Component, OnInit, Input } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  providers: [LocalstorageService]
})
export class FavoriteComponent implements OnInit {

  @Input() favorites:Array<Object>;
  constructor(private localStorageService:LocalstorageService) { }

  ngOnInit() {
  }

  deleteFavoriteRecord(index:number){
    this.localStorageService.deleteFavorite(index);
    this.favorites=this.localStorageService.getFavoriteObjects();
  }

}
