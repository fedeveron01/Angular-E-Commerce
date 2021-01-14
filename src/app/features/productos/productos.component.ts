import { Component, OnInit, AfterViewInit } from '@angular/core';

import { RouteStateService } from 'src/app/core/services/route-state.service';
import { ProductoService } from 'src/app/core/services/producto.service';
import { Producto } from 'src/app/core/models/producto.model';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-productos',
  templateUrl: 'productos.component.html',
  styleUrls: ['productos.component.css']
})
export class ProductosComponent implements OnInit {
  columns: any[];
  producto:Producto=new Producto();
  productos: any;
  pageSize: number;

  nombre;
  precio;
  imagen;
  verificado=false;
  isVisible=false;
  

  constructor(
    private message: NzMessageService,
    private productoService: ProductoService) { }

  ngOnInit() {

    this.pageSize = 10;

    this.columns = [
      { field: 'Nombre', header: 'Nombre' },
      { field: 'Precio', header: 'Precio' },
      { field: 'Imagen', header: 'Imagen' },
      { field: 'Acciones', header: 'Acciones' }


    ];

    this.productoService.getProductos().subscribe(data=>this.productos=data );
  }
  verificar(){
    var nombre = <HTMLInputElement>document.getElementById("nombre");
    this.producto.nombre= nombre.value.toString();
    var precio = <HTMLInputElement>document.getElementById("precio");
   
    this.producto.precio = parseInt(precio.value);
    var imagen= <HTMLInputElement>document.getElementById("imagen");
    this.producto.imagen = imagen.value.toString();

    if(this.producto.nombre.length > 3 && this.producto.precio >0 && this.producto.imagen.length > 6){
      this.verificado=true;
    }
  }
  registrarProducto(){
 
    delete this.producto.id;
    let json = JSON.stringify(this.producto);
    console.log(json);
    this.productoService.postProducto(json).subscribe(data=>console.log(data));
    this.message.success("Producto registrado correctamente");

    this.abrirModal();

  }
  abrirModal(){
    this.isVisible=!this.isVisible;
  }
}
