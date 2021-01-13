import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from 'src/app/features/carrito/carrito.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzMessageModule } from 'ng-zorro-antd/message';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    NzBadgeModule,
    NzImageModule,
    NzMessageModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  declarations: [CarritoComponent],
  exports: [TranslateModule]
})
export class CarritoModule { }