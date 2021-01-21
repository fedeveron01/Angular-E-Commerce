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
aumentarCantidad(id){
  var cant = <HTMLInputElement>document.getElementById(id);
  var valor = parseInt(cant.value);
  if(valor<9){
     valor = parseInt(cant.value) + 1;
  }
  cant.value=valor.toString();

}

disminuirCantidad(id){
  var cant = <HTMLInputElement>document.getElementById(id);
  var valor = parseInt(cant.value);
  if(valor>1){
     valor = parseInt(cant.value) - 1;
  }
  cant.value=valor.toString();
}
agregarProducto(producto){
  var repetido = false;
  var cant = <HTMLInputElement>document.getElementById(producto.id);
  if(parseInt(cant.value) > 9){
    this.message.warning("No se puede agregar más de 9 productos a la vez");
  }  
  else if(parseInt(cant.value) < 1){
    this.message.warning("La cantidad de productos debe ser al menos 1");
  }
  else
  {
      for(var j = 0; j<this.carrito.length;j++){
        if (this.carrito[j].id === producto.id){
          repetido = true;
          break;
        }
      }
      if(repetido){
        this.carrito[j].cantidad+=parseInt(cant.value);

      }else{
        this.producto.cantidad=parseInt(cant.value);
        this.carrito.push(this.producto);

      }
      this.message.success('Producto agregado correctamente al carrito , abre el carrito para finalizar la compra o eliminar un articulo');
    }
  }

  }






