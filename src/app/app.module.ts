import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModuleModule } from './home-module/home-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProfileMatDialogComponent } from './shared/profile-mat-dialog/profile-mat-dialog.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileMatDialogComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModuleModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
