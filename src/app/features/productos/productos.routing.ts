import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from 'src/app/features/productos/productos.component';

const routes: Routes = [
    {
        path: '',
        component: ProductosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductosRoutingModule { }