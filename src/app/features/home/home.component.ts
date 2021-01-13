import { Component, Inject, Injectable, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { ProductoService } from 'src/app/core/services/producto.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Producto } from 'src/app/core/models/producto.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {

page=1;
pageSize=4;
public cantPaginas=0;
public indices=[];
public productos:any;
public carrito:Producto[]=[];
opcion=0;
prodSeleccionado;

constructor(
private prodService:ProductoService,
public message: NzMessageService,

) {}

// Open and close sidebar
therichpost_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
therichpost_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

private getProductos(){
  this.prodService.getProductos().subscribe(res=>this.productos=res)

}

abrirDetalle(id){
  this.prodSeleccionado=id;
  this.opcion=2;
}
abrirCarrito(){
  this.opcion=1;
}
abrirProductos(){
  this.opcion=0;
}

ordenarPorPrecioAsc(){
  this.productos = this.productos.sort((a, b) => a.precio - b.precio);
}
ordenarPorPrecioDesc(){
  this.productos = this.productos.sort((a, b) => b.precio - a.precio);
}

ordenar(evento){
  if (evento ==="precioAscendente"){
    this.ordenarPorPrecioAsc();
  }else{
    this.ordenarPorPrecioDesc();
  }
}

obtenerCantidadProductos():number{
  var cantidad=0;
  for (var i=0;i<this.carrito.length;i++){
      cantidad+= this.carrito[i].cantidad;
  }
  return cantidad;
}


agregarProducto(id){
  var repetido = false;
  var cant = <HTMLInputElement>document.getElementById(id);
  if(parseInt(cant.value) > 9){
    this.message.warning("No se puede agregar más de 9 productos a la vez");
  }
  else
  {
  for (var i = 0;i<this.productos.length;i++)
  {

    if(this.productos[i].id === id){
      for(var j = 0; j<this.carrito.length;j++){
        if (this.carrito[j].id === id){
          repetido = true;
          break;
        }
      }

      if(repetido){
        this.carrito[j].cantidad+=parseInt(cant.value);

      }else{
        this.productos[i].cantidad=parseInt(cant.value);
        this.carrito.push(this.productos[i]);

      }
      this.message.success('Producto agregado correctamente al carrito , abre el carrito para finalizar la compra o eliminar un articulo');
      break;
    }
  }
  
  }
}

ngOnInit(): void {
  this.getProductos();
  console.log(this.productos);

}

siguientePagina(){
  this.page++;
}
anteriorPagina(){
  this.page--;
}
abrirPagina(i){
  this.page=i;
}

calcularCantidadPaginas(){
  this.cantPaginas= Math.ceil( this.productos.length/this.pageSize ) ;
  this.indices=[];
  for (var i=0;i<this.cantPaginas;i++){
    this.indices.push(i+1);
  }
  console.log(this.indices);
}
}