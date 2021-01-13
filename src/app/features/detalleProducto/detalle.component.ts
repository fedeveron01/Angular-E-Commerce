import { Component, Inject, Injectable, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ProductoService } from 'src/app/core/services/producto.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
  styleUrls: ['detalle.component.css']
})


export class DetalleComponent {
@Input()
producto;

@Input()
carrito;

@Input()
opcion;




constructor(private message:NzMessageService){
}

ngOnInit(): void {
    console.log(this.producto);
}
agregarProducto(){
    this.carrito.push(this.producto);
    this.message.success('Producto agregado correctamente al carrito , pulsa el boton cerrar para continuar con la compra o ir al carrito');

    this.opcion=0;
    }
  }