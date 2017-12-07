import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfirmActionDirective } from './directives/confirm-action.directive';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './home/favorite/favorite.component';
import { SearchComponent } from './home/search/search.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { AccessGuardService } from './services/access-guard.service';
import { Auth0Service } from './services/auth0.service';
import { ConfigurationService } from './services/configuration.service';
import { GithubService } from './services/github.service';
import { LocalstorageService } from './services/localstorage.service';
import { CommonDialogComponent } from './dialogs/common-dialog/common-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmActionDirective,
    HomeComponent,
    FavoriteComponent,
    SearchComponent,
    OrderByPipe,
    CommonDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
  ],
  entryComponents:[CommonDialogComponent],
  providers: [AccessGuardService, Auth0Service, ConfigurationService, GithubService, LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
