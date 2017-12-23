import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {MatSnackBar} from '@angular/material';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import {MatDialogRef,MatDialog} from '@angular/material';
import {LocalstorageService} from '../../services/localstorage.service';
import {MatPaginator,MatTableDataSource, MatSort} from '@angular/material';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService,LocalstorageService]
})
export class SearchComponent implements OnInit {
displayedColumns = ['name', 'pushed_at','actionsColumn'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  username:String;
  repoContents:Array<Object>=[];
  showSearchBox:Boolean;

  constructor(private myService:GithubService, private snackBar:MatSnackBar,
  private dialog:MatDialog, private localStorageService:LocalstorageService) {
   }

  ngOnInit() {
    this.resetAll();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showSnackBar(message:string, action:string){
    this.snackBar.open(message,action,{duration:2000});
  }

  showContents(){
    this.repoContents=[];
    this.myService.getRepositories(this.username).subscribe(posts=>{
      this.dataSource=new MatTableDataSource<Element>(posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
const ELEMENT_DATA: Element[] = [];
/*const ELEMENT_DATA: Element[] = [
  {name: 'Hydrogen', pushed_at:new Date("12/12/2000")},
  {name: 'Helium', pushed_at:new Date("12/12/2003")},
  {name: 'Lithium', pushed_at:new Date("12/12/2004")},
  {name: 'Beryllium', pushed_at:new Date("12/12/2002")},
  {name: 'Boron', pushed_at:new Date("12/12/2010")},
  {name: 'Carbon', pushed_at:new Date("12/11/2010")},
  {name: 'Nitrogen', pushed_at:new Date("12/12/2018")},
  {name: 'Oxygen', pushed_at:new Date("12/12/2014")},
  {name: 'Fluorine', pushed_at:new Date("12/12/2013")},
  {name: 'Neon', pushed_at:new Date("12/12/2009")},
  {name: 'Sodium', pushed_at:new Date("12/12/2017")},
  {name: 'Magnesium', pushed_at:new Date("12/12/2005")},
  {name: 'Aluminum', pushed_at:new Date("12/12/2006")},
  {name: 'Silicon', pushed_at:new Date("12/12/2007")},
  {name: 'Phosphorus', pushed_at:new Date("12/12/2009")},
  {name: 'Sulfur', pushed_at:new Date("12/12/2012")},
  {name: 'Chlorine', pushed_at:new Date("12/12/2013")},
  {name: 'Argon', pushed_at:new Date("12/12/2014")},
  {name: 'Potassium', pushed_at:new Date("12/12/2015")},
  {name: 'Calcium', pushed_at:new Date("12/12/2019")}
]*/
