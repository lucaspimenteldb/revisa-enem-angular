import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.component.html',
  styleUrls: ['./assinatura.component.scss']
})
export class AssinaturaComponent implements OnInit {
  souAluno: boolean = true;
  souEscola: boolean = false;
  nome: string = '';

  constructor() { }

  ngOnInit() {
  }

}
