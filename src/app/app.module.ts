import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FuturoCooperadoModule } from './futuro-cooperado/futuro-cooperado.module';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    AppComponent,
    MenuLeftComponent,
    RodapeComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FuturoCooperadoModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
