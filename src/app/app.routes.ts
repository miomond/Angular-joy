import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponentComponent } from './components/main-component/main-component.component';


export const routes: Routes = [
{path:"home" , component:HomeComponent},
{path:"login" , component:LoginComponent},
{path:"register" , component:RegisterComponent},
{path:"main-product" , component:MainComponentComponent}

];
