import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CooperadoDetalhesComponent } from "./cooperado-detalhes/cooperado-detalhes.component";
import { FuturoCooperadoComponent } from "./futuro-cooperado.component";

const routes: Routes = [
    {
        path: '', component: FuturoCooperadoComponent,
        children: [
            { path: 'detalhe', component: CooperadoDetalhesComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FuturoCooperadoRoutingModule { }