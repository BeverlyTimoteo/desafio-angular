import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuturoCooperadoComponent } from './futuro-cooperado.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FuturoCooperadoRoutingModule } from './futuro-cooperado-routing.module';
import { CooperadoDetalhesComponent } from './cooperado-detalhes/cooperado-detalhes.component';


@NgModule({
  declarations: [
    FuturoCooperadoComponent,
    CooperadoDetalhesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FuturoCooperadoRoutingModule
  ]
})
export class FuturoCooperadoModule { }
