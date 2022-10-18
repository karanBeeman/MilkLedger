import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilkCustomersComponent } from './milk-customers/milk-customers.component';
import { MilkDetailsComponent } from './milk-details/milk-details.component';
import { MilkerComponent } from './milker/milker.component';

const routes: Routes = [
  { path:'', component:MilkDetailsComponent,
     children : [
        { path:'milk-customers', component:MilkCustomersComponent },
        { path:'milkers', component:MilkerComponent }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkModuleRoutingModule { }
