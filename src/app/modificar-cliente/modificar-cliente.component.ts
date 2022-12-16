import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  id:number;
  clie:Cliente=new Cliente();

  constructor(private clieservi:ClienteService, private route:Router, private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    this.clieservi.obtenerClienteUnico(this.id).subscribe(dato=>{
      this.clie=dato;
    })
  }

  irListaCliente(){
    this.route.navigate(['./Listar']);
  }
 
  OnSubmit(){
    
    this.clieservi.actualizarCliente(this.id,this.clie).subscribe(dato=>{
      this.irListaCliente();
    })
    
  }
  
}
