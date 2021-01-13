import { Component, Inject, Injectable, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { ProductoService } from 'src/app/core/services/producto.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Input } from '@angular/core';
import { Pedido } from 'src/app/core/models/pedido.model';
import { PedidoService } from 'src/app/core/services/pedido.service';


@Component({
  selector: 'app-carrito',
  templateUrl: 'carrito.component.html',
  styleUrls: ['carrito.component.css']
})

export class CarritoComponent {
@Input()
carrito:any[];
total=0;
pedido:Pedido=new Pedido();
productos="";
constructor( private pedidoService:PedidoService,private prodService:ProductoService,private message: NzMessageService) {}


obtenerStringProductos(){
    for(var i=0;i<this.carrito.length;i++){
        this.productos+=this.carrito[i].nombre+" | precio = $"+this.carrito[i].precio+"| cantidad = "+this.carrito[i].cantidad+" <br> <br>        ";
    }
}



eliminarProducto(id){
  console.log(id);
  for(var i=0;i<this.carrito.length;i++){
    if (this.carrito[i].id === id)
    {
      if (this.carrito[i].cantidad === 1){
      this.carrito.splice(i,1);
       }
    else{
      this.carrito[i].cantidad-=1;
    }
    }
  }
  this.calcularTotal();
}

calcularTotal(){
  this.total=0;
  for(let i =0;i<this.carrito.length;i++){
      this.total+= this.carrito[i].precio * this.carrito[i].cantidad;

  }
}

validar(){
  
  var input1 = <HTMLInputElement>document.getElementById("celular");
  var input2 = <HTMLInputElement>document.getElementById("apellidoNombre");
  console.log(input2);

  if(input1.checkValidity() && input2.checkValidity()){
      var opcion=confirm("¿Desea confirmar el pedido? , en caso de confirmar se te comunicara al numero ingresado para continuar con la compra");
      if(opcion==true){
        this.pedido.apellidoNombre=input2.value;
        this.pedido.telefono=input1.value;
        this.obtenerStringProductos();
        this.pedido.productos=this.productos;
        this.pedido.direccion="";
        this.pedido.ciudad="";
        this.pedido.total= this.total;

        let json = JSON.stringify(this.pedido);
        this.pedidoService.enviarMail(json).subscribe(data=>console.log(data));
        this.message.success("Pedido enviado correctamente , en las proximas horas se te contactará al numero de celular ingresado para continuar con el pedido")
        document.getElementById('login').style.display='none';
        this.carrito=[];
        window.location.href="https://regaloscba.web.app/home";
      }
  }
  else{
    alert("Ingrese un numero de celular valido , sin espacios ni guiones ");
  }
}

ngOnInit(): void {
  
  this.calcularTotal();
}

}