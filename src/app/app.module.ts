import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CelularComponent } from './components/celular/celular.component';
import { ListaComponent } from './components/lista/lista.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component'

@NgModule({
  declarations: [
    AppComponent,
    CelularComponent,
    ListaComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
