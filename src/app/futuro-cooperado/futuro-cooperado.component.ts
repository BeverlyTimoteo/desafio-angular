import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cooperado } from '../model/cooperado';
import { FuturoCooperadoService } from './futuro-cooperado.service';

@Component({
  selector: 'app-futuro-cooperado',
  templateUrl: './futuro-cooperado.component.html',
  styleUrls: ['./futuro-cooperado.component.css']
})
export class FuturoCooperadoComponent implements OnInit {

  consultarCpf: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private futuroCooperadoService: FuturoCooperadoService,
    private snack: MatSnackBar
  ) {
    this.consultarCpf = this.formBuilder.group(
      {
        cpf: ['', [Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern(/^[0-9]\d*$/)]]
      }
    )
  }

  ngOnInit(): void {
  }

  consultar(): void {
    if (!this.validoCpf(this.consultarCpf.value['cpf'])) {
      this.snack.open('Cpf inválido!', 'OK', { duration: 3000 });
      return;
    }

    this.futuroCooperadoService
      .verificarFuturoCooperado(this.consultarCpf.value['cpf'])
      .subscribe({
        next: (cooperado: Cooperado[]) => {
          if (cooperado[0] && cooperado[0]?.id > 0) {
            this.router.navigate(['/detalhe'], { queryParams: { cooperado: JSON.stringify(cooperado[0]) }, skipLocationChange: true });
            this.snack.open(`Bem-vindo ${cooperado[0].nome}`, 'OK', { duration: 3000 });
          } else {
            this.snack.open('Que pena, tente novamente e não desista!', 'OK', { duration: 3000 });
          }
        },
        error: (err) => {
          this.snack.open('Algum erro ocorreu, verifique json-server', 'OK', { duration: 2000 });
        }
      })
  }

  validoCpf(cpf: string): boolean {
    var soma = 0;

    if (cpf === undefined || cpf.trim().length == 0) {
      return false;
    }

    if (cpf === '00000000000' || cpf === '11111111111' || cpf === '22222222222' || cpf === '33333333333' ||
      cpf === '44444444444' || cpf === '55555555555' || cpf === '66666666666' || cpf === '77777777777' || cpf === '88888888888' ||
      cpf === '99999999999' || cpf.length !== 11) {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    var resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    soma = 0;
    for (let k = 1; k <= 10; k++) {
      soma = soma + parseInt(cpf.substring(k - 1, k)) * (12 - k)
    }

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  }
}

