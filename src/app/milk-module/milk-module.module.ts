import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkModuleRoutingModule } from './milk-module-routing.module';
import { MilkDetailsComponent } from './milk-details/milk-details.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MilkCustomersComponent } from './milk-customers/milk-customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MilkerComponent } from './milker/milker.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    MilkDetailsComponent,
    CommonHeaderComponent,
    MilkCustomersComponent,
    MilkerComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    MilkModuleRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [MilkDetailsComponent]
})
export class MilkModuleModule { }
