import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<CommonDialogComponent>) { }

  public repo;
  
  fieldOptions:Array<Object>;
  selectedField:Object;
  orderOptions:Array<Object>;

  ngOnInit() {

  this.fieldOptions=[];
  for (var key in this.repo) {
    this.fieldOptions.push({'name':key,'value':key});
  }

  this.selectedField=this.fieldOptions[0];




  }

  checkObject(){

  }


}
