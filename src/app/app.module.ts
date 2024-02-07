import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavComponentComponent } from "./components/nav-component/nav-component.component";
import { MainComponentComponent } from "./components/main-component/main-component.component";
import { FotterComponentComponent } from "./components/fotter-component/fotter-component.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CartListService } from "./services/cart-list.service";


@NgModule({
    declarations:[AppComponent ,NavComponentComponent,MainComponentComponent,FotterComponentComponent , HomeComponent,RegisterComponent,LoginComponent] ,
    imports:[BrowserModule,FormsModule , RouterModule.forRoot(routes),HttpClientModule , ReactiveFormsModule],

    bootstrap:[AppComponent],
    providers:[CartListService]
})

export class AppModule{}

