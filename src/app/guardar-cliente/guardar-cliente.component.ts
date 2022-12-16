import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent implements OnInit {

  clie:Cliente=new Cliente();

  constructor(private clieservi:ClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  ejecutarguardarcliente(){
    this.clieservi.registrarCliente(this.clie).subscribe(dato=>{
      this.router.navigate(["./Listar"])
      console.log(dato);
    })
  }

  OnSubmit(){
    this.ejecutarguardarcliente();
  }
}
