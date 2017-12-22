import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {MatSnackBar} from '@angular/material';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import {MatDialogRef,MatDialog} from '@angular/material';
import {LocalstorageService} from '../../services/localstorage.service';
import {MatPaginator,MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService,LocalstorageService]
})
export class SearchComponent implements OnInit {

  displayedColumns = ['name', 'date'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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
      this.dataSource=new MatTableDataSource<Element>(posts);
      this.dataSource.paginator = this.paginator;
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

export interface Element {
  name: string;
  pushed_at: Date;
}


const ELEMENT_DATA: Element[] = [
  {name: 'Hydrogen', pushed_at:new Date("12/12/2004")},
  {name: 'Helium', pushed_at:new Date("12/12/2004")},
  {name: 'Lithium', pushed_at:new Date("12/12/2004")},
  {name: 'Beryllium', pushed_at:new Date("12/12/2004")},
  {name: 'Boron', pushed_at:new Date("12/12/2004")},
  {name: 'Carbon', pushed_at:new Date("12/12/2004")},
  {name: 'Nitrogen', pushed_at:new Date("12/12/2004")},
  {name: 'Oxygen', pushed_at:new Date("12/12/2004")},
  {name: 'Fluorine', pushed_at:new Date("12/12/2004")},
  {name: 'Neon', pushed_at:new Date("12/12/2004")},
  {name: 'Sodium', pushed_at:new Date("12/12/2004")},
  {name: 'Magnesium', pushed_at:new Date("12/12/2004")},
  {name: 'Aluminum', pushed_at:new Date("12/12/2004")},
  {name: 'Silicon', pushed_at:new Date("12/12/2004")},
  {name: 'Phosphorus', pushed_at:new Date("12/12/2004")},
  {name: 'Sulfur', pushed_at:new Date("12/12/2004")},
  {name: 'Chlorine', pushed_at:new Date("12/12/2004")},
  {name: 'Argon', pushed_at:new Date("12/12/2004")},
  {name: 'Potassium', pushed_at:new Date("12/12/2004")},
  {name: 'Calcium', pushed_at:new Date("12/12/2004")}
]
