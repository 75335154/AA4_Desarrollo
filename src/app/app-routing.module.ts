import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { GuardarClienteComponent } from './guardar-cliente/guardar-cliente.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

const routes: Routes = [
  {path:'Listar',component:ListaClienteComponent,pathMatch:'full'},
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'Guardar',component:GuardarClienteComponent,pathMatch:'full'},
  {path:'Modificar/:id',component:ModificarClienteComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
