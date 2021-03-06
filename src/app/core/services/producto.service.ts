import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from 'src/app/core/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = "https://sysgestion.somee.com/api/Gestor/";
  constructor(private http:HttpClient) { }
  public getProductos():Observable<Producto>{
      return this.http.get<Producto>(this.url)
  }

  public postProducto(producto):any{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url,producto,{headers:headers});
  }

  public deleteProducto(id):any{
    return this.http.delete(this.url + id);
  }



  

}
