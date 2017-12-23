import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatTableModule,MatPaginatorModule,MatSortModule,MatExpansionModule,  } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatTableModule,MatPaginatorModule,MatSortModule,MatExpansionModule,],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatTableModule,MatPaginatorModule,MatSortModule,MatExpansionModule,],
})
export class MaterialModule { }
