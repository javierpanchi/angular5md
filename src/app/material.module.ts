import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatTableModule,MatPaginatorModule,MatSortModule  } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatTableModule,MatPaginatorModule,MatSortModule],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatTableModule,MatPaginatorModule,MatSortModule],
})
export class MaterialModule { }
