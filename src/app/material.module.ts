import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatIconModule  } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatIconModule],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule,MatIconModule, MatCardModule,MatSnackBarModule,MatListModule,MatTabsModule,MatDialogModule,MatSelectModule,MatIconModule],
})
export class MaterialModule { }
