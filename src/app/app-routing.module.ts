import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {path:'milk', loadChildren:()=>import('./milk-module/milk-module.module').then(m=>m.MilkModuleModule)},
  {path:'home', loadChildren:()=>import('./home-module/home-module.module').then(m=>m.HomeModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }