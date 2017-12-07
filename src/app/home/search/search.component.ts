import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {MatSnackBar} from '@angular/material';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import {MatDialogRef,MatDialog} from '@angular/material';
import {LocalstorageService} from '../../services/localstorage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService,LocalstorageService]
})
export class SearchComponent implements OnInit {

  username:String;
  repoContents:Array<Object>=[];
  showSearchBox:Boolean;
  fieldOptions:Array<Object>;
  selectedField:Object;
  orderOptions:Array<Object>;
  selectedOrder:Object;

  constructor(private myService:GithubService, private snackBar:MatSnackBar,
  private dialog:MatDialog, private localStorageService:LocalstorageService) {
   }

  ngOnInit() {
    this.resetAll();
    this.fieldOptions=[{name:"name",value:"name"},{name:"date",value:"pushed_at"}];
    this.orderOptions=[{name:"Asc",value:1},{name:"Desc",value:-1}]
    this.selectedField=this.fieldOptions[0];
    this.selectedOrder=this.orderOptions[0];
  }

  showSnackBar(message:string, action:string){
    this.snackBar.open(message,action,{duration:2000});
  }

  showContents(){
    this.repoContents=[];
    this.myService.getRepositories(this.username).subscribe(posts=>{
      this.repoContents=posts;
      this.showSearchBox=false;
    }, err =>{
      this.showSnackBar("Not Found", "Connection Error");
      this.showSearchBox=true;
    });

  }

  showDialogData(repo){
    let dialogRef:MatDialogRef<CommonDialogComponent>;
    dialogRef=this.dialog.open(CommonDialogComponent);
    dialogRef.componentInstance.htmlUrl=repo.html_url;
  }

  resetAll(){
    this.showSearchBox=true;
    this.username="";
    this.repoContents=[];
  }

  addToFavorites(repo){
    this.localStorageService.addObjectToFavorites({name:repo.name, url: repo.html_url});
  }

}
