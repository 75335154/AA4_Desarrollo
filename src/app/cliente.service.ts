import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //URL base de conexion a backend
  private URLbase="http://localhost:8080/apiRest"

  constructor(private httpClyent:HttpClient) { }

  obtenerCliente():Observable<Cliente[]>{
    return this.httpClyent.get<Cliente[]>(`${this.URLbase+'/cliente/obtener'}`);
  }

  registrarCliente(clie:Cliente):Observable<object>{
    return this.httpClyent.post(`${this.URLbase+'/cliente/insertar'}`,clie);
  }

  actualizarCliente(id:number,clie:Cliente):Observable<object>{
    return this.httpClyent.put(`${this.URLbase+'/cliente/modificar'}/${id}`,clie);
  }

  obtenerClienteUnico(id:number):Observable<Cliente>{
    return this.httpClyent.get<Cliente>(`${this.URLbase+'/cliente/obtener'}/${id}`);
  }

  eliminarCliente(id:number):Observable<object>{
    return this.httpClyent.delete(`${this.URLbase+'/cliente/eliminar'}/${id}`);
  }
}
