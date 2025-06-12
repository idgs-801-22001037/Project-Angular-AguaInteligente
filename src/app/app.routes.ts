import { Routes } from '@angular/router';
import { HomePageComponent } from '../Pages/home-page/home-page.component';
import { LoginPageComponent } from '../Pages/login-page/login-page.component';

export const routes: Routes = [

    {
        path:'',
        component: HomePageComponent
    },
    {
        path:"login",
        component: LoginPageComponent
    },


];
