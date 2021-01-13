import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from 'src/app/core/models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private url = "https://sysgestion.somee.com/api/mail/send-email";
  constructor(private http:HttpClient) { }
  public enviarMail(pedido):any{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url,pedido,{headers:headers});
  }
}
