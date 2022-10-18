import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch:'full'},
  // {path:'home', component:HomeContentComponent},
   
  //     {path:'login', component:LoginComponent},
  //     {path:'register',component:RegisterComponent}
    {path:'', component:HomeComponent,
    children:[
      {path:'', component:HomeContentComponent},
      {path:'login', component:LoginComponent},
      {path:'register',component:RegisterComponent}
     
    ]
  
  }
   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
