import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MilkModuleModule } from '../milk-module/milk-module.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeContentComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
     CommonModule,
    // BrowserAnimationsModule,
    HomeModuleRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MilkModuleModule

   
  ],
  exports: [
    HomeComponent, AngularMaterialModule, HomeHeaderComponent
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModuleModule { }
