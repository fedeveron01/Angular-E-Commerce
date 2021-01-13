import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/features/home/home.component';
import { HomeRoutingModule } from 'src/app/features/home/home.routing';
import { AppCommonModule } from 'src/app/app.common.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { CarritoComponent } from '../carrito/carrito.component';
import { DetalleComponent } from '../detalleProducto/detalle.component';

import { NzSelectModule } from 'ng-zorro-antd/select';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppCommonModule,
    NzBadgeModule,
    NzImageModule,
    NzMessageModule,
    NzSelectModule,
 
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  declarations: [HomeComponent,CarritoComponent,DetalleComponent],
  exports: [TranslateModule]
})
export class HomeModule { }