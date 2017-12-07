import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<CommonDialogComponent>) { }

  public htmlUrl;
  ngOnInit() {
  }

}
