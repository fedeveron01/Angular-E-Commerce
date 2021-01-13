import { Component, Inject, Injectable, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { ProductoService } from 'src/app/core/services/producto.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {

public productos:any;
public carrito:any[]=[];
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

agregarProducto(id){
  for (var i = 0;i<this.productos.length;i++){
    if(this.productos[i].id === id){
      this.carrito.push(this.productos[i]);
      this.message.success('Producto agregado correctamente al carrito , abre el carrito para finalizar la compra o eliminar un articulo');
      break;
    }
  }
}

ngOnInit(): void {
  this.getProductos()
  console.log(this.productos);

}

}