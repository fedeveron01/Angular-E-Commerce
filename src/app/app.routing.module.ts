import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/gaurds/auth.gaurd';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'home',
        loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule)
    },
 
    {
        path: 'main',
        component: LayoutComponent,
        children: [{
            path: 'productos',
            loadChildren: () => import('src/app/features/productos/productos.module').then(m => m.ProductosModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'aboutus',
            loadChildren: () => import('src/app/features/aboutus/aboutus.module').then(m => m.AboutUsModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'contactus',
            loadChildren: () => import('src/app/features/contactus/contactus.module').then(m => m.ContactUsModule),
            canActivate: [AuthGuard]
        }]
    },
    {
        path: 'error',
        component: ErrorComponent,
        //loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }