import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { ProductosRoutingModule } from 'src/app/features/productos/productos.routing';
import { ProductosComponent } from 'src/app/features/productos/productos.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {NzMessageModule} from 'ng-zorro-antd/message';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    NzButtonModule,
    NzModalModule,
    NzMessageModule,
  ],
  declarations: [
    ProductosComponent
  ]
})
export class ProductosModule { }