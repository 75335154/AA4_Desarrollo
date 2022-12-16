import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ModificarClienteComponent } from '../modificar-cliente/modificar-cliente.component';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  listaCliente:Cliente[];
  constructor(private clieservi:ClienteService, private router:Router) {}

  ngOnInit(): void {
    this.ejecutarServicioObtener();
  }

  private ejecutarServicioObtener(){
    this.clieservi.obtenerCliente().subscribe(dato =>{
      this.listaCliente=dato;
    });
  }

  actualizarCliente(idregistrowilson:number){
    this.router.navigate(['./Modificar',idregistrowilson]);
  }

  eliminarCliente(idregistrowilson:number){
    this.clieservi.eliminarCliente(idregistrowilson).subscribe(dato=>{
      this.ejecutarServicioObtener();
    });
    
  }
}
