import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { HttpClientModule} from '@angular/common/http';
import { GuardarClienteComponent } from './guardar-cliente/guardar-cliente.component';   //Esto remplaza al postman para conexion con el back
import { FormsModule } from '@angular/forms';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClienteComponent,
    GuardarClienteComponent,
    ModificarClienteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
