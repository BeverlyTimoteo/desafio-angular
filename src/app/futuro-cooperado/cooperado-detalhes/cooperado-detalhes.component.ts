import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Cooperado } from '../../model/cooperado';

@Component({
  selector: 'app-cooperado-detalhes',
  templateUrl: './cooperado-detalhes.component.html',
  styleUrls: ['./cooperado-detalhes.component.css']
})
export class CooperadoDetalhesComponent implements OnInit {

  cooperado: any;

  constructor(private route: ActivatedRoute) {
    route.queryParams.pipe(take(1)).subscribe(data => {
      this.cooperado = JSON.parse(data['cooperado']) as Cooperado;
    });
  }

  ngOnInit(): void {
  }

}
