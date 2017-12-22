import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatTableModule,MatPaginatorModule  } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatTableModule,MatPaginatorModule],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatTableModule,MatPaginatorModule],
})
export class MaterialModule { }
